"use client";

import { FONT_FAMILY } from "@/assets/constants";
import { FrameFormValues } from "@/assets/types";
import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, IconButton, Typography } from "@mui/material";
import { FormikProps, getIn } from "formik";
import Image from "next/image";
import * as React from "react";

type Props = {
  formik: FormikProps<FrameFormValues>;
  index: number;
};

export default function VariationImageUpload({ formik, index }: Props) {
  const images = formik.values.variations[index]?.images || [];

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
    <Box sx={{ mt: 2 }}>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "13px",
          color: "#64748B",
          mb: 1,
        }}
      >
        Add Frame Pictures
      </Typography>
      
      <Box
        component="label"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: isInvalid ? "2px dashed #DC2626" : "2px dashed #CBD5E1",
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
          accept="image/*"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
        <CloudUploadIcon
          sx={{
            fontSize: 40,
            color: isInvalid ? "#DC2626" : "#64748B",
            mb: 1,
          }}
        />
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

      {isInvalid && (
        <Typography
          sx={{
            color: "#DC2626",
            fontSize: "12px",
            mt: 1,
            fontFamily: FONT_FAMILY.BODY,
          }}
        >
          {errorMessage}
        </Typography>
      )}

      {images.length > 0 && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 2.5,
            flexWrap: "wrap",
          }}
        >
          {images.map((file: any, i: number) => {
            // Determine if this is an uploaded local binary File or static mock data
            const isMockAsset = file && !(file instanceof File);
            const previewUrl = isMockAsset 
              ? (typeof file === "string" ? file : file.url) 
              : URL.createObjectURL(file);

            return (
              <PreviewThumbnail
                key={i}
                previewUrl={previewUrl}
                isMockAsset={isMockAsset}
                onRemove={() => removeImage(i)}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
}


function PreviewThumbnail({ 
  previewUrl, 
  isMockAsset, 
  onRemove 
}: { 
  previewUrl: string; 
  isMockAsset: boolean; 
  onRemove: () => void; 
}) {
  React.useEffect(() => {
    // Cleanup the object URL when the component unmounts to prevent browser memory bloat
    return () => {
      if (!isMockAsset && previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl, isMockAsset]);

  return (
    <Box
      sx={{
        position: "relative",
        "&:hover .delete-btn": {
          opacity: 1,
        },
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
        onClick={onRemove}
        sx={{
          position: "absolute",
          top: -6,
          right: -6,
          bgcolor: "#EF4444",
          color: "#FFFFFF",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
          transition: "all 0.1s ease",
          opacity: 0,
          "&:hover": {
            bgcolor: "#DC2626",
          },
        }}
      >
        <CloseIcon sx={{ fontSize: 14, fontWeight: 700 }} />
      </IconButton>
    </Box>
  );
}