import CategoryViewPage from "@/component/product-management/categories/CategoryViewPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <CategoryViewPage
      params={params}
    />
  );
}