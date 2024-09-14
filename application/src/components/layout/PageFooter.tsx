import { Global } from "@/types/Global";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

type PageFooterProps = {
  text: Global["footer_text"];
  links: Global["footer_links"];
} & ComponentProps<"footer">;

export const PageFooter = ({ className, text, links }: PageFooterProps) => {
  return (
    <footer
      className={cn("z-50 bottom-0 py-6 bg-primary text-secondary", className)}
    >
      <ul className="flex justify-evenly py-12">
        {links.map((link) => (
          <li key={link.id}>
            <Button asChild variant="link" size="lg" className="text-lg">
              <div className="grid grid-cols-4 gap-3">
                <Image
                  className="col-span-1"
                  src={`/icons/socials/${link.icon}.svg`}
                  alt={link.text}
                  width={32}
                  height={32}
                />
                <Link
                  className="col-span-3 text-secondary"
                  href={link.link}
                  target={link.target}
                >
                  {link.text}
                </Link>
              </div>
            </Button>
          </li>
        ))}
      </ul>
      {/* Copyright text */}
      <p className="text-center text-sm">{text}</p>
    </footer>
  );
};
