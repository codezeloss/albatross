import Container from "@/components/Container";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { MainNavigation } from "@/components/MainNavigation";
import { Button } from "@/components/ui/button";
import { KanbanSquare, LogOutIcon } from "lucide-react";

export default function Navbar() {
  return (
    <header className="border-b px-6">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-black dark:text-white flex items-center gap-2 flex items-center gap-x-2"
          >
            <KanbanSquare size={29} />
            albatross
          </Link>

          <div className="flex items-center space-x-3">
            <Button
              size="default"
              variant="destructive"
              className="flex items-center gap-x-2"
            >
              <LogOutIcon size={20} />
              Sign Out
            </Button>

            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
