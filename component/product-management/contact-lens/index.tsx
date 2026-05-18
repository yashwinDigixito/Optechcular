"use client";

import {
  useState,
} from "react";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

import {
  contactLenses,
} from "@/assets/genericdata";

import {
  ContactLens,
} from "@/assets/types";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import ContactLensFilters from "./ContactLensFilters";

import ContactLensTable from "./ContactLensTable";

export default function ContactLensManagementPage() {

  const router =
    useRouter();

  const [
    search,
    setSearch,
  ] = useState("");

  const [
    brand,
    setBrand,
  ] = useState("");

  const [
    date,
    setDate,
  ] = useState("");

  const [
    status,
    setStatus,
  ] = useState("");

  const [
    contactLensData,
    setContactLensData,
  ] = useState<
    ContactLens[]
  >(
    contactLenses
  );

  /* COUNTS */
  const contactLensCount = {

    all:
      contactLensData.length,

    active:
      contactLensData.filter(
        (lens) =>
          lens.status ===
          "Active"
      ).length,

    inactive:
      contactLensData.filter(
        (lens) =>
          lens.status ===
          "Inactive"
      ).length,

    outOfStock:
      contactLensData.filter(
        (lens) =>
          lens.status ===
          "Out of Stock"
      ).length,
  };

  /* FILTERED DATA */
  const filteredLenses =
    contactLensData.filter(
      (lens) => {

        const matchesSearch =
          !search ||

          lens.lensName
            .toLowerCase()
            .includes(
              search.toLowerCase()
            );

        const matchesBrand =
          !brand ||

          lens.brand ===
            brand;

        const matchesDate =
          !date ||

          lens.createdOn ===
            date;

        const matchesStatus =
          status

            ? lens.status ===
              status

            : true;

        return (

          matchesSearch &&
          matchesBrand &&
          matchesDate &&
          matchesStatus
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

      <Box
        sx={{
          maxWidth:
            "100%",

          mx:
            "auto",
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

            px: 1,

            flexWrap:
              "wrap",

            gap: 2,
          }}
        >

          <Typography
            sx={{
              fontFamily:
                FONT_FAMILY.HEADING,

              fontSize:
                FONT_SIZE.PAGE_HEADING,

              fontWeight:
                FONT_WEIGHT.BOLD,

              color:
                "#0F172A",

              lineHeight:
                1.2,
            }}
          >
            Contact Lens Management
          </Typography>

          <Button
            variant="contained"

            startIcon={
              <AddIcon />
            }

            onClick={() =>
              router.push(
                "/products/contact-lens/add"
              )
            }

            sx={{
              height:
                "50px",

              borderRadius:
                "14px",

              textTransform:
                "none",

              px: 3,

              fontFamily:
                FONT_FAMILY.BUTTON,

              fontWeight:
                FONT_WEIGHT.BOLD,

              boxShadow:
                "none",
            }}
          >
            Add Contact Lens
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
          <ContactLensFilters
            search={search}
            setSearch={setSearch}

            brand={brand}
            setBrand={setBrand}

            date={date}
            setDate={setDate}

            status={status}
            setStatus={setStatus}

            contactLensCount={
              contactLensCount
            }
          />

          {/* TABLE */}
          <Box
            sx={{
              p: 3,
            }}
          >

            {(

              search ||
              brand ||
              date ||
              status

            ) && (

              <Typography
                sx={{
                  mb: 2,

                  color:
                    "#475569",

                  fontWeight:
                    500,

                  fontFamily:
                    FONT_FAMILY.BODY,
                }}
              >
                {
                  filteredLenses.length
                }{" "}
                results found
              </Typography>

            )}

            <ContactLensTable
              contactLenses={
                filteredLenses
              }

              setContactLensData={
                setContactLensData
              }
            />

          </Box>

        </Box>

      </Box>

    </Box>
  );
}