import Container from "@/components/Container";
import { TaskCard } from "@/components/TaskCard";
import { PlusIcon } from "lucide-react";
import AddTask from "@/components/ui/add-task";
import { auth } from "@clerk/nextjs";
import { TaskProps } from "@/types";

const getAllTasks = async (userId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/${userId}/tasks`,
      { cache: "no-cache" }
    );

    return await response.json();
  } catch (e) {
    console.log(e);
    return null;
  }
};

export default async function AllTasks() {
  const { userId } = auth();

  let tasks: TaskProps[] = [];
  if (userId) tasks = await getAllTasks(userId);

  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.length > 0 &&
            tasks.map((task: TaskProps) => (
              <TaskCard key={task.id} {...task} />
            ))}
          <AddTask />
        </div>

        <div>{!tasks && <div>No Tasks found</div>}</div>
      </Container>
    </div>
  );
}
