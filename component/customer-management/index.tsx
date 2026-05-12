"use client";

import {
    useState,
} from "react";

import {
    customers,
} from "@/assets/genericdata";

import AddIcon from "@mui/icons-material/Add";

import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import TableContainerCard from "@/component/common/TableContainerCard";

import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";

export default function CustomerManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [customerType,
    setCustomerType] =
      useState("");

  const [customerData,
    setCustomerData] =
      useState(customers);

  const filteredCustomers =
    customerData.filter(
      (customer) => {

        const matchesSearch =
          search
            ? customer.fullName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              customer.phoneNumber.includes(
                search
              )
            : true;

        const matchesStatus =
          status
            ? customer.status ===
              status
            : true;

        const matchesType =
          customerType
            ? customer.customerType ===
              customerType
            : true;

        return (
          matchesSearch &&
          matchesStatus &&
          matchesType
        );
      }
    );

  return (
    <Box
      sx={{
        p: 3,

        minHeight:
          "100vh",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight: 700,

            color:
              "#0F172A",
          }}
        >
          Customer Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() =>
            router.push(
              "/customers/add"
            )
          }
          sx={{
            borderRadius:
              "12px",

            px: 3,

            height:
              "48px",

            textTransform:
              "none",

            fontWeight: 600,
          }}
        >
          Add Customer
        </Button>

      </Box>

      {/* FILTERS */}
      <CustomerFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
        customerType={customerType}
        setCustomerType={setCustomerType}
      />

      {/* TABLE CARD */}
      <TableContainerCard>

        <Box sx={{ p: 3 }}>

          {/* RESULTS */}
          <Typography
            sx={{
              color:
                "#475569",

              fontWeight: 500,

              mb: 2,
            }}
          >
            {
              filteredCustomers.length
            }{" "}
            results found
          </Typography>

          {/* TABLE */}
          <CustomerTable
            customers={
              filteredCustomers
            }
            setCustomerData={
              setCustomerData
            }
          />

        </Box>

      </TableContainerCard>

    </Box>
  );
}