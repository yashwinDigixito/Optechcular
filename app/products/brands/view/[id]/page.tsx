import BrandViewPage from "@/component/product-management/brands/BrandViewPage";

export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <BrandViewPage
      params={params}
    />
  );
}