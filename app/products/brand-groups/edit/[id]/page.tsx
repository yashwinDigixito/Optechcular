import EditBrandGroupPage from "@/component/product-management/brand-groups/EditBrandGroupPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditBrandGroupPage
      params={params}
    />
  );
}