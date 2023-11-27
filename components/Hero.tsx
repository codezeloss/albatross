"use client";

import { Button } from "@/components/ui/button";
import { ChevronRightCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Hero({ user }: any) {
  const router = useRouter();

  // ** Handle Create Task click
  const handleClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    if (user) {
      router.push(`/${user}/all-tasks`);
    } else {
      if (!user) router.push("/sign-in");
    }
  };

  return (
    <div className="w-full flex flex-col space-y-4 md:space-y-6 items-center justify-center py-11 md:py-14 lg:py-28 text-center">
      <h1 className="max-w-[550px] font-bold text-4xl lg:text-6xl">
        Get simple + easy to manage your{" "}
        <span className="text-red-500 line-through">task</span> productivity
      </h1>

      <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
        Manage your tasks with easy to use dashboard, task management
      </p>

      <Button
        size="lg"
        variant="default"
        className="font-semibold flex items-center gap-x-2 shadow-xl"
        onClick={handleClick}
      >
        Create New Task <ChevronRightCircle size={18} />
      </Button>
    </div>
  );
}
