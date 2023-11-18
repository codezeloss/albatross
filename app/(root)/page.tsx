import Container from "@/components/Container";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect(`/${userId}/all-tasks`);

  return (
    <main className="py-6">
      <Container>
        <div>Home</div>
      </Container>
    </main>
  );
}
