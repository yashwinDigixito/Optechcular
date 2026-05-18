"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { categories } from "@/assets/genericdata";
import { Category } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CategoryFilters from "./CategoryFilters";
import CategoryTable from "./CategoryTable";

export default function CategoryManagementPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [categoryData, setCategoryData] = useState<Category[]>(categories);

  const categoryCount = {
    all: categoryData.length,
    active: categoryData.filter( (category) => category.status === "Active").length,
    inactive: categoryData.filter( (category) => category.status === "Inactive").length,
  };

  const filteredCategories = categoryData.filter((category) => {
    const matchesSearch = !search || category.categoryName.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = status ? category.status === status : true;

    return (
      matchesSearch &&
      matchesStatus
    );
  });

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
              color: "#0F172A",
              lineHeight: 1.2,
            }}
          >
            Category Management
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              router.push("/products/categories/add")
            }
            sx={{
              height: "50px",
              borderRadius: "14px",
              textTransform: "none",
              px: 3,
              fontFamily: FONT_FAMILY.BUTTON,
              fontWeight: FONT_WEIGHT.BOLD,
              boxShadow: "none",
            }}
          >
            Add Category
          </Button>
        </Box>

        <Box
          sx={{
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          <CategoryFilters
            search={search}
            setSearch={setSearch}
            status={status}
            setStatus={setStatus}
            categoryCount={categoryCount}
          />

          <Box sx={{ p: 3 }}>
            {(search || status) && (
              <Typography
                sx={{
                  mb: 2,
                  color: "#475569",
                  fontWeight: 500,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredCategories.length} results found
              </Typography>
            )}
            <CategoryTable
              categories={filteredCategories}
              setCategoryData={setCategoryData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}