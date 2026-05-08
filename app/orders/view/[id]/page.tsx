import {
  Box,
} from "@mui/material";

import {
  orders,
} from "@/assets/genericdata";

import OrderSummary from "@/component/order-management/OrderSummary";

export default async function OrderViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } = await params;

  const order =
    orders.find(
      (item) =>
        item.id === id
    ) || null;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        pt: 3,
        px: 2,
      }}
    >
      <OrderSummary
        order={order}
      />
    </Box>
  );
}