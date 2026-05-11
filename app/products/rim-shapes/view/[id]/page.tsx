import RimShapeViewPage from "@/component/product-management/rim-shapes/RimShapeViewPage";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <RimShapeViewPage
      params={params}
    />
  );
}