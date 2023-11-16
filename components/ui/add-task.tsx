import { PlusIcon } from "lucide-react";

export default function AddTask() {
  return (
    <button
      type="button"
      className="flex h-full w-full items-center gap-x-1 justify-center rounded-md border border-dashed text-sm hover:bg-gray-100 dark:hover:bg-gray-100/10 hover:border-2"
    >
      <PlusIcon size={20} /> New Task
    </button>
  );
}
