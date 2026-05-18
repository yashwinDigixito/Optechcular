export interface Customer {
  id: string;

  customerId: string;
  customerName: string;
  customerType: string;

  status: string;

  profileImage?: string;

  email: string;
  phone: string;
  alternatePhone?: string;
  website?: string;

  address: string;
  city: string;
  state: string;
  country: string;
  postalCode?: string;

  salesPerson?: string;
  customerGroup?: string;

  totalOrders?: number;
  totalRevenue?: number;
  lastOrderDate?: string;

  paymentMethod?: string;
  outstandingAmount?: number;
  creditLimit?: number;
  gstNumber?: string;

  lastLogin?: string;
  lastPurchase?: string;

  notes?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}

export interface User {
  id: string;

  userId: string;

  fullName: string;
  username?: string;

  email: string;
  phone: string;

  role: string;
  department?: string;

  status: string;

  password?: string;

  profileImage?: string;

  permissions?: string[];
  accessLevel?: string;

  address?: string;
  city?: string;
  state?: string;
  country?: string;

  totalOrdersManaged?: number;
  assignedCustomers?: number;

  lastLogin?: string;
  lastActivity?: string;
  loginStatus?: string;

  twoFactorEnabled?: boolean;

  notes?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}
export interface Product {
  id: string;
  productName: string;
  brand: string;
  sku: string;
  barcode: string;
  price: number;
  stock?: number;
}


export interface Brand {
  id: string;
  brandId: string;

  brandName: string;
  brandLogo?: string;
  brandType?: string;
  brandGroup:string;
  category:string;
  status: string;

  contactPerson: string;
  email: string;
  phone: string;
  website?: string;

  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;

  gstNumber?: string;
  panNumber?: string;

  totalProducts?: number;
  activeProducts?: number;
  totalOrders?: number;
  revenue?: number;

  description?: string;
  notes?: string;

  createdDate: string;
  updatedDate?: string;
  createdBy?: string;
}

export interface BrandGroup {
  id: string;

  groupId: string;
  groupName: string;
  groupType: string;

  status: string;

  description: string;

  parentCategory?: string;
  priorityLevel?: string;
  displayOrder?: number;

  totalBrands?: number;
  activeBrands?: number;
  totalProducts?: number;
  revenueContribution?: number;

  managerName?: string;
  managerEmail?: string;
  managerPhone?: string;

  notes?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}

export interface Category {
  id: string;

  categoryId: string;
  categoryName: string;
  categoryCode: string;

  categoryType: string;
  parentCategory?: string;

  status: string;

  displayOrder?: number;
  priorityLevel?: string;

  totalProducts?: number;
  activeProducts?: number;
  totalBrands?: number;
  revenueContribution?: number;

  stockQuantity?: number;
  lowStockProducts?: number;
  warehouseLocation?: string;

  description: string;
  notes?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}

export interface OrderItem {
  id: string;
  productName: string;
  qty: number;
  price: number;
  tax: number;
  total: number;
}

export interface Order {
  id: string;
  orderNo: string;
  customerName: string;
  email: string;
  phone?: string;

  salesPerson?: string;
  orderSource?: string;

  productType: string;
  productName?: string;
  productSku?: string;
  productVariant?: string;
  quantity?: number;
  productPrice?: number;

  status?: string;
  paymentStatus?: string;
  deliveryStatus?: string;

  orderDate: string;

  subtotal?: number;
  discount?: number;
  tax?: number;
  shippingCharge?: number;
  totalAmount: number;

  paymentMethod?: string;
  transactionId?: string;
  paidAmount?: number;
  paymentDue?: number;

  shippingPartner?: string;
  trackingNo?: string;
  estimatedDeliveryDate?: string;

  shippingAddress?: string;
  billingAddress?: string;
  notes?: string;
}

export interface RoleType {
  id: string;
  roleName: string;
  description: string;
  permissions: string[];
  totalUsers: number;
  status: string;
  createdOn: string;
}

export interface DashboardStat {
  title: string;
  value: string | number;
  growth:string
}

export interface ContactLens {
  id: string;

  lensId: string;
  productCode: string;
  lensName: string;
  brand: string;

