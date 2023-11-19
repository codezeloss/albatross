import Container from "@/components/Container";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { ChevronRightCircle } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const { userId } = auth();

  return (
    <main className={`${inter.className} py-6`}>
      <Container>
        <div className="py-8 flex flex-col space-y-14 lg:space-y-16 items-center justify-center">
          <div className="flex flex-col space-y-4 md:space-y-6 items-start justify-center md:items-center py-11 md:py-14 lg:py-28 text-left md:text-center">
            <h1 className="max-w-[530px] font-bold text-4xl  lg:text-6xl">
              Get simple + easy to manage your{" "}
              <span className="text-red-500 line-through">task</span>{" "}
              productivity
            </h1>

            <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
              manage your tasks with easy to use dashboard, task management
            </p>

            <Link href={`/${userId}/all-tasks`}>
              <Button
                size="lg"
                variant="default"
                className="font-semibold flex items-center gap-x-2 shadow-xl"
              >
                Create New Task <ChevronRightCircle size={18} />
              </Button>
            </Link>
          </div>

          <div className="w-full h-full">
            <div className="mb-4 space-y-0 md:space-y-1">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Dark/Light Mode
              </h2>
              <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
                You can switch between dark & light mode
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[500px]">
                <Image
                  className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
                  src="/screen-01.png"
                  alt="Light Mode screenshot"
                  fill
                />
              </div>

              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[500px]">
                <Image
                  className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
                  src="/screen-02.png"
                  alt="Dark Mode screenshot"
                  fill
                />
              </div>
            </div>
          </div>

          <div className="w-full h-full">
            <div className="mb-4 space-y-0 md:space-y-1">
              <h2 className="font-bold text-2xl lg:text-4xl">Filter Tasks</h2>
              <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
                You can filter your tasks depending on your focus
              </p>
            </div>

            <div className="relative w-full h-[40px] md:h-[100px]">
              <Image
                className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
                src="/toolbar.png"
                alt="Light Mode screenshot"
                fill
              />
            </div>
          </div>

          <div className="w-full h-full">
            <div className="mb-4 space-y-0 md:space-y-1">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Create/Edit Mode
              </h2>
              <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
                You can create new tasks & update them whenever you want!
              </p>
            </div>
            <div className="w-full h-full grid grid-cols-1 xl:grid-cols-2 gap-4">
              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[500px]">
                <Image
                  className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
                  src="/screen-03.png"
                  alt="Create Task screenshot"
                  fill
                />
              </div>

              <div className="relative w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[650px] xl:h-[500px]">
                <Image
                  className="absolute w-full h-full border-2 border-black dark:border-white object-fill"
                  src="/screen-04.png"
                  alt="Edit Task screenshot"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
