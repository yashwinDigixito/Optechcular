"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    customers,
} from "@/assets/genericdata";

import EditCustomerForm from "@/component/customer-management/EditCustomerForm";

export default function EditCustomerPage() {

  const params =
    useParams();

  const customer =
    customers.find(
      (item) =>
        item.id ===
        params.id
    );

  if (!customer) {

    return (
      <Box
        sx={{
          p: 3,
        }}
      >
        Customer not found
      </Box>
    );
  }

  return (
    <EditCustomerForm
      customer={customer}
    />
  );
}