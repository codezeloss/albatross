import Container from "@/components/Container";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { KanbanSquare, LogOutIcon } from "lucide-react";
import {
  auth,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="px-6 border-b-4 border-b-[#84cc16] text-black dark:text-white">
      <Container>
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold text-black dark:text-white flex items-center gap-2 gap-x-2"
          >
            <KanbanSquare size={29} />
            albatross
          </Link>

          <div className="flex items-center space-x-3">
            <div className="border-2 rounded-full border-black dark:border-[#84cc16] w-10 h-10 flex items-center justify-center">
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/sign-in"
                  userProfileMode="modal"
                />
              </SignedIn>
            </div>

            <SignedOut>
              <div className="flex items-center gap-x-2">
                <Link href="/sign-in">
                  <Button size="default" variant="secondary">
                    Sign In
                  </Button>
                </Link>
                <Link href="/sign-up">
                  <Button size="default" variant="default">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </SignedOut>

            <ModeToggle />
          </div>
        </div>
      </Container>
    </header>
  );
}
