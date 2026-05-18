import EditBrandGroupPage from "@/component/product-management/brand-groups/EditBrandGroupForm";

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