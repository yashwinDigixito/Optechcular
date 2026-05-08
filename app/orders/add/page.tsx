import { Box } from "@mui/material";

import AddOrderForm from "@/component/order-management/AddOrderForm";

export default function AddOrderPage() {
  return (
    <Box
      sx={{
        p: 3,
        background: "#F8FAFC",
        minHeight: "100vh",
      }}
    >
      <AddOrderForm />
    </Box>
  );
}