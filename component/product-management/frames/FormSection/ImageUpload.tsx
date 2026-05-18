"use client";

import { Box,  Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Image from "next/image";
import { FormikProps, getIn } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
  index: number;
};

export default function VariationImageUpload({ formik, index }: Props) {
  const images = formik.values.variations[index].images || [];

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

  const hasTouched = getIn(formik.touched, `variations.${index}.images`);
  const errorMessage = getIn(formik.errors, `variations.${index}.images`);
  const isInvalid = Boolean(hasTouched && errorMessage);

  return (
    <Grid size={{ xs: 12 }}>
      <Typography sx={{ fontWeight: 600, color: "text.primary", mb: 1, fontSize: "0.9rem" }}>
        Variation Gallery Images
      </Typography>

      {/* Modernised File Upload Box Dropzone */}
      <Box
        component="label"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px dashed",
          borderColor: isInvalid ? "error.main" : "#ccc",
          borderRadius: "12px",
          p: 3,
          backgroundColor: isInvalid ? "#fff8f8" : "#ffffff",
          cursor: "pointer",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            borderColor: isInvalid ? "error.dark" : "primary.main",
            backgroundColor: isInvalid ? "#fff0f0" : "#f0f7ff",
          },
        }}
      >
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleUpload}
          onBlur={() => formik.setFieldTouched(`variations.${index}.images`, true)}
          style={{ display: "none" }}
        />
        <CloudUploadIcon sx={{ fontSize: 32, color: isInvalid ? "error.main" : "text.secondary", mb: 1 }} />
        <Typography variant="body2" sx={{ fontWeight: 500, color: isInvalid ? "error.main" : "text.primary" }}>
          Click to upload frame angles
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Supports PNG, JPG, or WebP formats
        </Typography>
      </Box>

      {/* Formik Error Text Output */}
      {isInvalid && (
        <Typography variant="caption" color="error" sx={{ display: "block", mt: 0.5, ml: 1 }}>
          {String(errorMessage)}
        </Typography>
      )}

      {/* Upload Media Previews */}
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
                  "&:hover .delete-btn": { opacity: 1, transform: "scale(1)" }
                }}
              >
                <Box
                  sx={{
                    width: 90,
                    height: 90,
                    position: "relative",
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid #e0e0e0",
                    boxShadow: "0px 2px 4px rgba(0,0,0,0.05)"
                  }}
                >
                  <Image
                    src={previewUrl}
                    alt={`variation-${index}-preview-${i}`}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </Box>

                <IconButton
                  className="delete-btn"
                  size="small"
                  color="error"
                  onClick={() => removeImage(i)}
                  sx={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    bgcolor: "background.paper",
                    boxShadow: 3,
                    p: 0.5,
                    border: "1px solid",
                    borderColor: "error.light",
                    opacity: 0.9,
                    transition: "all 0.2s",
                    "&:hover": {
                      bgcolor: "error.main",
                      color: "white"
                    }
                  }}
                >
                  <DeleteIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>
            );
          })}
        </Box>
      )}
    </Grid>
  );
}
