import { Global } from "@/types/Global";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/api-helpers";

type PageHeaderProps = {
  logo: Global["logo"];
  navigation: Global["navigation"];
} & ComponentProps<"header">;

export const PageHeader = ({
  className,
  logo,
  navigation,
}: PageHeaderProps) => {
  const imageUrl = getStrapiMedia(logo.url) || "";
  return (
    <header className={cn("z-50 top-0 p-4", className)}>
      <Image
        priority
        src={imageUrl}
        alt={logo.alternativeText}
        width={logo.width}
        height={logo.height}
      />
      <nav>
        <ul>
          {navigation.map((link) => (
            <li key={link.id} className="text-white">
              <a href={link.link}>{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
