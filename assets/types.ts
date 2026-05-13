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

export interface RoleData {
  id: string;
  roleName: string;
  permissions: string[];
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
}

export interface PurchaseOrder {
  id: string;
  poNumber: string;
  vendorName: string;
  vendorEmail: string;
  vendorPhone: string;
  productName: string;
  productSku: string;
  category: string;
  quantity: number;
  unitPrice: number;
  tax: number;
  discount: number;
  totalAmount: number;
  paymentStatus: string;
  poStatus: string;
  orderDate: string;
  expectedDelivery: string;
  createdBy: string;
  notes: string;
}

export interface Expense {
  id: string;
  expenseName: string;
  ledger: string;
  amount: number;
  paymentMethod: string;
  expenseDate: string;
  createdBy: string;
  status: string;
  notes: string;
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
}
export interface Frame {
  id: string;

 
  frameId: string;
  frameName: string;
  sku: string;
  barcode?: string;

 
  categoryId: string;
  categoryName?: string;

 
  brandName: string;
  modelNumber?: string;

 
  frameType:
    | "Full Rim"
    | "Half Rim"
    | "Rimless";

  frameShape:
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
  salesPersonName: string;
  targetAmount: number;
  achievedAmount: number;
  remainingAmount: number;
  dueDate: string;
  month: string;
  status: string;
  notes: string;
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

  price: number;

  status: string;

  warehouseLocation?: string;

  notes?: string;

  createdOn: string;

  updatedDate?: string;

  createdBy?: string;
}