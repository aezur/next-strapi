import { PageFooter } from "@/components/layout/PageFooter";
import { PageHeader } from "@/components/layout/PageHeader";
import { fetchAPI } from "../../utils/fetch-api";
import { ApiResponse } from "@/types/Strapi";
import { Global } from "@/types/Global";

async function getGlobal(): Promise<ApiResponse<Global>> {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

  if (!token)
    throw new Error("The Strapi API Token environment variable is not set.");

  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };

  const urlParamsObject = {
    populate: ["logo", "navigation", "footer_links"],
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
}

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = await getGlobal();
  return (
    <div className="flex flex-col min-h-screen text-white">
      <PageHeader
        className="sticky"
        logo={data.logo}
        navigation={data.navigation}
      />
      <div className="flex-grow">
        <main>{children}</main>
      </div>
      <PageFooter text={data.footer_text} links={data.footer_links} />
    </div>
  );
}
