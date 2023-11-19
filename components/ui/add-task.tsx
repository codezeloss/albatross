"use client";

import { PlusIcon } from "lucide-react";
import { onClickOpen } from "@/redux/modalSlice";
import { useDispatch } from "react-redux";

export default function AddTask() {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className="flex h-full min-h-[200px] w-full items-center gap-x-1 justify-center rounded-md border border-l-dashed border-t-dashed text-sm hover:bg-gray-100 dark:hover:bg-gray-100/10 hover:border-2 border-r-8 border-gray-200 dark:border-white/5 border-b-8"
      onClick={() => dispatch(onClickOpen())}
    >
      <PlusIcon size={20} /> New Task
    </button>
  );
}
