
import PurchaseOrderViewPage from "@/component/purchase-order-management/PurchaseOrderDetails";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <PurchaseOrderViewPage
      params={params}
    />
  );
}