import { StrapiObject } from ".";

export type LinkTarget = "_blank" | "_self";

export type LinkType = "page" | "social" | "affiliate" | "external" | "other";

export type Link = {
  icon: string | null;
  link: string;
  text: string;
  target: LinkTarget;
  type: LinkType;
} & StrapiObject;
