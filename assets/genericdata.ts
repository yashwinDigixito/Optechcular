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

export const roles = [
  {
    id: "1",
    roleName: "Admin",
    status: "Active",
    permissions: [
      "Create",
      "Edit",
      "View",
      "Deactivate",
    ],
  },

  {
    id: "2",
    roleName: "Manager",
    status: "Active",
    permissions: [
      "View",
      "Edit",
    ],
  },

  {
    id: "3",
    roleName: "Sales",
    status: "Inactive",
    permissions: [
      "View",
    ],
  },

  {
    id: "4",
    roleName: "HR Manager",
    status: "Active",
    permissions: [
      "Create",
      "View",
      "Edit",
    ],
  },

  {
    id: "5",
    roleName: "Inventory Manager",
    status: "Active",
    permissions: [
      "Create",
      "Edit",
      "View",
    ],
  },

  {
    id: "6",
    roleName: "Accountant",
    status: "Inactive",
    permissions: [
      "View",
      "Edit",
    ],
  },

  {
    id: "7",
    roleName: "Support Executive",
    status: "Active",
    permissions: [
      "View",
    ],
  },

  {
    id: "8",
    roleName: "Store Manager",
    status: "Active",
    permissions: [
      "Create",
      "Edit",
      "View",
      "Deactivate",
    ],
  },

  {
    id: "9",
    roleName: "Marketing Executive",
    status: "Inactive",
    permissions: [
      "View",
      "Edit",
    ],
  },

  {
    id: "10",
    roleName: "Delivery Staff",
    status: "Active",
    permissions: [
      "View",
    ],
  },

  {
    id: "11",
    roleName: "Finance Manager",
    status: "Active",
    permissions: [
      "Create",
      "Edit",
      "View",
    ],
  },

  {
    id: "12",
    roleName: "Receptionist",
    status: "Inactive",
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

export const roleTabs = [
  {
    label: "All",
    color: "#1E293B",
  },

  {
    label: "Active",
    color: "#16A34A",
  },

  {
    label: "Inactive",
    color: "#DC2626",
  },
];

export const brands = [
  {
    id: "1",
    brandName: "RayBan",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    brandName: "Titan Eye+",
    category: "Frame",
    brandGroup: "Budget",
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    brandName: "Acuvue",
    category: "Contact Lens",
    brandGroup: "Imported",
    status: "Inactive",
    createdOn: "2026-05-09",
  },

  {
    id: "4",
    brandName: "Oakley",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",
    createdOn: "2026-05-08",
  },

  {
    id: "5",
    brandName: "Fastrack",
    category: "Accessories",
    brandGroup: "Budget",
    status: "Active",
    createdOn: "2026-05-07",
  },

  {
    id: "6",
    brandName: "Bausch + Lomb",
    category: "Contact Lens",
    brandGroup: "Imported",
    status: "Active",
    createdOn: "2026-05-06",
  },

  {
    id: "7",
    brandName: "Vogue Eyewear",
    category: "Frame",
    brandGroup: "Premium",
    status: "Inactive",
    createdOn: "2026-05-05",
  },

  {
    id: "8",
    brandName: "Police",
    category: "Frame",
    brandGroup: "Luxury",
    status: "Active",
    createdOn: "2026-05-04",
  },

  {
    id: "9",
    brandName: "John Jacobs",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",
    createdOn: "2026-05-03",
  },

  {
    id: "10",
    brandName: "FreshLook",
    category: "Contact Lens",
    brandGroup: "Imported",
    status: "Inactive",
    createdOn: "2026-05-02",
  },

  {
    id: "11",
    brandName: "Prada",
    category: "Frame",
    brandGroup: "Luxury",
    status: "Active",
    createdOn: "2026-05-01",
  },

  {
    id: "12",
    brandName: "Gucci",
    category: "Accessories",
    brandGroup: "Luxury",
    status: "Active",
    createdOn: "2026-04-30",
  },

  {
    id: "13",
    brandName: "Carrera",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",
    createdOn: "2026-04-29",
  },

  {
    id: "14",
    brandName: "Essilor",
    category: "Optical Lens",
    brandGroup: "Imported",
    status: "Active",
    createdOn: "2026-04-28",
  },

  {
    id: "15",
    brandName: "Zeiss",
    category: "Optical Lens",
    brandGroup: "Luxury",
    status: "Inactive",
    createdOn: "2026-04-27",
  },
];

export const brandGroups = [
  {
    id: "1",
    groupName: "Premium",
    description:
      "High quality premium eyewear brands",
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    groupName: "Budget",
    description:
      "Affordable daily use brands",
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    groupName: "Luxury",
    description:
      "Luxury designer eyewear brands",
    status: "Inactive",
    createdOn: "2026-05-09",
  },

  {
    id: "4",
    groupName: "Imported",
    description:
      "International imported products",
    status: "Active",
    createdOn: "2026-05-08",
  },
];

export const categories = [
  {
    id: "1",
    categoryName: "Frame",
    description:
      "Optical and sunglasses frames",
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    categoryName: "Contact Lens",
    description:
      "Vision correction contact lenses",
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    categoryName: "Accessories",
    description:
      "Eyewear accessories and cleaners",
    status: "Inactive",
    createdOn: "2026-05-09",
  },

  {
    id: "4",
    categoryName: "Optical Lens",
    description:
      "Prescription optical lenses",
    status: "Active",
    createdOn: "2026-05-08",
  },
];

export const materials = [
  {
    id: "1",
    materialName: "Metal",
    applicableFor: "Frame",
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    materialName: "Plastic",
    applicableFor: "Frame",
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    materialName:
      "Silicone Hydrogel",

    applicableFor:
      "Contact Lens",

    status: "Active",

    createdOn:
      "2026-05-09",
  },

  {
    id: "4",
    materialName:
      "Polycarbonate",

    applicableFor:
      "Optical Lens",

    status: "Inactive",

    createdOn:
      "2026-05-08",
  },

  {
    id: "5",
    materialName:
      "Titanium",

    applicableFor:
      "Frame",

    status: "Active",

    createdOn:
      "2026-05-07",
  },
];

export const rimShapes = [
  {
    id: "1",
    shapeName: "Round",
    description:
      "Classic circular frame shape",
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    shapeName: "Square",
    description:
      "Sharp square frame design",
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    shapeName: "Cat Eye",
    description:
      "Stylish cat eye frame shape",
    status: "Inactive",
    createdOn: "2026-05-09",
  },

  {
    id: "4",
    shapeName: "Aviator",
    description:
      "Pilot inspired aviator shape",
    status: "Active",
    createdOn: "2026-05-08",
  },

  {
    id: "5",
    shapeName: "Rectangle",
    description:
      "Modern rectangular frame",
    status: "Active",
    createdOn: "2026-05-07",
  },
];

export const frames = [
  {
    id: "1",

    productName:
      "RayBan Classic Round",

    sku: "RB-1001",

    brand: "RayBan",

    category: "Frame",

    material: "Metal",

    rimShape: "Round",

    color: "Black",

    size: "Medium",

    price: 4999,

    stock: 25,

    status: "Active",

    createdOn: "2026-05-11",
  },

  {
    id: "2",

    productName:
      "Oakley Square Pro",

    sku: "OK-2201",

    brand: "Oakley",

    category: "Frame",

    material: "Titanium",

    rimShape: "Square",

    color: "Silver",

    size: "Large",

    price: 6999,

    stock: 10,

    status: "Active",

    createdOn: "2026-05-10",
  },

  {
    id: "3",

    productName:
      "Vogue Cat Eye",

    sku: "VG-3101",

    brand: "Vogue",

    category: "Frame",

    material: "Plastic",

    rimShape: "Cat Eye",

    color: "Pink",

    size: "Small",

    price: 3999,

    stock: 0,

    status: "Inactive",

    createdOn: "2026-05-09",
  },
];


export const contactLenses = [
  {
    id: "1",

    productName:
      "Acuvue Oasys",

    productCode:
      "CL-1001",

    brand:
      "Johnson & Johnson",

    powerType:
      "Spherical",

    modality:
      "Monthly",

    material:
      "Silicone Hydrogel",

    productType:
      "Rx",

    baseCurve:
      "8.4",

    diameter:
      "14.2",

    stock: 120,

    price: 2499,

    status:
      "Active",

    createdOn:
      "2026-05-11",
  },

  {
    id: "2",

    productName:
      "Bausch Lomb Ultra",

    productCode:
      "CL-1002",

    brand:
      "Bausch & Lomb",

    powerType:
      "Astigmatism",

    modality:
      "Daily",

    material:
      "Hydrogel",

    productType:
      "Rx",

    baseCurve:
      "8.6",

    diameter:
      "14.0",

    stock: 60,

    price: 3299,

    status:
      "Active",

    createdOn:
      "2026-05-10",
  },

  {
    id: "3",

    productName:
      "FreshLook Color",

    productCode:
      "CL-1003",

    brand:
      "Alcon",

    powerType:
      "Progressive",

    modality:
      "Quarterly",

    material:
      "Hydrogel",

    productType:
      "Cosmetic",

    baseCurve:
      "8.5",

    diameter:
      "14.1",

    stock: 0,

    price: 1899,

    status:
      "Inactive",

    createdOn:
      "2026-05-09",
  },
];