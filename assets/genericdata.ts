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
    phone: "+91 9876543210",

    salesPerson: "Amit",
    orderSource: "Online Store",

    productType: "Frame",
    productName: "RayBan Classic Frame",
    productSku: "RB-1001",
    productVariant: "Black / Medium",

    quantity: 2,
    productPrice: 12250,

    status: "Completed",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",

    orderDate: "08-05-2026",

    subtotal: 24500,
    discount: 500,
    tax: 1200,
    shippingCharge: 0,
    totalAmount: 24500,

    paymentMethod: "UPI",
    transactionId: "TXN1001",
    paidAmount: 24500,
    paymentDue: 0,

    shippingPartner: "BlueDart",
    trackingNo: "BD123456789",
    estimatedDeliveryDate: "10-05-2026",

    shippingAddress:
      "22 MG Road, Delhi, India",
    billingAddress:
      "22 MG Road, Delhi, India",

    notes:
      "Customer requested premium packaging.",
  },

  {
    id: "2",
    orderNo: "ORD-1002",
    customerName: "Riya Patel",
    email: "riya@gmail.com",
    phone: "+91 9988776655",

    salesPerson: "Suresh",
    orderSource: "POS",

    productType: "Contact Lens",
    productName: "Bausch & Lomb Lens",
    productSku: "CL-2002",
    productVariant: "Monthly Pack",

    quantity: 1,
    productPrice: 12800,

    status: "Pending",
    paymentStatus: "Pending",
    deliveryStatus: "Processing",

    orderDate: "07-05-2026",

    subtotal: 12800,
    discount: 0,
    tax: 640,
    shippingCharge: 100,
    totalAmount: 12800,

    paymentMethod: "Cash",
    transactionId: "TXN1002",
    paidAmount: 5000,
    paymentDue: 7800,

    shippingPartner: "DTDC",
    trackingNo: "DT987654321",
    estimatedDeliveryDate: "11-05-2026",

    shippingAddress:
      "Ahmedabad, Gujarat, India",

    billingAddress:
      "Ahmedabad, Gujarat, India",

    notes:
      "Urgent delivery requested.",
  },

  {
    id: "3",
    orderNo: "ORD-1003",
    customerName: "Arjun Verma",
    email: "arjun@gmail.com",
    phone: "+91 9011223344",

    salesPerson: "Rohit",
    orderSource: "Online Store",

    productType: "Accessories",
    productName: "Eyewear Cleaning Kit",
    productSku: "ACC-3001",
    productVariant: "Standard",

    quantity: 3,
    productPrice: 2400,

    status: "Cancelled",
    paymentStatus: "Refunded",
    deliveryStatus: "Cancelled",

    orderDate: "06-05-2026",

    subtotal: 7200,
    discount: 200,
    tax: 300,
    shippingCharge: 0,
    totalAmount: 7200,

    paymentMethod: "Card",
    transactionId: "TXN1003",
    paidAmount: 7200,
    paymentDue: 0,

    shippingPartner: "N/A",
    trackingNo: "N/A",
    estimatedDeliveryDate: "N/A",

    shippingAddress:
      "Noida, Uttar Pradesh, India",

    billingAddress:
      "Noida, Uttar Pradesh, India",

    notes:
      "Order cancelled by customer.",
  },

  {
    id: "4",
    orderNo: "ORD-1004",
    customerName: "Sneha Kapoor",
    email: "sneha@gmail.com",
    phone: "+91 8877665544",

    salesPerson: "Vikas",
    orderSource: "Store",

    productType: "Frame",
    productName: "Titan Premium Frame",
    productSku: "FR-4001",
    productVariant: "Golden Large",

    quantity: 2,
    productPrice: 15900,

    status: "Completed",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",

    orderDate: "05-05-2026",

    subtotal: 31800,
    discount: 1000,
    tax: 1500,
    shippingCharge: 0,
    totalAmount: 31800,

    paymentMethod: "UPI",
    transactionId: "TXN1004",
    paidAmount: 31800,
    paymentDue: 0,

    shippingPartner: "BlueDart",
    trackingNo: "BD789456123",
    estimatedDeliveryDate: "08-05-2026",

    shippingAddress:
      "Mumbai, Maharashtra, India",

    billingAddress:
      "Mumbai, Maharashtra, India",

    notes:
      "VIP customer.",
  },

  {
    id: "5",
    orderNo: "ORD-1005",
    customerName: "Karan Mehta",
    email: "karan@gmail.com",
    phone: "+91 7766554433",

    salesPerson: "Anjali",
    orderSource: "Website",

    productType: "Sunglasses",
    productName: "Oakley Sunglasses",
    productSku: "SG-5001",
    productVariant: "Black",

    quantity: 1,
    productPrice: 15400,

    status: "Pending",
    paymentStatus: "Pending",
    deliveryStatus: "Not shipped",

    orderDate: "05-05-2026",

    subtotal: 15400,
    discount: 400,
    tax: 700,
    shippingCharge: 150,
    totalAmount: 15400,

    paymentMethod: "Card",
    transactionId: "TXN1005",
    paidAmount: 5000,
    paymentDue: 10400,

    shippingPartner: "DTDC",
    trackingNo: "DT445566778",
    estimatedDeliveryDate: "12-05-2026",

    shippingAddress:
      "Pune, Maharashtra, India",

    billingAddress:
      "Pune, Maharashtra, India",

    notes:
      "Customer asked for gift wrap.",
  },

  {
    id: "6",
    orderNo: "ORD-1006",
    customerName: "Priya Nair",
    email: "priya@gmail.com",
    phone: "+91 9988112233",

    salesPerson: "Deepak",
    orderSource: "Store",

    productType: "Optical Lens",
    productName: "Crizal Optical Lens",
    productSku: "OL-6001",
    productVariant: "Blue Cut",

    quantity: 2,
    productPrice: 11300,

    status: "Completed",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",

    orderDate: "04-05-2026",

    subtotal: 22600,
    discount: 600,
    tax: 1000,
    shippingCharge: 0,
    totalAmount: 22600,

    paymentMethod: "Cash",
    transactionId: "TXN1006",
    paidAmount: 22600,
    paymentDue: 0,

    shippingPartner: "BlueDart",
    trackingNo: "BD456789123",
    estimatedDeliveryDate: "07-05-2026",

    shippingAddress:
      "Kochi, Kerala, India",

    billingAddress:
      "Kochi, Kerala, India",

    notes:
      "Lens coating added.",
  },

  {
    id: "7",
    orderNo: "ORD-1007",
    customerName: "Aditya Singh",
    email: "aditya@gmail.com",
    phone: "+91 9090909090",

    salesPerson: "Rahul",
    orderSource: "POS",

    productType: "Accessories",
    productName: "Lens Cleaner",
    productSku: "ACC-7001",
    productVariant: "Pack of 3",

    quantity: 2,
    productPrice: 2700,

    status: "Refunded",
    paymentStatus: "Refunded",
    deliveryStatus: "Returned",

    orderDate: "04-05-2026",

    subtotal: 5400,
    discount: 100,
    tax: 200,
    shippingCharge: 0,
    totalAmount: 5400,

    paymentMethod: "UPI",
    transactionId: "TXN1007",
    paidAmount: 5400,
    paymentDue: 0,

    shippingPartner: "N/A",
    trackingNo: "N/A",
    estimatedDeliveryDate: "N/A",

    shippingAddress:
      "Lucknow, Uttar Pradesh, India",

    billingAddress:
      "Lucknow, Uttar Pradesh, India",

    notes:
      "Refund processed successfully.",
  },

  {
    id: "8",
    orderNo: "ORD-1008",
    customerName: "Neha Joshi",
    email: "neha@gmail.com",
    phone: "+91 8181818181",

    salesPerson: "Sonia",
    orderSource: "Website",

    productType: "Contact Lens",
    productName: "Acuvue Lens",
    productSku: "CL-8001",
    productVariant: "Yearly Pack",

    quantity: 2,
    productPrice: 9800,

    status: "Completed",
    paymentStatus: "Paid",
    deliveryStatus: "Delivered",

    orderDate: "03-05-2026",

    subtotal: 19600,
    discount: 500,
    tax: 900,
    shippingCharge: 0,
    totalAmount: 19600,

    paymentMethod: "Card",
    transactionId: "TXN1008",
    paidAmount: 19600,
    paymentDue: 0,

    shippingPartner: "BlueDart",
    trackingNo: "BD852741963",
    estimatedDeliveryDate: "06-05-2026",

    shippingAddress:
      "Jaipur, Rajasthan, India",

    billingAddress:
      "Jaipur, Rajasthan, India",

    notes:
      "Delivered successfully.",
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
    brand: "RayBan",
    modelNo: "RB-3025",
    rimType: "Full Rim",
    rimShape: "Aviator",
    templeMaterial: "Metal",
    category: "Sunglasses",
    hsnCode: "90041000",
    tax: 18,
    colourCode: "GOLD-BLACK",
    size: "58",
    dbl: "14",
    templeLength: "135",
    launchSeason: "Summer 2026",
    lensColor: "Green",
    frameFrontColor: "Gold",
    templeColor: "Black",
    skuCode: "RB-SG-1001",
    barcode: "8901452365478",
    srp: 7999,
    locationPricing:
      "Mumbai - 7999, Delhi - 8099",
    stock: 15,
    status: "Active",
    createdOn: "2026-05-11",
  },

  {
    id: "2",
    brand: "Oakley",
    modelNo: "OK-1102",
    rimType: "Half Rim",
    rimShape: "Rectangle",
    templeMaterial: "Titanium",
    category: "Optical Frame",
    hsnCode: "90049090",
    tax: 18,
    colourCode: "MATTE-BLUE",
    size: "54",
    dbl: "17",
    templeLength: "140",
    launchSeason: "Winter 2026",
    lensColor: "Transparent",
    frameFrontColor: "Blue",
    templeColor: "Black",
    skuCode: "OK-OF-1002",
    barcode: "8901452365490",
    srp: 6499,
    locationPricing:
      "Ahmedabad - 6499",
    stock: 4,
    status: "Active",
    createdOn: "2026-05-10",
  },

  {
    id: "3",
    brand: "Vogue",
    modelNo: "VG-908",
    rimType: "Rim Less",
    rimShape: "Round",
    templeMaterial: "Acetate",
    category: "RX-able",
    hsnCode: "90049090",
    tax: 12,
    colourCode: "ROSE-GOLD",
    size: "52",
    dbl: "18",
    templeLength: "138",
    launchSeason: "Spring 2026",
    lensColor: "Brown",
    frameFrontColor: "Rose Gold",
    templeColor: "Brown",
    skuCode: "VG-RX-1003",
    barcode: "8901452365502",
    srp: 5599,
    locationPricing: "Pune - 5599",
    stock: 0,
    status: "Inactive",
    createdOn: "2026-05-09",
  },

  {
    id: "4",
    brand: "Gucci",
    modelNo: "GC-778",
    rimType: "Full Rim",
    rimShape: "Cat Eye",
    templeMaterial: "Acetate",
    category: "Sunglasses",
    hsnCode: "90041000",
    tax: 18,
    colourCode: "BLACK-GOLD",
    size: "56",
    dbl: "16",
    templeLength: "142",
    launchSeason: "Autumn 2026",
    lensColor: "Grey",
    frameFrontColor: "Black",
    templeColor: "Gold",
    skuCode: "GC-SG-1004",
    barcode: "8901452365514",
    srp: 9999,
    locationPricing:
      "Mumbai - 9999",
    stock: 9,
    status: "Active",
    createdOn: "2026-05-08",
  },

  {
    id: "5",
    brand: "Prada",
    modelNo: "PR-556",
    rimType: "Half Rim",
    rimShape: "Square",
    templeMaterial: "Steel",
    category: "Optical Frame",
    hsnCode: "90049090",
    tax: 18,
    colourCode: "SILVER-BLUE",
    size: "55",
    dbl: "17",
    templeLength: "140",
    launchSeason: "Summer 2026",
    lensColor: "Transparent",
    frameFrontColor: "Silver",
    templeColor: "Blue",
    skuCode: "PR-OF-1005",
    barcode: "8901452365526",
    srp: 7499,
    locationPricing:
      "Delhi - 7499",
    stock: 3,
    status: "Active",
    createdOn: "2026-05-07",
  },

  {
    id: "6",
    brand: "Titan Eye+",
    modelNo: "TE-210",
    rimType: "Full Rim",
    rimShape: "Rectangle",
    templeMaterial: "Plastic",
    category: "Optical Frame",
    hsnCode: "90049090",
    tax: 12,
    colourCode: "BLACK-RED",
    size: "53",
    dbl: "18",
    templeLength: "136",
    launchSeason: "Winter 2025",
    lensColor: "Transparent",
    frameFrontColor: "Black",
    templeColor: "Red",
    skuCode: "TE-OF-1006",
    barcode: "8901452365538",
    srp: 3499,
    locationPricing:
      "Surat - 3499",
    stock: 22,
    status: "Active",
    createdOn: "2026-05-06",
  },

  {
    id: "7",
    brand: "Police",
    modelNo: "PL-900",
    rimType: "Rim Less",
    rimShape: "Oval",
    templeMaterial: "Titanium",
    category: "RX-able",
    hsnCode: "90049090",
    tax: 18,
    colourCode: "GUNMETAL",
    size: "51",
    dbl: "17",
    templeLength: "138",
    launchSeason: "Spring 2026",
    lensColor: "Brown",
    frameFrontColor: "Gunmetal",
    templeColor: "Grey",
    skuCode: "PL-RX-1007",
    barcode: "8901452365540",
    srp: 5899,
    locationPricing:
      "Bangalore - 5899",
    stock: 0,
    status: "Inactive",
    createdOn: "2026-05-05",
  },

  {
    id: "8",
    brand: "Tom Ford",
    modelNo: "TF-889",
    rimType: "Full Rim",
    rimShape: "Wayfarer",
    templeMaterial: "Acetate",
    category: "Sunglasses",
    hsnCode: "90041000",
    tax: 18,
    colourCode: "DARK-BROWN",
    size: "57",
    dbl: "15",
    templeLength: "145",
    launchSeason: "Summer 2026",
    lensColor: "Black",
    frameFrontColor: "Brown",
    templeColor: "Brown",
    skuCode: "TF-SG-1008",
    barcode: "8901452365552",
    srp: 11999,
    locationPricing:
      "Hyderabad - 11999",
    stock: 6,
    status: "Active",
    createdOn: "2026-05-04",
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

export const frameVariants = [
  {
    id: "1",
    frameId: "1",
    color: "Black",
    size: "52",
    sku: "RB-BLK-52",
    barcode: "8901452366001",
    stock: 12,
    price: 7999,
    status: "Active",
  },

  {
    id: "2",
    frameId: "1",
    color: "Gold",
    size: "54",
    sku: "RB-GLD-54",
    barcode: "8901452366002",
    stock: 4,
    price: 8299,
    status: "Active",
  },

  {
    id: "3",
    frameId: "1",
    color: "Silver",
    size: "56",
    sku: "RB-SLV-56",
    barcode: "8901452366003",
    stock: 0,
    price: 8499,
    status: "Inactive",
  },

  {
    id: "4",
    frameId: "2",
    color: "Blue",
    size: "54",
    sku: "OK-BLU-54",
    barcode: "8901452366004",
    stock: 8,
    price: 6499,
    status: "Active",
  },

  {
    id: "5",
    frameId: "2",
    color: "Matte Black",
    size: "56",
    sku: "OK-MBLK-56",
    barcode: "8901452366005",
    stock: 3,
    price: 6799,
    status: "Active",
  },

  {
    id: "6",
    frameId: "2",
    color: "Grey",
    size: "58",
    sku: "OK-GRY-58",
    barcode: "8901452366006",
    stock: 0,
    price: 6999,
    status: "Inactive",
  },

  {
    id: "7",
    frameId: "3",
    color: "Rose Gold",
    size: "52",
    sku: "VG-RG-52",
    barcode: "8901452366007",
    stock: 10,
    price: 5599,
    status: "Active",
  },

  {
    id: "8",
    frameId: "3",
    color: "Brown",
    size: "54",
    sku: "VG-BRW-54",
    barcode: "8901452366008",
    stock: 2,
    price: 5899,
    status: "Active",
  },

  {
    id: "9",
    frameId: "4",
    color: "Black Gold",
    size: "56",
    sku: "GC-BG-56",
    barcode: "8901452366009",
    stock: 6,
    price: 9999,
    status: "Active",
  },

  {
    id: "10",
    frameId: "4",
    color: "Dark Brown",
    size: "58",
    sku: "GC-DBR-58",
    barcode: "8901452366010",
    stock: 1,
    price: 10499,
    status: "Active",
  },

  {
    id: "11",
    frameId: "5",
    color: "Silver Blue",
    size: "55",
    sku: "PR-SB-55",
    barcode: "8901452366011",
    stock: 7,
    price: 7499,
    status: "Active",
  },

  {
    id: "12",
    frameId: "5",
    color: "Matte Grey",
    size: "57",
    sku: "PR-MG-57",
    barcode: "8901452366012",
    stock: 0,
    price: 7699,
    status: "Inactive",
  },

  {
    id: "13",
    frameId: "6",
    color: "Black Red",
    size: "53",
    sku: "TE-BR-53",
    barcode: "8901452366013",
    stock: 18,
    price: 3499,
    status: "Active",
  },

  {
    id: "14",
    frameId: "6",
    color: "Blue Black",
    size: "55",
    sku: "TE-BB-55",
    barcode: "8901452366014",
    stock: 11,
    price: 3699,
    status: "Active",
  },

  {
    id: "15",
    frameId: "7",
    color: "Gunmetal",
    size: "51",
    sku: "PL-GM-51",
    barcode: "8901452366015",
    stock: 0,
    price: 5899,
    status: "Inactive",
  },

  {
    id: "16",
    frameId: "7",
    color: "Grey Silver",
    size: "53",
    sku: "PL-GS-53",
    barcode: "8901452366016",
    stock: 4,
    price: 6099,
    status: "Active",
  },

  {
    id: "17",
    frameId: "8",
    color: "Dark Brown",
    size: "57",
    sku: "TF-DBR-57",
    barcode: "8901452366017",
    stock: 5,
    price: 11999,
    status: "Active",
  },

  {
    id: "18",
    frameId: "8",
    color: "Glossy Black",
    size: "59",
    sku: "TF-GBLK-59",
    barcode: "8901452366018",
    stock: 2,
    price: 12499,
    status: "Active",
  },
];