import { Image } from "./Strapi/image";
import { Link } from "./Strapi/link";

export type Global = {
  id: number;
  logo: Image;
  navigation: Array<Link>;
  footer_text: string;
  footer_links: Array<Link>;
  locale: string;
};
