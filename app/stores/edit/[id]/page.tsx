"use client";

import {
    Box,
} from "@mui/material";

import {
    useParams,
} from "next/navigation";

import {
    stores,
} from "@/assets/genericdata";

import EditStoreForm from "@/component/store-management/EditStoreForm";

export default function EditStorePage() {
  const params = useParams();

  const store = stores.find(
    (item) => item.id === params.id
  );

  if (!store) {
    return (
      <Box
        sx={{
          p: 3,
        }}
      >
        Store not found
      </Box>
    );
  }

  return (
    <EditStoreForm
      store={store}
    />
  );
}
