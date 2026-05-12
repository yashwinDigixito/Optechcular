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

  // Rim
  rimType: string;
  rimShape: string;

  // Product Specs
  templeMaterial: string;
  category: string;

  // Tax
  hsn: string;
  tax: number | "";

  // later
  variations: FrameVariation[];
  images: File[];
};