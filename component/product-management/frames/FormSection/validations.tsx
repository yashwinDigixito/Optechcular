import * as yup from "yup";



export const frameValidation = yup.object({
  // Basic Info
  brand: yup.string().required("Brand is required"),
  modelNo: yup.string().required("Model number is required"),

  // Rim
  rimType: yup.string().required("Rim type is required"),
  rimShape: yup.string().required("Rim shape is required"),

  // Product Specs
  templeMaterial: yup.string().required("Material is required"),
  category: yup.string().required("Category is required"),

  // Tax
  hsn: yup.string().required("HSN code is required"),
  tax: yup
    .number()
    .typeError("Tax must be a number")
    .required("Tax is required"),

  // Variations (fully updated with missing fields from your view layout)
  variations: yup.array().of(
    yup.object({
      colorCode: yup.string().required("Required"),
      size: yup.string().required("Required"),
      dbl: yup.string().required("Required"),
      sku: yup.string().required("Required"),
      price: yup
        .number()
        .typeError("Must be number")
        .required("Required"),
      templeLength: yup.string().required("Required"),
      launchSeason: yup.string().required("Required"),
      lensColor: yup.string().required("Required"),
      frameFrontColor: yup.string().required("Required"),
      templeColor: yup.string().required("Required"),
      barcode: yup.string().required("Required"),
      images: yup.array(), // Tracks array structure for variation image collections
    })
  ),

  // Images
  images: yup
    .array()
    .min(1, "At least one image is required"),
});


