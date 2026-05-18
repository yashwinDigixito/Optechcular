"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import {
  customers,
} from "@/assets/genericdata";
import {
  Customer,
} from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import {
  useState,
} from "react";
import CustomerFilters from "./CustomerFilters";
import CustomerTable from "./CustomerTable";

export default function CustomerManagementPage() {

  const router = useRouter();
  const [search, setSearch] =useState("");
  const [status, setStatus] =useState("");
  const [customerType,setCustomerType,] = useState("");
  const [customerData,setCustomerData,] = useState<Customer[]>(customers);

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
  const filteredCustomers =
    customerData.filter(
      (customer) => {
        const matchesSearch = search ? customer.customerName.toLowerCase().includes( search.toLowerCase() ) || customer.phone.includes( search ) : true;
        const matchesStatus = status ? customer.status === status : true;
        const matchesType = customerType ? customer.customerType === customerType : true;
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
        minHeight: "100vh",
        background: "#F8FAFC",
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
            px: 1,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: FONT_FAMILY.HEADING,
              fontSize: FONT_SIZE.PAGE_HEADING,
              fontWeight: FONT_WEIGHT.BOLD,
              color: "#0F172B",
              lineHeight: 1.2,
            }}
          >
            Customer Management
          </Typography>
          <Button
            variant="contained"
            startIcon={ <AddIcon /> }
            onClick={() =>
              router.push( "/customers/add" )
            }
            sx={{
              borderRadius:"14px",
              px: 3,
              height:"50px",
              textTransform:"none",
              fontFamily:FONT_FAMILY.BUTTON,
              fontWeight:FONT_WEIGHT.BOLD,
              boxShadow:"none",
            }}
          >
            Add Customer
          </Button>
        </Box>
        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius:"24px",
            overflow: "hidden",
          }}
        >
          <CustomerFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            customerType={customerType}
            setCustomerType={setCustomerType}
            customersCount={customersCount}
          />
          <Box
            sx={{
              p: 3,
            }}
          >
            {(
              search ||
              status ||
              customerType
            ) && (
              <Typography
                sx={{
                  color: "#475569",
                  fontWeight: 500,
                  mb: 2,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                { filteredCustomers.length }{" "}
                results found
              </Typography>
            )}
            <CustomerTable
              customers={filteredCustomers}
              setCustomerData={setCustomerData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}