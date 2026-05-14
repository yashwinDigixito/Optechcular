export type ContactLensVariant = {
  sku: string;
  barcode: string;
  sphericalPower: string;
  cylindricalPower: string;
  axis: string;
  additional: string;
  color: string;
};

export type ContactLensFormValues = {
  // Basic Info
  powerType: string;
  brand: string;

  // Usage
  modality: string;

  // Product Info
  productCode: string;
  productName: string;
  baseCurve: string;
  diameter: string;

  // Classification
  material: string;
  productType: string;

  // Pricing
  hsn: string;
  tax: number | "";
  mrp: number | "";

  // Variants
  variants: ContactLensVariant[];
};