import Container from "@/components/Container";
import { TaskProps } from "@/types";
import { getAllTasks } from "@/actions/getAllTasks";
import { TaskCard } from "@/components/TaskCard";
import AddTask from "@/components/ui/add-task";

export default async function CompletedTasks({
  params,
}: {
  params: { userId: string };
}) {
  let completedTasks: TaskProps[] = [];

  if (params.userId) {
    const tasks = await getAllTasks(params.userId);
    completedTasks = tasks.filter((task: TaskProps) => task.isCompleted);
  }

  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {completedTasks.length > 0 &&
            completedTasks.map((task: TaskProps) => (
              <TaskCard key={task.id} {...task} />
            ))}
          <AddTask />
        </div>

        <div>{!completedTasks && <div>No Tasks found</div>}</div>
      </Container>
    </div>
  );
}
