import { SignIn } from "@clerk/nextjs";
import { KanbanSquare } from "lucide-react";
import { dark, neobrutalism } from "@clerk/themes";

export default function UserSignIn() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center absolute top-0 right-0 bg-white dark:bg-black z-50">
      <div className="text-2xl md:text-3xl font-bold text-black dark:text-white flex items-center gap-2 gap-x-2 mb-4">
        <KanbanSquare size={29} />
        albatross
      </div>

      <SignIn
        appearance={{
          baseTheme: [dark, neobrutalism],
          variables: { colorPrimary: "#84cc16", colorText: "white" },
        }}
      />
    </div>
  );
}
