"use client";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";
import { FONT_FAMILY } from "@/assets/constants";

type Props = {
  formik: FormikProps<FrameFormValues>;
  index: number;
};

export default function VariationImageUpload({ formik, index }: Props) {
  const images = formik.values.variations[index].images;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);
    formik.setFieldValue(`variations.${index}.images`, [...images, ...files]);
  };

  const removeImage = (imgIndex: number) => {
    const updated = [...images];
    updated.splice(imgIndex, 1);
    formik.setFieldValue(`variations.${index}.images`, updated);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography sx={{ fontWeight: 700, fontSize: "13px", color: "#64748B", mb: 1 }}>
        Add Frame Pictures
      </Typography>

      {/* Styled Premium Upload Container */}
      <Box
        component="label"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed #CBD5E1",
          borderRadius: "16px",
          p: 3,
          cursor: "pointer",
          bgcolor: "#FFFFFF",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            borderColor: "#3B82F6",
            bgcolor: "#F8FAFC",
          },
        }}
      >
        <input
          type="file"
          multiple
          onChange={handleUpload}
          style={{ display: "none" }}
          accept="image/*"
        />
        <CloudUploadIcon sx={{ fontSize: 40, color: "#64748B", mb: 1 }} />
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.BODY,
            fontSize: "13px",
            fontWeight: 700,
            color: "#334155",
          }}
        >
          Click to upload frame pictures
        </Typography>
        <Typography
          sx={{
            fontFamily: FONT_FAMILY.BODY,
            fontSize: "11px",
            color: "#64748B",
            mt: 0.5,
          }}
        >
          PNG, JPG or WEBP formats accepted (Max size 5MB)
        </Typography>
      </Box>

      {/* Preview Grid */}
      {images.length > 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2.5,
            flexWrap: "wrap",
          }}
        >
          {images.map((file, i) => {
            const previewUrl = URL.createObjectURL(file);

            return (
              <Box 
                key={i} 
                sx={{ 
                  position: "relative",
                  "&:hover .delete-btn": {
                    opacity: 1,
                  }
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    position: "relative",
                    borderRadius: "12px",
                    border: "1px solid #E2E8F0",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={previewUrl}
                    alt="preview"
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </Box>

                <IconButton
                  size="small"
                  className="delete-btn"
                  onClick={() => removeImage(i)}
                  sx={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    bgcolor: "#EF4444",
                    color: "#FFFFFF",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
                    transition: "all 0.1s ease",
                    "&:hover": {
                      bgcolor: "#DC2626",
                    },
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 14 }} />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}