  productType: string;
  powerType: string;
  modality: string;

  material: string;

  baseCurve: string;
  diameter: string;
  sphericalPower?: string;
  cylindricalPower?: string;
  axis?: string;
  additionalPower?: string;

  color?: string;

  hsnCode: string;
  tax: number;

  mrp: number;
  sellingPrice: number;
  discountPrice?: number;

  skuCode: string;
  barcode: string;

  stock: number;
  warehouseLocation?: string;

  status: string;

  description?: string;
  notes?: string;

  thumbnailImage?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}

export interface ReportChartData {
  day: string;
  value: number;
}

export interface ReportChartProps {
  title: string;
  data: ReportChartData[];
  color?: string;
  label:string;
}
export interface Invoice {
  id: string;
  invoiceId: string;
  invoiceNo: string;

  orderNo: string;

  customerName: string;
  email: string;
  phone: string;

  billingAddress: string;
  shippingAddress?: string;

  invoiceDate: string;
  dueDate: string;

  invoiceStatus: "Draft" | "Sent" | "Cancelled";
  paymentStatus: "Paid" | "Pending" | "Partial" | "Overdue";

  productName: string;
  productType: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  discount: number;
  lineTotal: number;
  category:string;
  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingCharge: number;
  grandTotal: number;

  paidAmount: number;
  balanceDue: number;

  paymentMethod?: string;
  transactionId?: string;

  notes?: string;

  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}export interface PurchaseOrder {

  id: string;

  purchaseId: string;

  purchaseNo: string;

  supplierInvoiceNo: string;

  vendorName: string;

  supplierName: string;

  email: string;

  phone: string;

  mobile?: string;

  gstNumber?: string;

  billingAddress?: string;

  shippingAddress?: string;

  productName: string;

  brand?: string;

  category?: string;

  quantity: number;

  unitPrice?: number;

  tax?: number;

  discount?: number;

  grandTotal?: number;

  paymentStatus: string;

  status: string;

  orderDate?: string;

  expectedDelivery?: string;

  createdOn?: string;

  createdBy?: string;

  notes?: string;
}
export interface Expense {
  id: string;           
  expenseName: string;
  ledger: string;
  amount: number;
  currency: string;     
  expenseDate: string;
  paymentMethod: string;
  status: string;       
  description: string;  
  
  // Audit Fields
  createdOn: string;    
  createdBy: string;
  
  notes?: string;       
}

export interface Ledger {

  id: string;

  ledgerName: string;

  ledgerGroup: string;

  openingBalance: number;

  balanceType: string;

  currentBalance: number;

  createdOn: string;

  createdBy: string;

  status: string;

  notes: string;
}export interface Frame {
  id: string;
  frameId: string;
  frameName: string;
  skuCode: string;
  barcode?: string;
  categoryId: string;
  category?: string;
  brand: string;
  modelNumber?: string;
  rimType:
    | "Full Rim"
    | "Half Rim"
    | "Rimless";
  rimShape:
    | "Round"
    | "Square"
    | "Rectangle"
    | "Aviator"
    | "Cat Eye"
    | "Oval"
    | "Wayfarer";
  gender:
    | "Men"
    | "Women"
    | "Unisex"
    | "Kids";
  ageGroup?:
    | "Adult"
    | "Teen"
    | "Kids";
  frameSize?: string;
  lensWidth?: number;
  bridgeWidth?: number;
  templeLength?: number;
  /* NEW FIELDS */
  dbl?: number;
  templeMaterial?: string;
  frameWidth?: number;
  lensHeight?: number;
  colorCode?: string;
  frameFrontColor?: string;
  lensColor?: string;
  hsnCode?: string;
  frameType?:
    | "Optical"
    | "Sunglasses"
    | "Computer Glasses"
    | "Reading Glasses";
  frameMaterial?:
    | "Metal"
    | "Plastic"
    | "Acetate"
    | "Titanium"
    | "TR90";
  frameColor: string;
  templeColor?: string;
  weight?: number;
  lensTypeSupported?: string[];
  stockQuantity?: number;
  lowStockLimit?: number;
  warehouseLocation?: string;
  purchasePrice?: number;
  tax?: number;
  sellingPrice: number;
  discountPrice?: number;
  gstPercentage?: number;
  status:
    | "Active"
    | "Inactive"
    | "Out of Stock";
  featuredProduct?: boolean;
  trendingProduct?: boolean;
  thumbnailImage: string;
  galleryImages?: string[];
  description: string;
  features?: string[];
  metaTitle?: string;
  metaDescription?: string;
  slug?: string;
  warrantyPeriod?: string;
  supplierName?: string;
  countryOfOrigin?: string;
  createdOn: string;
  updatedDate?: string;
  createdBy?: string;
}
export interface Material {
  id: string;

