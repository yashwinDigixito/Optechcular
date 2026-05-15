"use client";

import {
  Brand,
} from "@/assets/types";

import CommonTable from "@/component/common/table/CommonTable";

import StatusSelect from "@/component/common/table/StatusSelect";

import TableActions from "@/component/common/table/TableActions";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";

import {
  Box,
  Typography,
} from "@mui/material";

import { useRouter } from "next/navigation";

interface BrandTableProps {

  brands:
    Brand[];

  setBrandData:
    React.Dispatch<
      React.SetStateAction<
        Brand[]
      >
    >;
}

export default function BrandTable({
  brands,
  setBrandData,
}: BrandTableProps) {

  const router =
    useRouter();

  /* TABLE COLUMNS */
  const columns = [

    {
      key: "brand",
      label: "Brand",
    },

    {
      key: "category",
      label: "Category",
    },

    {
      key: "brandGroup",
      label: "Brand Group",
    },

    {
      key: "phone",
      label: "Phone",
    },

    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },

    {
      key: "created",
      label: "Created",
      align: "center" as const,
    },

    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];

  /* STATUS CHANGE */
  const handleStatusChange = (
    id: string,
    value: string
  ) => {

    setBrandData((prev) =>
      prev.map((brand) =>

        brand.id === id

          ? {
              ...brand,
              status: value as
                | "Active"
                | "Inactive",
            }

          : brand
      )
    );
  };

  return (
    <CommonTable
      columns={columns}
      rows={brands}

      renderCell={(
        brand,
        key
      ) => {

        switch (key) {

          /* BRAND */
          case "brand":

            return (

              <Box>

                <Typography
                  sx={{
                    fontWeight:
                      FONT_WEIGHT.BOLD,

                    color:
                      "#2563EB",

                    fontSize:
                      "15px",

                    fontFamily:
                      FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {
                    brand.brandName
                  }
                </Typography>

                <Typography
                  sx={{
                    fontSize:
                      FONT_SIZE.SMALL,

                    color:
                      "#64748B",

                    fontFamily:
                      FONT_FAMILY.TABLE_BODY,
                  }}
                >
                  {
                    brand.brandId
                  }
                </Typography>

              </Box>

            );

          /* CATEGORY */
          case "category":

            return (

              <Typography
                sx={{
                  color:
                    "#475569",

                  fontWeight:
                    FONT_WEIGHT.SEMI_BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  brand.category ||
                  "-"
                }
              </Typography>

            );

          /* BRAND GROUP */
          case "brandGroup":

            return (

              <Typography
                sx={{
                  color:
                    "#0F172A",

                  fontWeight:
                    FONT_WEIGHT.SEMI_BOLD,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  brand.brandGroup ||
                  "-"
                }
              </Typography>

            );

          /* PHONE */
          case "phone":

            return (

              <Typography
                sx={{
                  color:
                    "#475569",

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  brand.phone
                }
              </Typography>

            );

          /* STATUS */
          case "status":

            return (

              <StatusSelect
                value={
                  brand.status
                }

                options={[
                  "Active",
                  "Inactive",
                ]}

                onChange={(value) =>
                  handleStatusChange(
                    brand.id,
                    value
                  )
                }
              />

            );

          /* CREATED */
          case "created":

            return (

              <Typography
                sx={{
                  color:
                    "#64748B",

                  fontWeight:
                    FONT_WEIGHT.MEDIUM,

                  fontSize:
                    FONT_SIZE.TABLE_BODY,

                  fontFamily:
                    FONT_FAMILY.TABLE_BODY,
                }}
              >
                {
                  brand.createdDate
                }
              </Typography>

            );

          /* ACTIONS */
          case "actions":

            return (

              <TableActions
                onView={() =>
                  router.push(
                    `/products/brands/view/${brand.id}`
                  )
                }

                onEdit={() =>
                  router.push(
                    `/products/brands/edit/${brand.id}`
                  )
                }
              />
            );
          default:
            return null;
        }
      }}
    />
  );
}