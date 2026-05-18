"use client";

import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { frames } from "@/assets/genericdata";
import { Frame } from "@/assets/types";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FrameFilters from "./FrameFilters";
import FrameTable from "./FrameTable";

export default function FrameManagementPage() {

  const router = useRouter();
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [frameData, setFrameData] = useState<Frame[]>(frames);

  const frameCount = {
    all: frameData.length,
    active: frameData.filter((frame) => frame.status === "Active").length,
    inactive: frameData.filter((frame) => frame.status === "Inactive").length,
    outOfStock: frameData.filter((frame) => frame.status === "Out of Stock").length,
  };

  const filteredFrames = frameData.filter((frame) => {
    const matchesSearch = !search || frame.frameName.toLowerCase().includes(search.toLowerCase());
    const matchesBrand = !brand || frame.brand === brand;
    const matchesDate = !date || frame.createdOn === date;
    const matchesStatus = status ? frame.status === status : true;

    return (
      matchesSearch &&
      matchesBrand &&
      matchesDate &&
      matchesStatus
    );
  });

  return (
    <Box
      sx={{
        p: 3,
        minHeight: "100vh",
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
            Frame Management
          </Typography>

          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() =>
              router.push("/products/frames/add")
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
            Add Frame
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
          <FrameFilters
            search={search}
            setSearch={setSearch}
            brand={brand}
            setBrand={setBrand}
            date={date}
            setDate={setDate}
            status={status}
            setStatus={setStatus}
            frameCount={frameCount}
          />

          <Box sx={{ p: 3 }}>
            {(search || brand || date || status) && (
              <Typography
                sx={{
                  mb: 2,
                  color: "#475569",
                  fontWeight: 500,
                  fontFamily: FONT_FAMILY.BODY,
                }}
              >
                {filteredFrames.length} results found
              </Typography>
            )}

            <FrameTable
              frames={filteredFrames}
              setFrameData={setFrameData}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}