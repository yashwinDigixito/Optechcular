"use client";

import { Box, Grid, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
import { FormikProps } from "formik";
import { FrameFormValues } from "./types";

type Props = {
  formik: FormikProps<FrameFormValues>;
  index: number;
};

export default function VariationImageUpload({ formik, index }: Props) {
  
  const images = formik.values.variations[index].images;

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files);

    formik.setFieldValue(
      `variations.${index}.images`,
      [...images, ...files]
    );
  };

  const removeImage = (imgIndex: number) => {
    const updated = [...images];
    updated.splice(imgIndex, 1);

    formik.setFieldValue(
      `variations.${index}.images`,
      updated
    );
  };

  return (
    <Grid size={{ xs: 12 }}>
      <Typography sx={{ fontWeight: 500 }}>
        Add Frame Images
      </Typography>

      {/* Upload Button Styled like fields */}
      <Box
        sx={{
          border: "1px dashed #ccc",
          borderRadius: "8px",
          p: 2,
          mt: 1,
          cursor: "pointer",
        }}
      >
        <input
          type="file"
          multiple
          onChange={handleUpload}
          style={{ width: "100%" }}
        />
      </Box>

      {/* Preview */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mt: 2,
          flexWrap: "wrap",
        }}
      >
        {images.map((file, i) => {
          const previewUrl = URL.createObjectURL(file);

          return (
            <Box key={i} sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  position: "relative",
                  borderRadius: "8px",
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
                onClick={() => removeImage(i)}
                sx={{
                  position: "absolute",
                  top: -8,
                  right: -8,
                  bgcolor: "white",
                  boxShadow: 2,
                }}
              >
                <DeleteIcon fontSize="small" />
              </IconButton>
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}