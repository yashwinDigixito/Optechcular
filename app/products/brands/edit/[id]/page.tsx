import EditBrandPage from "@/component/product-management/brands/EditBrandForm";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditBrandPage
      params={params}
    />
  );
}