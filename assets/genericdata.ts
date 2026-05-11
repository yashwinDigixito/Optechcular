import {
  DashboardStat,
  ReportChartData,
} from "@/assets/types";

export const customers = [
  {
    id: "1",
    fullName: "John Doe",
    customerType: "B2B",
    email: "john@example.com",
    phoneNumber: "9876543210",
    city: "New York",
  },

  {
    id: "2",
    fullName: "Sarah Smith",
    customerType: "B2C",
    email: "sarah@example.com",
    phoneNumber: "9876543211",
    city: "London",
  },
];

export const users = [
  {
    id: "1",
    fullName: "Admin User",
    email: "admin@gmail.com",
    role: "Admin",
    status: "Active",
  },

  {
    id: "2",
    fullName: "Sales User",
    email: "sales@gmail.com",
    role: "Sales",
    status: "Inactive",
  },
];

export const invoices = [
  {
    id: "1",
    invoiceNo: "INV-1001",
    customer: "John Doe",
    amount: 2500,
    status: "Paid",
  },

  {
    id: "2",
    invoiceNo: "INV-1002",
    customer: "Sarah Smith",
    amount: 4000,
    status: "Pending",
  },
];

export const products = [
  {
    id: "1",
    productName: "Rayban Frame",
    brand: "Rayban",
    sku: "RB1001",
    barcode: "123456789",
    price: 2500,
  },

  {
    id: "2",
    productName: "Contact Lens",
    brand: "Bausch & Lomb",
    sku: "CL1001",
    barcode: "987654321",
    price: 1500,
  },
];

export const frames = [
  {
    id: "1",
    modelNo: "RB-2026",
    brand: "Rayban",
    rimType: "Full Rim",
    rimShape: "Rectangle",
    skuCode: "RBX001",
    barcode: "123456789",
    srp: 3500,
  },

  {
    id: "2",
    modelNo: "VC-2025",
    brand: "Vincent Chase",
    rimType: "Half Rim",
    rimShape: "Round",
    skuCode: "VCX002",
    barcode: "987654321",
    srp: 2800,
  },
];

export const brands = [
  {
    id: "1",
    brandName: "Rayban",
    category: "Frame",
    status: "Active",
  },

  {
    id: "2",
    brandName: "Bausch & Lomb",
    category: "Contact Lens",
    status: "Active",
  },
];

export const categories = [
  {
    id: "1",
    categoryName: "Optical Frame",
    status: "Active",
  },

  {
    id: "2",
    categoryName: "Sunglasses",
    status: "Active",
  },
];

export const purchaseOrders = [
  {
    id: "1",
    poNo: "PO-1001",
    vendorName: "Lens Supplier",
    totalQty: 20,
    status: "Received",
  },

  {
    id: "2",
    poNo: "PO-1002",
    vendorName: "Frame Supplier",
    totalQty: 15,
    status: "Pending",
  },
];

export const expenses = [
  {
    id: "1",
    expenseName: "Electricity Bill",
    ledger: "Utilities",
    amount: 5000,
  },

  {
    id: "2",
    expenseName: "Office Rent",
    ledger: "Rent",
    amount: 25000,
  },
];

export const ledgers = [
  {
    id: "1",
    ledgerName: "Utilities",
    group: "Expense",
    openingAmount: 1000,
    type: "Debit",
  },

  {
    id: "2",
    ledgerName: "Sales Account",
    group: "Income",
    openingAmount: 5000,
    type: "Credit",
  },
];

export const salesTargets = [
  {
    id: "1",
    salesPerson: "Admin User",
    targetAmount: 100000,
    achievedAmount: 60000,
    remainingAmount: 40000,
  },

  {
    id: "2",
    salesPerson: "Sales User",
    targetAmount: 80000,
    achievedAmount: 30000,
    remainingAmount: 50000,
  },
];

export const rolesData = [
  {
    id: "1",
    roleName: "Admin",
    permissions: [
      "Create",
      "Edit",
      "View",
      "Delete",
    ],
  },

  {
    id: "2",
    roleName: "Sales",
    permissions: [
      "View",
    ],
  },
];

export const dashboardStats: DashboardStat[] = [
  {
    title: "Total Orders",
    value: "12,486",
    growth:"+10%",
  },

  {
    title: "Total Purchases",
    value: "8,245",
    growth:"+12%",
  },

  {
    title: "Total Sales",
    value: "₹18,75,430",
    growth:"+12.5%",
  },
];

