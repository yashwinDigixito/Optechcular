import MaterialViewPage from "@/component/product-management/materials/MaterialViewPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <MaterialViewPage
      params={params}
    />
  );
}