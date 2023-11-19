import Container from "@/components/Container";
import { TaskCard } from "@/components/TaskCard";
import AddTask from "@/components/ui/add-task";
import { TaskProps } from "@/types";
import { getAllTasks } from "@/actions/getAllTasks";

export default async function AllTasks({
  params,
}: {
  params: { userId: string };
}) {
  let tasks: TaskProps[] = [];

  if (params.userId) tasks = await getAllTasks(params.userId);

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
