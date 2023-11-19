import Container from "@/components/Container";
import { TaskProps } from "@/types";
import { getAllTasks } from "@/actions/getAllTasks";
import { TaskCard } from "@/components/TaskCard";
import AddTask from "@/components/ui/add-task";

export default async function InCompletedTasks({
  params,
}: {
  params: { userId: string };
}) {
  let inCompletedTasks: TaskProps[] = [];

  if (params.userId) {
    const tasks = await getAllTasks(params.userId);
    inCompletedTasks = tasks.filter((task: TaskProps) => !task.isCompleted);
  }

  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {inCompletedTasks.length > 0 &&
            inCompletedTasks.map((task: TaskProps) => (
              <TaskCard key={task.id} {...task} />
            ))}
          <AddTask />
        </div>

        <div>{!inCompletedTasks && <div>No Tasks found</div>}</div>
      </Container>
    </div>
  );
}
