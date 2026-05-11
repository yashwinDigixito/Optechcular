import EditContactLensPage from "@/component/product-management/contact-lens/EditContactLensPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditContactLensPage
      params={params}
    />
  );
}