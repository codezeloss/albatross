import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";

// !! DELETE
export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId)
      return NextResponse.json({ status: 401, error: "Unauthorized" });

    const task = await prismadb.task.delete({
      where: {
        id: params.taskId,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("DELETE_TASK", e);
    return NextResponse.json({ status: 500, error: "Error deleting the task" });
  }
}

// !! PUT
export async function PUT(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { userId } = auth();
    const { title, description, date, isCompleted, isImportant } =
      await req.json();

    if (!userId) {
      return NextResponse.json({ status: 401, error: "Unauthorized" });
    }

    const task = await prismadb.task.update({
      where: {
        id: params.taskId,
      },
      data: {
        title,
        description,
        date,
        isCompleted,
        isImportant,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log("TASK_PUT", e);
    return NextResponse.json({ status: 500, error: "Error updating task" });
  }
}
