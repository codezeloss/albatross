import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

// !! POST
export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId)
      return NextResponse.json({ status: 401, error: "Unauthorized" });

    const { title, description, date, isCompleted, isImportant } =
      await req.json();

    if (!title || !description || !date)
      return NextResponse.json({
        status: 400,
        error: "Missing required fields",
      });

    const task = await prismadb.task.create({
      data: {
        title,
        description,
        date,
        isCompleted,
        isImportant,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("TASK_POST", e);
    return NextResponse.json({ status: 500, error: "Error creating task" });
  }
}

// !! GET
export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    if (!params.userId) {
      return NextResponse.json({ status: 401, error: "Unauthorized" });
    }

    const tasks = await prismadb.task.findMany({
      where: {
        userId: params.userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(tasks);
  } catch (e) {
    console.log("TASK_GET", e);
    return NextResponse.json({ status: 500, error: "Error finding task" });
  }
}

// !! PUT
export async function PUT(
  req: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { id, isCompleted } = await req.json();

    if (!params.userId) {
      return NextResponse.json({ status: 401, error: "Unauthorized" });
    }

    const task = await prismadb.task.update({
      where: {
        id,
      },
      data: {
        isCompleted,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("TASK_STATUS_PUT", e);
    return NextResponse.json({
      status: 500,
      error: "Error updating completed/inCompleted task",
    });
  }
}

// !! DELETE
export async function DELETE(req: Request) {
  try {
  } catch (e) {
    console.log("TASK_DELETE", e);
    return NextResponse.json({ status: 500, error: "Error deleting task" });
  }
}
