import { Global } from "@/types/Global";
import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import Image from "next/image";
import { getStrapiMedia } from "@/app/utils/api-helpers";
import Link from "next/link";

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
    <header
      className={cn("z-50 top-0 p-4 bg-primary text-secondary flex", className)}
    >
      <Image
        priority
        src={imageUrl}
        alt={logo.alternativeText}
        width={128}
        height={64}
      />
      <nav>
        <ul className="flex items-center justify-start gap-6 px-6 h-full">
          {navigation.map((link) => (
            <li key={link.id}>
              <Link href={link.link} target={link.target} className="text-lg">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
