import Container from "@/components/Container";
import { TaskProps } from "@/types";
import { getAllTasks } from "@/actions/getAllTasks";
import { TaskCard } from "@/components/TaskCard";
import AddTask from "@/components/ui/add-task";

export default async function ImportantTasks({
  params,
}: {
  params: { userId: string };
}) {
  let importantTasks: TaskProps[] = [];

  if (params.userId) {
    const tasks = await getAllTasks(params.userId);
    importantTasks = tasks.filter((task: TaskProps) => task.isImportant);
  }

  return (
    <div className="">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantTasks.length > 0 &&
            importantTasks.map((task: TaskProps) => (
              <TaskCard key={task.id} {...task} />
            ))}
          <AddTask />
        </div>

        <div>{!importantTasks && <div>No Tasks found</div>}</div>
      </Container>
    </div>
  );
}
