export interface Customer {
  id: string;
  fullName: string;
  customerType: "B2B" | "B2C";
  email: string;
  phoneNumber: string;
  city: string;
  state?: string;
  country?: string;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: string;
  status: string;
  phoneNumber?: string;
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

export interface Frame {
  id: string;
  modelNo: string;
  brand: string;
  rimType: string;
  rimShape: string;
  skuCode: string;
  barcode: string;
  srp: number;
}

export interface Brand {
  id: string;
  brandName: string;
  category: string;
  status: string;
}

export interface Category {
  id: string;
  categoryName: string;
  status: string;
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

export interface SalesTarget {
  id: string;
  salesPerson: string;
  targetAmount: number;
  achievedAmount: number;
  remainingAmount: number;
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
  productName: string;
  powerType: string;
  modality: string;
  baseCurve: number;
  diameter: number;
  material: string;
  mrp: number;
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
  invoiceNo: string;
  orderNo: string;
  customerName: string;
  productName: string;
  brand: string;
  category: string;
  invoiceDate: string;
  dueDate: string;
  subtotal: number;
  tax: number;
  discount: number;
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  paymentStatus: string;
  invoiceStatus: string;
  paymentMethod: string;
  createdBy: string;
  notes: string;
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