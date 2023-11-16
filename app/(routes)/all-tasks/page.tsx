import Container from "@/components/Container";
import { TaskCard } from "@/components/TaskCard";
import { PlusIcon } from "lucide-react";
import AddTask from "@/components/ui/add-task";

export default function AllTasks() {
  return (
    <main className="py-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 mb-11">
          <TaskCard />
          <AddTask />
        </div>
      </Container>
    </main>
  );
}
