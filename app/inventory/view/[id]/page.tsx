import InventoryDetailsPage from "@/component/inventory-management/InventoryDetails";



export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <InventoryDetailsPage
      params={params}
    />
  );
}