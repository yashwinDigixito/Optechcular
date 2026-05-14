import * as yup from "yup";

export const contactLensValidation = yup.object({
  productName: yup.string().required("Required"),
  productCode: yup.string().required("Required"),
  brand: yup.string().required("Required"),
  powerType: yup.string().required("Required"),

  tax: yup
    .number()
    .transform((v, o) => (o === "" ? undefined : v))
    .required("Required"),

  mrp: yup
    .number()
    .transform((v, o) => (o === "" ? undefined : v))
    .required("Required"),
});