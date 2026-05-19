import EditMaterialPage from "@/component/product-management/materials/EditMaterialForm";


export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditMaterialPage
      params={params}
    />
  );
}