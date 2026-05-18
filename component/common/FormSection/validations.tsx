import * as yup from "yup";



export const frameValidation = yup.object({
  // Basic Info
  brand: yup.string().required("Brand is required"),
  modelNo: yup.string().required("Model number is required"),
  manufacturer: yup.string().required("Manufacturer/Supplier is required"),
  gender: yup.string().required("Target demographic is required"),

  // Rim
  rimType: yup.string().required("Rim type is required"),
  rimShape: yup.string().required("Rim shape is required"),
  lensWidth: yup
    .number()
    .typeError("Lens width must be a number")
    .positive("Must be greater than 0")
    .required("Lens width is required"),
  lensHeight: yup
    .number()
    .typeError("Lens height must be a number")
    .positive("Must be greater than 0")
    .required("Lens height is required"),
  bridgeWidth: yup
    .number()
    .typeError("Bridge width must be a number")
    .positive("Must be greater than 0")
    .required("Bridge width is required"),

  // Product Specs
  templeMaterial: yup.string().required("Temple material is required"),
  category: yup.string().required("Category is required"),
  material: yup.string().required("Frame material is required"),
  weight: yup
    .number()
    .typeError("Weight must be a number")
    .positive("Must be greater than 0")
    .required("Frame weight is required"),
  shelfLocation: yup.string().required("Shelf/Aisle location is required"),

  // Tax & Financials
  hsn: yup.string().required("HSN code is required"),
  tax: yup
    .number()
    .typeError("Tax must be a number")
    .required("Tax is required"),
  costPrice: yup
    .number()
    .typeError("Cost price must be a number")
    .positive("Must be greater than 0")
    .required("Purchase cost is required"),
  minStockLevel: yup
    .number()
    .typeError("Minimum stock must be a number")
    .integer("Must be a whole number")
    .positive("Must be greater than 0")
    .required("Safety threshold is required"),

  // Variations (basic validation)
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


