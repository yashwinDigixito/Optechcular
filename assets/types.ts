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

export interface Invoice {
  id: string;
  invoiceNo: string;
  customer: string;
  amount: number;
  status: string;
  date?: string;
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
  salesPerson: string;
  productType: string;
  status: string;
  orderDate: string;
  totalAmount: number;
}

export interface PurchaseOrder {
  id: string;
  poNo: string;
  vendorName: string;
  totalQty: number;
  status: string;
}

export interface Expense {
  id: string;
  expenseName: string;
  ledger: string;
  amount: number;
}

export interface Ledger {
  id: string;
  ledgerName: string;
  group: string;
  openingAmount: number;
  type: string;
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