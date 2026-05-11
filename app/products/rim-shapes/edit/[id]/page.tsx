import EditRimShapePage from "@/component/product-management/rim-shapes/EditRimShapePage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditRimShapePage
      params={params}
    />
  );
}