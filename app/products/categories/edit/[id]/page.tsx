import EditCategoryPage from "@/component/product-management/categories/EditCategoryForm";

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