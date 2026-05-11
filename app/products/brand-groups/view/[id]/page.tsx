import BrandGroupViewPage from "@/component/product-management/brand-groups/BrandGroupViewPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <BrandGroupViewPage
      params={params}
    />
  );
}