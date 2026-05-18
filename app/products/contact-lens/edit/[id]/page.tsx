import EditContactLensPage from "@/component/product-management/contact-lens/EditContactLensForm";

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