import { Global } from "@/types/Global";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type PageFooterProps = {
  text: Global["footer_text"];
  links: Global["footer_links"];
} & ComponentProps<"footer">;

export const PageFooter = ({ className, text, links }: PageFooterProps) => {
  return (
    <footer className={cn("z-50 bottom-0 p-4", className)}>
      <p>{text}</p>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id} className="text-white">
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
