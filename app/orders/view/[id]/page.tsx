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
        height: "calc(100vh - 70px)",
        overflow: "hidden",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      <OrderSummary
        order={order}
      />
    </Box>
  );
}