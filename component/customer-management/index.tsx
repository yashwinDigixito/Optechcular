"use client";

import {
  useState,
} from "react";

import {
  Customer,
} from "@/assets/types";

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

import CustomerFilters from "./CustomerFilters";

import CustomerTable from "./CustomerTable";

export default function CustomerManagementPage() {

  const router =
    useRouter();

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("");

  const [
    customerType,
    setCustomerType,
  ] = useState("");

  const [
    customerData,
    setCustomerData,
  ] = useState<Customer[]>(
    customers
  );

  /* COUNTS */
  const customersCount = {

    all:
      customerData.length,

    active:
      customerData.filter(
        (customer) =>
          customer.status ===
          "Active"
      ).length,

    inactive:
      customerData.filter(
        (customer) =>
          customer.status ===
          "Inactive"
      ).length,
  };

  /* FILTERED CUSTOMERS */
  const filteredCustomers =
    customerData.filter(
      (customer) => {

        const matchesSearch =
          search
            ? customer.customerName
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                ) ||

              customer.phone.includes(
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

        background:
          "#F8FAFC",
      }}
    >
      {/* HEADER */}
      <Box
        sx={{
          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          mb: 3,

          flexWrap:
            "wrap",

          gap: 2,
        }}
      >
        <Typography
          sx={{
            fontSize:
              "32px",

            fontWeight:
              700,

            color:
              "#0F172A",
          }}
        >
          Customer Management
        </Typography>

        <Button
          variant="contained"
          startIcon={
            <AddIcon />
          }
          onClick={() =>
            router.push(
              "/customers/add"
            )
          }
          sx={{
            borderRadius:
              "14px",

            px: 3,

            height:
              "50px",

            textTransform:
              "none",

            fontWeight:
              700,

            boxShadow:
              "none",
          }}
        >
          Add Customer
        </Button>

      </Box>

      {/* MAIN CARD */}
      <Box
        sx={{
          background:
            "#FFFFFF",

          border:
            "1px solid #E2E8F0",

          borderRadius:
            "24px",

          overflow:
            "hidden",
        }}
      >
        {/* FILTERS */}
        <CustomerFilters
          search={search}
          setSearch={setSearch}
          status={status}
          setStatus={setStatus}
          customerType={
            customerType
          }
          setCustomerType={
            setCustomerType
          }
          customersCount={
            customersCount
          }
        />

        {/* TABLE SECTION */}
        <Box
          sx={{
            p: 3,
          }}
        >
          {/* RESULTS */}
          {(
            search ||
            status ||
            customerType
          ) && (

            <Typography
              sx={{
                color:
                  "#475569",

                fontWeight:
                  500,

                mb: 2,
              }}
            >
              {
                filteredCustomers.length
              }{" "}
              results found
            </Typography>
          )}

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

      </Box>

    </Box>
  );
}