export const orderReportData: ReportChartData[] = [
  { day: "Mon", value: 1200 },
  { day: "Tue", value: 1900 },
  { day: "Wed", value: 1600 },
  { day: "Thu", value: 2400 },
  { day: "Fri", value: 2800 },
  { day: "Sat", value: 2200 },
  { day: "Sun", value: 1700 },
];

export const purchaseReportData: ReportChartData[] = [
  { day: "Mon", value: 900 },
  { day: "Tue", value: 1500 },
  { day: "Wed", value: 1300 },
  { day: "Thu", value: 1800 },
  { day: "Fri", value: 2100 },
  { day: "Sat", value: 1900 },
  { day: "Sun", value: 1400 },
];

export const salesReturnData = [
  {
    month: "Jan",
    sales: 45000,
    returns: 4000,
  },

  {
    month: "Feb",
    sales: 52000,
    returns: 3500,
  },

  {
    month: "Mar",
    sales: 61000,
    returns: 5000,
  },

  {
    month: "Apr",
    sales: 70000,
    returns: 4200,
  },

  {
    month: "May",
    sales: 85000,
    returns: 6000,
  },

  {
    month: "Jun",
    sales: 92000,
    returns: 5500,
  },
];


export const orders = [
  {
    id: "1",
    orderNo: "ORD-1001",
    customerName: "Rahul Sharma",
    email: "rahul@gmail.com",
    salesPerson: "Amit",
    productType: "Frame",
    status: "Completed",
    orderDate: "08-05-2026",
    totalAmount: 24500,
  },

  {
    id: "2",
    orderNo: "ORD-1002",
    customerName: "Riya Patel",
    email: "riya@gmail.com",
    salesPerson: "Suresh",
    productType: "Contact Lens",
    status: "Pending",
    orderDate: "07-05-2026",
    totalAmount: 12800,
  },

  {
    id: "3",
    orderNo: "ORD-1003",
    customerName: "Arjun Verma",
    email: "arjun@gmail.com",
    salesPerson: "Rohit",
    productType: "Accessories",
    status: "Cancelled",
    orderDate: "06-05-2026",
    totalAmount: 7200,
  },

  {
    id: "4",
    orderNo: "ORD-1004",
    customerName: "Sneha Kapoor",
    email: "sneha@gmail.com",
    salesPerson: "Vikas",
    productType: "Frame",
    status: "Completed",
    orderDate: "05-05-2026",
    totalAmount: 31800,
  },

  {
    id: "5",
    orderNo: "ORD-1005",
    customerName: "Karan Mehta",
    email: "karan@gmail.com",
    salesPerson: "Anjali",
    productType: "Sunglasses",
    status: "Pending",
    orderDate: "05-05-2026",
    totalAmount: 15400,
  },

  {
    id: "6",
    orderNo: "ORD-1006",
    customerName: "Priya Nair",
    email: "priya@gmail.com",
    salesPerson: "Deepak",
    productType: "Optical Lens",
    status: "Completed",
    orderDate: "04-05-2026",
    totalAmount: 22600,
  },

  {
    id: "7",
    orderNo: "ORD-1007",
    customerName: "Aditya Singh",
    email: "aditya@gmail.com",
    salesPerson: "Rahul",
    productType: "Accessories",
    status: "Refunded",
    orderDate: "04-05-2026",
    totalAmount: 5400,
  },

  {
    id: "8",
    orderNo: "ORD-1008",
    customerName: "Neha Joshi",
    email: "neha@gmail.com",
    salesPerson: "Sonia",
    productType: "Contact Lens",
    status: "Completed",
    orderDate: "03-05-2026",
    totalAmount: 19600,
  },

  {
    id: "9",
    orderNo: "ORD-1009",
    customerName: "Vivek Malhotra",
    email: "vivek@gmail.com",
    salesPerson: "Rakesh",
    productType: "Frame",
    status: "Pending",
    orderDate: "02-05-2026",
    totalAmount: 26700,
  },

  {
    id: "10",
    orderNo: "ORD-1010",
    customerName: "Aisha Khan",
    email: "aisha@gmail.com",
    salesPerson: "Kunal",
    productType: "Sunglasses",
    status: "Completed",
    orderDate: "01-05-2026",
    totalAmount: 14300,
  },
];

export const orderTabs = [
  {
    label: "All",
    color: "#1E293B",
  },

  {
    label: "Pending",
    color: "#D97706",
  },

  {
    label: "Completed",
    color: "#16A34A",
  },

  {
    label: "Cancelled",
    color: "#DC2626",
  },

  {
    label: "Refunded",
    color: "#475569",
  },
];