  materialId: string;
  materialCode: string;

  materialName: string;

  applicableFor: string;

  purchasePrice: number;
  sellingPrice: number;

  tax: number;
  hsnCode: string;

  stockQuantity: number;
  minimumStockLevel: number;

  warehouseLocation?: string;
  supplierName?: string;

  status: string;

  description?: string;
  notes?: string;

  createdOn: string;
  updatedDate?: string;

  createdBy?: string;
  lastModifiedBy?: string;
}

export interface LedgerGroup {
  id: string;
  groupName: string;
  createdAt: string;
  status: string;
  notes: string;
}


export interface Purchase {
  id: string;
  purchaseId: string;
  purchaseNo: string;

  supplierInvoiceNo?: string;

  supplierName: string;
  email?: string;
  phone: string;
  gstNumber?: string;
  billingAddress: string;

  purchaseDate: string;
  dueDate: string;

  purchaseStatus: "Draft" | "Ordered" | "Received" | "Cancelled";
  paymentStatus: "Paid" | "Pending" | "Partial" | "Overdue";

  productName: string;
  productType: string;
  brand?: string;

  quantity: number;
  unitCost: number;
  tax: number;
  discount: number;
  lineTotal: number;

  subtotal: number;
  taxAmount: number;
  discountAmount: number;
  shippingCharge: number;
  grandTotal: number;
}

export interface SalesTarget {
  id: string;
  targetId: string;       
  salesPersonId: string;  
  salesPersonName: string;
  targetAmount: number;
  achievedAmount: number;
  remainingAmount: number;
  
  dueDate: string;
  month: string;         
  status: string;         
  
  notes: string;
  
  // System Fields
  createdOn: string;
  updatedDate: string;
  createdBy: string;
}

export interface Inventory {
  id: string;
  productName: string;
  sku: string;
  barcode: string;
  category: string;
  brand: string;
  branch: string;
  stock: number;
  minStock: number;
  unitOfMeasure: string; 
  costPrice: number;
  price: number;
  currency: string;
 status: string; 
  supplier: string;
  location: string; 
   createdOn: string;
  updatedDate: string;
  createdBy: string;
  notes: string;
}

export interface RimShape {

  id: string;

  rimShapeId: string;

  rimShapeCode: string;

  shapeName: string;

  shapeCategory: string;

  applicableFor: string;

  totalProducts: number;

  status:string;

  description: string;

  notes: string;

  createdOn: string;

  updatedDate?: string;

  createdBy?: string;
}

export interface Column {

  key: string;

  label: string;

  align?:
    | "left"
    | "center"
    | "right";

  width?: number | string;
}

export interface Store {
  id: string;
  storeName: string;
  storeCode: string;
  location: string;
  phone: string;
  email: string;
  manager: string;
  status: "Active" | "Inactive";
  createdOn: string;
  
  // Enterprise ERP Fields
  storeType: string;
  gstin: string;
  monthlyTarget: number;
  monthlyRevenue: number;
  totalStaff: number;
  totalSKUs: number;
  inventoryValue: number;
  operatingHours: string;
  capacityLimit: number;
}

export interface BranchPrice  {
  location: string;
  price: number | "";
};

export interface FrameVariation  {
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
  subtopic11: string;
  branchPricing: BranchPrice[];
  images: File[];
};

export interface FrameFormValues {
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

export interface ContactLensVariant  {
  sku: string;
  barcode: string;
  sphericalPower: string;
  cylindricalPower: string;
  axis: string;
  additional: string;
  color: string;
};

export interface ContactLensFormValues {
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