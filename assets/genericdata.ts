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

export const orders = [
  {
    id: "1",
    orderNo: "ORD-1001",
    customer: "John Doe",
    salesPerson: "Admin User",
    amount: 5000,
    status: "Completed",
  },

  {
    id: "2",
    orderNo: "ORD-1002",
    customer: "Sarah Smith",
    salesPerson: "Sales User",
    amount: 2500,
    status: "Pending",
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

export const dashboardStats = [
  {
    title: "Total Orders",
    value: 1200,
  },

  {
    title: "Total Purchases",
    value: 500,
  },

  {
    title: "Total Sales",
    value: "₹2,40,000",
  },

  {
    title: "Total Customers",
    value: 320,
  },
];