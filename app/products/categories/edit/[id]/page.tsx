import EditCategoryPage from "@/component/product-management/categories/EditCategoryPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditCategoryPage
      params={params}
    />
  );
}