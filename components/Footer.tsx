import { AtSignIcon, FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import Container from "@/components/Container";

export default function Footer() {
  return (
    <footer className="w-full border-t mt-auto max-h-16">
      <Container>
        <div className="w-full h-16 max-h-16 flex items-center justify-between px-6">
          <p className="text-left text-xs dark:text-white text-muted-foreground">
            &copy;2024 albatross. All rights reserved.
          </p>

          <div className="flex items-center gap-x-2">
            <Link
              className="cursor-pointer"
              href={`${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`}
            >
              <AtSignIcon size={20} />
            </Link>
            <Link
              className="cursor-pointer"
              href={`${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`}
            >
              <FacebookIcon size={20} />
            </Link>
            <Link
              className="cursor-pointer"
              href={`${process.env.NEXT_PUBLIC_PORTFOLIO_LINK}`}
            >
              <InstagramIcon size={20} />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
