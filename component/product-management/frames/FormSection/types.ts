export type BranchPrice = {
  location: string;
  price: number | "";
};

export type FrameVariation = {
  colorCode: string;
  size: string;
  dbl: string;
  sku: string;
  price: number | "";
  templeLength: string;
  launchSeason: string;
  lensColor: string;
  frameFrontColor: string;
  templeColor: string;
  barcode: string;
  branchPricing: BranchPrice[];
  images: File[];
};

export type FrameFormValues = {
  // Basic Info
  brand: string;
  modelNo: string;
  manufacturer: string;
  gender: string;

  // Rim
  rimType: string;
  rimShape: string;
  lensWidth: number | "";
  lensHeight: number | "";
  bridgeWidth: number | "";

  // Product Specs
  templeMaterial: string;
  category: string;
  material: string;
  weight: number | "";
  shelfLocation: string;

  // Tax & Financial
  hsn: string;
  tax: number | "";
  costPrice: number | "";
  minStockLevel: number | "";

  // variations & media
  variations: FrameVariation[];
  images: File[];
};