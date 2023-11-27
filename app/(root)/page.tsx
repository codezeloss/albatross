import Container from "@/components/Container";
import Image from "next/image";
import { Inter } from "next/font/google";
import { auth } from "@clerk/nextjs";
import Hero from "@/components/Hero";
import Images from "@/components/Images";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  const { userId } = auth();

  return (
    <main className={`${inter.className} py-6`}>
      <Container>
        <div className="py-8 flex flex-col space-y-14 lg:space-y-16 items-center justify-center">
          <Hero user={userId} />

          <div className="w-full h-full">
            <div className="mb-4 space-y-0 md:space-y-1">
              <h2 className="font-bold text-2xl lg:text-4xl">
                Dark/Light Mode
              </h2>
              <p className="max-w-[400px] text-muted-foreground font-medium text-sm md:text-base">
                You can switch between dark & light mode
              </p>
            </div>
            <Images img1="/screen-01.png" img2="/screen-02.png" />
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
            <Images img1="/screen-03.png" img2="/screen-04.png" />
          </div>
        </div>
      </Container>
    </main>
  );
}
