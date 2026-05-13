import {
  DashboardStat,
  Expense,
  Invoice,
  Ledger,
  PurchaseOrder,
  ReportChartData
} from "@/assets/types";


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
    brandId: "BR-1001",
    brandName: "RayBan",
    brandLogo: "",
    brandType: "Eyewear",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",

    contactPerson: "Rahul Sharma",
    email: "rayban@gmail.com",
    phone: "+91 9876543210",
    website: "www.rayban.com",

    address: "22 MG Road",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "110001",

    gstNumber: "07ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 120,
    activeProducts: 95,
    totalOrders: 340,
    revenue: 2450000,

    description:
      "Premium eyewear brand for frames and sunglasses.",

    notes:
      "Top-selling premium frame brand.",

    createdOn: "2026-05-11",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },

  {
    id: "2",
    brandId: "BR-1002",
    brandName: "Titan Eye+",
    brandLogo: "",
    brandType: "Eyewear",
    category: "Frame",
    brandGroup: "Budget",
    status: "Active",

    contactPerson: "Riya Patel",
    email: "titaneye@gmail.com",
    phone: "+91 9988776655",
    website: "www.titaneyeplus.com",

    address: "Andheri East",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    postalCode: "400069",

    gstNumber: "27ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 90,
    activeProducts: 80,
    totalOrders: 210,
    revenue: 1280000,

    description:
      "Affordable eyewear brand with wide frame collection.",

    notes:
      "Good budget category sales.",

    createdOn: "2026-05-10",
    updatedDate: "2026-05-11",
    createdBy: "Admin",
  },

  {
    id: "3",
    brandId: "BR-1003",
    brandName: "Oakley",
    brandLogo: "",
    brandType: "Sunglasses",
    category: "Frame",
    brandGroup: "Luxury",
    status: "Active",

    contactPerson: "Amit Verma",
    email: "oakley@gmail.com",
    phone: "+91 9090909090",
    website: "www.oakley.com",

    address: "Sector 18",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "201301",

    gstNumber: "09ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 150,
    activeProducts: 130,
    totalOrders: 420,
    revenue: 3680000,

    description:
      "Luxury sunglasses and sports eyewear brand.",

    notes:
      "Strong premium customer base.",

    createdOn: "2026-05-09",
    updatedDate: "2026-05-10",
    createdBy: "Admin",
  },

  {
    id: "4",
    brandId: "BR-1004",
    brandName: "Acuvue",
    brandLogo: "",
    brandType: "Contact Lens",
    category: "Contact Lens",
    brandGroup: "Imported",
    status: "Inactive",

    contactPerson: "Sneha Kapoor",
    email: "acuvue@gmail.com",
    phone: "+91 8181818181",
    website: "www.acuvue.com",

    address: "MG Road",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560001",

    gstNumber: "29ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 70,
    activeProducts: 45,
    totalOrders: 160,
    revenue: 980000,

    description:
      "Imported contact lens solutions and products.",

    notes:
      "Low inventory available.",

    createdOn: "2026-05-08",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },

  {
    id: "5",
    brandId: "BR-1005",
    brandName: "Fastrack",
    brandLogo: "",
    brandType: "Accessories",
    category: "Accessories",
    brandGroup: "Budget",
    status: "Active",

    contactPerson: "Karan Mehta",
    email: "fastrack@gmail.com",
    phone: "+91 7878787878",
    website: "www.fastrack.com",

    address: "Park Street",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    postalCode: "700016",

    gstNumber: "19ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 110,
    activeProducts: 90,
    totalOrders: 290,
    revenue: 1850000,

    description:
      "Youth-focused accessories and eyewear brand.",

    notes:
      "Popular among young customers.",

    createdOn: "2026-05-07",
    updatedDate: "2026-05-08",
    createdBy: "Admin",
  },

  {
    id: "6",
    brandId: "BR-1006",
    brandName: "Prada",
    brandLogo: "",
    brandType: "Luxury Eyewear",
    category: "Frame",
    brandGroup: "Luxury",
    status: "Active",

    contactPerson: "Priya Nair",
    email: "prada@gmail.com",
    phone: "+91 9998887776",
    website: "www.prada.com",

    address: "Marine Drive",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    postalCode: "400002",

    gstNumber: "27ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 85,
    activeProducts: 75,
    totalOrders: 180,
    revenue: 4950000,

    description:
      "Luxury designer eyewear collection.",

    notes:
      "High-value premium orders.",

    createdOn: "2026-05-06",
    updatedDate: "2026-05-07",
    createdBy: "Admin",
  },

  {
    id: "7",
    brandId: "BR-1007",
    brandName: "Police",
    brandLogo: "",
    brandType: "Sunglasses",
    category: "Frame",
    brandGroup: "Premium",
    status: "Active",

    contactPerson: "Aditya Singh",
    email: "police@gmail.com",
    phone: "+91 9098765432",
    website: "www.police.com",

    address: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    postalCode: "500034",

    gstNumber: "36ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 95,
    activeProducts: 78,
    totalOrders: 240,
    revenue: 2140000,

    description:
      "Stylish premium sunglasses and frames.",

    notes:
      "Good retail performance.",

    createdOn: "2026-05-05",
    updatedDate: "2026-05-06",
    createdBy: "Admin",
  },

  {
    id: "8",
    brandId: "BR-1008",
    brandName: "Essilor",
    brandLogo: "",
    brandType: "Optical Lens",
    category: "Optical Lens",
    brandGroup: "Imported",
    status: "Active",

    contactPerson: "Neha Joshi",
    email: "essilor@gmail.com",
    phone: "+91 9898989898",
    website: "www.essilor.com",

    address: "Civil Lines",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    postalCode: "302001",

    gstNumber: "08ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 130,
    activeProducts: 112,
    totalOrders: 350,
    revenue: 3210000,

    description:
      "Advanced optical lens technology brand.",

    notes:
      "Excellent customer satisfaction.",

    createdOn: "2026-05-04",
    updatedDate: "2026-05-05",
    createdBy: "Admin",
  },

  {
    id: "9",
    brandId: "BR-1009",
    brandName: "Gucci",
    brandLogo: "",
    brandType: "Luxury Eyewear",
    category: "Accessories",
    brandGroup: "Luxury",
    status: "Inactive",

    contactPerson: "Vivek Malhotra",
    email: "gucci@gmail.com",
    phone: "+91 9123456789",
    website: "www.gucci.com",

    address: "Connaught Place",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "110001",

    gstNumber: "07ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 60,
    activeProducts: 40,
    totalOrders: 110,
    revenue: 6250000,

    description:
      "Luxury fashion and eyewear products.",

    notes:
      "Limited imported collection.",

    createdOn: "2026-05-03",
    updatedDate: "2026-05-04",
    createdBy: "Admin",
  },

  {
    id: "10",
    brandId: "BR-1010",
    brandName: "Zeiss",
    brandLogo: "",
    brandType: "Optical Lens",
    category: "Optical Lens",
    brandGroup: "Luxury",
    status: "Active",

    contactPerson: "Aisha Khan",
    email: "zeiss@gmail.com",
    phone: "+91 9988007766",
    website: "www.zeiss.com",

    address: "Anna Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    postalCode: "600040",

    gstNumber: "33ABCDE1234F1Z5",
    panNumber: "ABCDE1234F",

    totalProducts: 140,
    activeProducts: 120,
    totalOrders: 390,
    revenue: 4120000,

    description:
      "World-class optical lens and vision technology.",

    notes:
      "High-end optical solutions provider.",

    createdOn: "2026-05-02",
    updatedDate: "2026-05-03",
    createdBy: "Admin",
  },
];

export const brandGroups = [
  {
    id: "1",
    groupId: "BG-1001",
    groupName: "Premium",
    groupType: "Eyewear Group",
    status: "Active",
    description: "High quality premium eyewear brands",
    parentCategory: "Frame",
    priorityLevel: "High",
    displayOrder: 1,
    totalBrands: 8,
    activeBrands: 7,
    totalProducts: 520,
    revenueContribution: 2450000,
    managerName: "Rahul Sharma",
    managerEmail: "rahul.manager@gmail.com",
    managerPhone: "+91 9876543210",
    notes: "Best performing brand group.",
    createdOn: "2026-05-11",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },
  {
    id: "2",
    groupId: "BG-1002",
    groupName: "Budget",
    groupType: "Value Group",
    status: "Active",
    description: "Affordable daily use brands",
    parentCategory: "Accessories",
    priorityLevel: "Medium",
    displayOrder: 2,
    totalBrands: 6,
    activeBrands: 6,
    totalProducts: 310,
    revenueContribution: 1280000,
    managerName: "Riya Patel",
    managerEmail: "riya.manager@gmail.com",
    managerPhone: "+91 9988776655",
    notes: "Good for daily-use customer segment.",
    createdOn: "2026-05-10",
    updatedDate: "2026-05-11",
    createdBy: "Admin",
  },
  {
    id: "3",
    groupId: "BG-1003",
    groupName: "Luxury",
    groupType: "Luxury Group",
    status: "Inactive",
    description: "Luxury designer eyewear brands",
    parentCategory: "Frame",
    priorityLevel: "High",
    displayOrder: 3,
    totalBrands: 5,
    activeBrands: 3,
    totalProducts: 180,
    revenueContribution: 3650000,
    managerName: "Amit Verma",
    managerEmail: "amit.manager@gmail.com",
    managerPhone: "+91 9090909090",
    notes: "Requires updated luxury catalog.",
    createdOn: "2026-05-09",
    updatedDate: "2026-05-10",
    createdBy: "Admin",
  },
  {
    id: "4",
    groupId: "BG-1004",
    groupName: "Imported",
    groupType: "International Group",
    status: "Active",
    description: "International imported products",
    parentCategory: "Contact Lens",
    priorityLevel: "Medium",
    displayOrder: 4,
    totalBrands: 7,
    activeBrands: 6,
    totalProducts: 260,
    revenueContribution: 2100000,
    managerName: "Sneha Kapoor",
    managerEmail: "sneha.manager@gmail.com",
    managerPhone: "+91 8181818181",
    notes: "Imported product stock needs regular tracking.",
    createdOn: "2026-05-08",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },
];
export const categories = [
  {
    id: "1",
    categoryId: "CAT-1001",
    categoryName: "Frame",
    categoryCode: "FRAME",
    categoryType: "Product Category",
    parentCategory: "Eyewear",
    status: "Active",
    displayOrder: 1,
    priorityLevel: "High",
    totalProducts: 250,
    activeProducts: 220,
    totalBrands: 12,
    revenueContribution: 2450000,
    stockQuantity: 1200,
    lowStockProducts: 8,
    warehouseLocation: "Delhi Warehouse",
    description: "Optical and sunglasses frames",
    notes: "Top performing category.",
    createdOn: "2026-05-11",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },
  {
    id: "2",
    categoryId: "CAT-1002",
    categoryName: "Contact Lens",
    categoryCode: "CONTACT-LENS",
    categoryType: "Product Category",
    parentCategory: "Vision Care",
    status: "Active",
    displayOrder: 2,
    priorityLevel: "Medium",
    totalProducts: 140,
    activeProducts: 125,
    totalBrands: 6,
    revenueContribution: 1280000,
    stockQuantity: 850,
    lowStockProducts: 5,
    warehouseLocation: "Mumbai Warehouse",
    description: "Vision correction contact lenses",
    notes: "Regular restocking required.",
    createdOn: "2026-05-10",
    updatedDate: "2026-05-11",
    createdBy: "Admin",
  },
  {
    id: "3",
    categoryId: "CAT-1003",
    categoryName: "Accessories",
    categoryCode: "ACCESSORIES",
    categoryType: "Product Category",
    parentCategory: "Eyewear",
    status: "Inactive",
    displayOrder: 3,
    priorityLevel: "Low",
    totalProducts: 90,
    activeProducts: 55,
    totalBrands: 5,
    revenueContribution: 620000,
    stockQuantity: 430,
    lowStockProducts: 12,
    warehouseLocation: "Noida Warehouse",
    description: "Eyewear accessories and cleaners",
    notes: "Some items need catalog update.",
    createdOn: "2026-05-09",
    updatedDate: "2026-05-10",
    createdBy: "Admin",
  },
  {
    id: "4",
    categoryId: "CAT-1004",
    categoryName: "Optical Lens",
    categoryCode: "OPTICAL-LENS",
    categoryType: "Product Category",
    parentCategory: "Vision Care",
    status: "Active",
    displayOrder: 4,
    priorityLevel: "High",
    totalProducts: 180,
    activeProducts: 160,
    totalBrands: 8,
    revenueContribution: 3100000,
    stockQuantity: 980,
    lowStockProducts: 4,
    warehouseLocation: "Bangalore Warehouse",
    description: "Prescription optical lenses",
    notes: "High-value prescription lens category.",
    createdOn: "2026-05-08",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },
];
export const materials = [
  {
    id: "1",

    materialId: "MAT-1001",

    materialCode: "METAL-001",

    materialName: "Metal",

    applicableFor: "Frame",

    purchasePrice: 450,

    sellingPrice: 700,

    tax: 18,

    hsnCode: "90031100",

    stockQuantity: 250,

    minimumStockLevel: 40,

    warehouseLocation: "Delhi Warehouse",

    supplierName: "Vision Metals Pvt Ltd",

    status: "Active",

    description:
      "Durable lightweight metal material commonly used in premium eyewear frames.",

    notes:
      "Best suited for luxury frame collection.",

    createdOn: "2026-05-11",

    updatedDate: "2026-05-12",

    createdBy: "Admin",

    lastModifiedBy: "Manager",
  },

  {
    id: "2",

    materialId: "MAT-1002",

    materialCode: "PLASTIC-001",

    materialName: "Plastic",

    applicableFor: "Frame",

    purchasePrice: 180,

    sellingPrice: 320,

    tax: 18,

    hsnCode: "90031100",

    stockQuantity: 520,

    minimumStockLevel: 80,

    warehouseLocation: "Mumbai Warehouse",

    supplierName: "Optic Plast Industries",

    status: "Active",

    description:
      "Affordable and lightweight plastic material used in regular optical frames.",

    notes:
      "High stock turnover product.",

    createdOn: "2026-05-10",

    updatedDate: "2026-05-11",

    createdBy: "Admin",

    lastModifiedBy: "Warehouse Manager",
  },

  {
    id: "3",

    materialId: "MAT-1003",

    materialCode: "SIL-HYDRO-001",

    materialName: "Silicone Hydrogel",

    applicableFor: "Contact Lens",

    purchasePrice: 950,

    sellingPrice: 1450,

    tax: 12,

    hsnCode: "90013000",

    stockQuantity: 140,

    minimumStockLevel: 25,

    warehouseLocation: "Bangalore Warehouse",

    supplierName: "Lens Care Solutions",

    status: "Active",

    description:
      "Premium breathable contact lens material with superior oxygen permeability.",

    notes:
      "Most preferred material for monthly disposable lenses.",

    createdOn: "2026-05-09",

    updatedDate: "2026-05-10",

    createdBy: "Admin",

    lastModifiedBy: "Lens Department",
  },

  {
    id: "4",

    materialId: "MAT-1004",

    materialCode: "POLY-001",

    materialName: "Polycarbonate",

    applicableFor: "Optical Lens",

    purchasePrice: 600,

    sellingPrice: 980,

    tax: 18,

    hsnCode: "90014000",

    stockQuantity: 35,

    minimumStockLevel: 30,

    warehouseLocation: "Noida Warehouse",

    supplierName: "Safe Vision Optics",

    status: "Inactive",

    description:
      "Impact-resistant lens material ideal for safety and sports eyewear.",

    notes:
      "Low stock. Reorder required.",

    createdOn: "2026-05-08",

    updatedDate: "2026-05-09",

    createdBy: "Admin",

    lastModifiedBy: "Inventory Team",
  },

  {
    id: "5",

    materialId: "MAT-1005",

    materialCode: "TITANIUM-001",

    materialName: "Titanium",

    applicableFor: "Frame",

    purchasePrice: 1200,

    sellingPrice: 1850,

    tax: 18,

    hsnCode: "90031100",

    stockQuantity: 90,

    minimumStockLevel: 20,

    warehouseLocation: "Hyderabad Warehouse",

    supplierName: "Titan Optics Ltd",

    status: "Active",

    description:
      "Ultra lightweight premium titanium material used in high-end eyewear frames.",

    notes:
      "Corrosion resistant and durable.",

    createdOn: "2026-05-07",

    updatedDate: "2026-05-08",

    createdBy: "Admin",

    lastModifiedBy: "Product Team",
  },
];
export const rimShapes = [
  {
    id: "1",

    rimShapeId: "RIM-1001",

    rimShapeCode: "ROUND-001",

    shapeName: "Round",

    shapeCategory: "Round",

    applicableFor: "Optical Frame",

    totalProducts: 120,

    status: "Active",

    description:
      "Classic circular frame shape suitable for both modern and vintage eyewear collections.",

    notes:
      "Popular among retro style frames.",

    createdOn: "2026-05-11",

    updatedDate: "2026-05-12",

    createdBy: "Admin",
  },

  {
    id: "2",

    rimShapeId: "RIM-1002",

    rimShapeCode: "SQUARE-001",

    shapeName: "Square",

    shapeCategory: "Square",

    applicableFor: "Sunglasses",

    totalProducts: 95,

    status: "Active",

    description:
      "Sharp square frame design ideal for bold and professional looks.",

    notes:
      "High demand in premium sunglasses category.",

    createdOn: "2026-05-10",

    updatedDate: "2026-05-11",

    createdBy: "Admin",
  },

  {
    id: "3",

    rimShapeId: "RIM-1003",

    rimShapeCode: "CATEYE-001",

    shapeName: "Cat Eye",

    shapeCategory: "Cat Eye",

    applicableFor: "RX-able",

    totalProducts: 45,

    status: "Inactive",

    description:
      "Stylish cat eye frame shape designed mainly for fashion eyewear collections.",

    notes:
      "Currently inactive due to seasonal collection update.",

    createdOn: "2026-05-09",

    updatedDate: "2026-05-10",

    createdBy: "Admin",
  },

  {
    id: "4",

    rimShapeId: "RIM-1004",

    rimShapeCode: "AVIATOR-001",

    shapeName: "Aviator",

    shapeCategory: "Aviator",

    applicableFor: "Sunglasses",

    totalProducts: 160,

    status: "Active",

    description:
      "Pilot inspired aviator shape widely used in premium sunglasses collections.",

    notes:
      "Best seller in men's sunglasses.",

    createdOn: "2026-05-08",

    updatedDate: "2026-05-09",

    createdBy: "Admin",
  },

  {
    id: "5",

    rimShapeId: "RIM-1005",

    rimShapeCode: "RECT-001",

    shapeName: "Rectangle",

    shapeCategory: "Rectangle",

    applicableFor: "Optical Frame",

    totalProducts: 140,

    status: "Active",

    description:
      "Modern rectangular frame shape preferred for office and daily wear eyewear.",

    notes:
      "Suitable for all age groups.",

    createdOn: "2026-05-07",

    updatedDate: "2026-05-08",

    createdBy: "Admin",
  },
];

export const frames = [
  {
    id: "1",

   
    frameId: "FRM-1001",
    brand: "RayBan",
    frameName: "RayBan Aviator Classic",
    modelNo: "RB-3025",

    
    categoryId: "CAT-1001",
    category: "Sunglasses",

   
    rimType: "Full Rim",
    rimShape: "Aviator",
    frameType: "Metal Frame",

   
    frameMaterial: "Metal",
    templeMaterial: "Metal",

    
    size: "58",
    dbl: "14",
    templeLength: "135",
    frameWidth: "142",
    lensWidth: "58",
    lensHeight: "50",

    // COLORS
    colourCode: "GOLD-BLACK",
    frameFrontColor: "Gold",
    templeColor: "Black",
    lensColor: "Green",

    // PRODUCT DETAILS
    gender: "Unisex",
    ageGroup: "Adult",
    styleType: "Fashion",
    frameWeight: "24 gm",

    // LENS SUPPORT
    lensTypeSupported: [
      "Single Vision",
      "Progressive",
      "Blue Cut",
    ],

    // INVENTORY
    skuCode: "RB-SG-1001",
    barcode: "8901452365478",
    stock: 15,
    lowStockLimit: 5,
    warehouseLocation: "Delhi Warehouse",

    // PRICING
    purchasePrice: 4500,
    srp: 7999,
    discountPrice: 7499,
    tax: 18,

    // LOCATION PRICING
    locationPricing:
      "Mumbai - 7999, Delhi - 8099",

    // STATUS
    status: "Active",
    featuredProduct: true,
    trendingProduct: true,

    // PRODUCT MEDIA
    thumbnailImage:
      "/images/frames/rayban-main.png",

    galleryImages: [
      "/images/frames/rayban-1.png",
      "/images/frames/rayban-2.png",
    ],

    // SEO
    slug: "rayban-aviator-classic",
    metaTitle:
      "RayBan Aviator Classic Sunglasses",
    metaDescription:
      "Premium RayBan aviator sunglasses.",

    // EXTRA DETAILS
    hsnCode: "90041000",
    launchSeason: "Summer 2026",
    countryOfOrigin: "Italy",
    warrantyPeriod: "1 Year",
    supplierName: "RayBan India",

    // DESCRIPTION
    description:
      "Premium lightweight aviator sunglasses.",

    features: [
      "UV Protection",
      "Lightweight",
      "Scratch Resistant",
    ],

    notes:
      "Best selling aviator frame collection.",

    // AUDIT DETAILS
    createdOn: "2026-05-11",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },

  {
    id: "2",

    frameId: "FRM-1002",
    brand: "Oakley",
    frameName: "Oakley Urban Flex",
    modelNo: "OK-1102",

    categoryId: "CAT-1001",
    category: "Optical Frame",

    rimType: "Half Rim",
    rimShape: "Rectangle",
    frameType: "Titanium Frame",

    frameMaterial: "Titanium",
    templeMaterial: "Titanium",

    size: "54",
    dbl: "17",
    templeLength: "140",
    frameWidth: "138",
    lensWidth: "54",
    lensHeight: "42",

    colourCode: "MATTE-BLUE",
    frameFrontColor: "Blue",
    templeColor: "Black",
    lensColor: "Transparent",

    gender: "Men",
    ageGroup: "Adult",
    styleType: "Professional",
    frameWeight: "20 gm",

    lensTypeSupported: [
      "Single Vision",
      "Blue Cut",
    ],

    skuCode: "OK-OF-1002",
    barcode: "8901452365490",
    stock: 4,
    lowStockLimit: 5,
    warehouseLocation: "Mumbai Warehouse",

    purchasePrice: 3500,
    srp: 6499,
    discountPrice: 5999,
    tax: 18,

    locationPricing:
      "Ahmedabad - 6499",

    status: "Active",
    featuredProduct: false,
    trendingProduct: true,

    thumbnailImage:
      "/images/frames/oakley-main.png",

    galleryImages: [
      "/images/frames/oakley-1.png",
      "/images/frames/oakley-2.png",
    ],

    slug: "oakley-urban-flex",
    metaTitle:
      "Oakley Urban Flex Optical Frame",

    metaDescription:
      "Modern titanium optical frame by Oakley.",

    hsnCode: "90049090",
    launchSeason: "Winter 2026",
    countryOfOrigin: "USA",
    warrantyPeriod: "2 Years",
    supplierName: "Oakley India",

    description:
      "Durable and lightweight titanium frame.",

    features: [
      "Flexible Hinges",
      "Lightweight",
      "Premium Finish",
    ],

    notes:
      "Low stock product.",

    createdOn: "2026-05-10",
    updatedDate: "2026-05-11",
    createdBy: "Admin",
  },

  {
    id: "3",

    frameId: "FRM-1003",
    brand: "Gucci",
    frameName: "Gucci Cat Eye Premium",
    modelNo: "GC-778",

    categoryId: "CAT-1001",
    category: "Sunglasses",

    rimType: "Full Rim",
    rimShape: "Cat Eye",
    frameType: "Acetate Frame",

    frameMaterial: "Acetate",
    templeMaterial: "Acetate",

    size: "56",
    dbl: "16",
    templeLength: "142",
    frameWidth: "145",
    lensWidth: "56",
    lensHeight: "48",

    colourCode: "BLACK-GOLD",
    frameFrontColor: "Black",
    templeColor: "Gold",
    lensColor: "Grey",

    gender: "Women",
    ageGroup: "Adult",
    styleType: "Luxury",
    frameWeight: "28 gm",

    lensTypeSupported: [
      "Single Vision",
      "Progressive",
    ],

    skuCode: "GC-SG-1004",
    barcode: "8901452365514",
    stock: 9,
    lowStockLimit: 3,
    warehouseLocation: "Bangalore Warehouse",

    purchasePrice: 6500,
    srp: 9999,
    discountPrice: 9499,
    tax: 18,

    locationPricing:
      "Mumbai - 9999",

    status: "Active",
    featuredProduct: true,
    trendingProduct: true,

    thumbnailImage:
      "/images/frames/gucci-main.png",

    galleryImages: [
      "/images/frames/gucci-1.png",
      "/images/frames/gucci-2.png",
    ],

    slug: "gucci-cat-eye-premium",
    metaTitle:
      "Gucci Cat Eye Premium Sunglasses",

    metaDescription:
      "Luxury Gucci cat eye sunglasses.",

    hsnCode: "90041000",
    launchSeason: "Autumn 2026",
    countryOfOrigin: "Italy",
    warrantyPeriod: "1 Year",
    supplierName: "Gucci India",

    description:
      "Luxury cat eye sunglasses with premium finish.",

    features: [
      "Luxury Design",
      "UV Protection",
      "Premium Acetate",
    ],

    notes:
      "Premium women collection.",

    createdOn: "2026-05-08",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },

  {
    id: "4",

    frameId: "FRM-1004",
    brand: "Titan Eye+",
    frameName: "Titan Everyday Comfort",
    modelNo: "TE-210",

    categoryId: "CAT-1001",
    category: "Optical Frame",

    rimType: "Full Rim",
    rimShape: "Rectangle",
    frameType: "Plastic Frame",

    frameMaterial: "Plastic",
    templeMaterial: "Plastic",

    size: "53",
    dbl: "18",
    templeLength: "136",
    frameWidth: "136",
    lensWidth: "53",
    lensHeight: "40",

    colourCode: "BLACK-RED",
    frameFrontColor: "Black",
    templeColor: "Red",
    lensColor: "Transparent",

    gender: "Unisex",
    ageGroup: "Adult",
    styleType: "Casual",
    frameWeight: "22 gm",

    lensTypeSupported: [
      "Single Vision",
      "Blue Cut",
    ],

    skuCode: "TE-OF-1006",
    barcode: "8901452365538",
    stock: 22,
    lowStockLimit: 8,
    warehouseLocation: "Surat Warehouse",

    purchasePrice: 1800,
    srp: 3499,
    discountPrice: 3299,
    tax: 12,

    locationPricing:
      "Surat - 3499",

    status: "Active",
    featuredProduct: false,
    trendingProduct: false,

    thumbnailImage:
      "/images/frames/titan-main.png",

    galleryImages: [
      "/images/frames/titan-1.png",
      "/images/frames/titan-2.png",
    ],

    slug: "titan-everyday-comfort",
    metaTitle:
      "Titan Everyday Comfort Optical Frame",

    metaDescription:
      "Comfortable everyday optical frame by Titan.",

    hsnCode: "90049090",
    launchSeason: "Winter 2025",
    countryOfOrigin: "India",
    warrantyPeriod: "6 Months",
    supplierName: "Titan Eye+",

    description:
      "Affordable and durable daily wear optical frame.",

    features: [
      "Lightweight",
      "Comfort Fit",
      "Budget Friendly",
    ],

    notes:
      "High stock available.",

    createdOn: "2026-05-06",
    updatedDate: "2026-05-07",
    createdBy: "Admin",
  },
];
export const contactLenses = [
  {
    id: "1",

    lensId: "LENS-1001",
    productName: "Acuvue Oasys",

    productCode: "CL-1001",

    lensName: "Acuvue Oasys",

    brand: "Johnson & Johnson",

    productType: "Rx",

    powerType: "Spherical",

    modality: "Monthly",

    material: "Silicone Hydrogel",

    baseCurve: "8.4",

    diameter: "14.2",

    sphericalPower: "-2.50",

    cylindricalPower: "-0.75",

    axis: "180",

    additionalPower: "+1.50",

    color: "Transparent",

    hsnCode: "90013000",

    tax: 18,

    mrp: 2999,

    sellingPrice: 2499,

    discountPrice: 2299,

    skuCode: "SKU-CL-1001",

    barcode: "8901452367001",

    stock: 120,

    warehouseLocation: "Delhi Warehouse",

    thumbnailImage:
      "/images/contactlens/lens1.jpg",

    status: "Active",

    description:
      "Premium silicone hydrogel contact lens with superior comfort and moisture retention for extended daily wear.",

    notes:
      "Best selling monthly disposable contact lens.",

    createdOn: "2026-05-11",

    updatedDate: "2026-05-12",

    createdBy: "Admin",
  },

  {
    id: "2",

    lensId: "LENS-1002",
    productName: "Acuvue Oasys",

    productCode: "CL-1002",

    lensName: "Bausch Lomb Ultra",

    brand: "Bausch & Lomb",

    productType: "Rx",

    powerType: "Astigmatism",

    modality: "Daily",

    material: "Hydrogel",

    baseCurve: "8.6",

    diameter: "14.0",

    sphericalPower: "-1.75",

    cylindricalPower: "-1.25",

    axis: "170",

    additionalPower: "+2.00",

    color: "Light Blue",

    hsnCode: "90013000",

    tax: 18,

    mrp: 3699,

    sellingPrice: 3299,

    discountPrice: 3099,

    skuCode: "SKU-CL-1002",

    barcode: "8901452367002",

    stock: 60,

    warehouseLocation: "Mumbai Warehouse",

    thumbnailImage:
      "/images/contactlens/lens2.jpg",

    status: "Active",

    description:
      "Daily disposable toric contact lens designed for sharp and stable vision correction.",

    notes:
      "Recommended for dry eye users.",

    createdOn: "2026-05-10",

    updatedDate: "2026-05-11",

    createdBy: "Admin",
  },

  {
    id: "3",

    lensId: "LENS-1003",
    productName: "FreshLook Color",
    productCode: "CL-1003",

    lensName: "FreshLook Color",

    brand: "Alcon",

    productType: "Cosmetic",

    powerType: "Progressive",

    modality: "Quarterly",

    material: "Hydrogel",

    baseCurve: "8.5",

    diameter: "14.1",

    sphericalPower: "-3.00",

    cylindricalPower: "-0.50",

    axis: "160",

    additionalPower: "+1.25",

    color: "Hazel",

    hsnCode: "90013000",

    tax: 12,

    mrp: 2199,

    sellingPrice: 1899,

    discountPrice: 1699,

    skuCode: "SKU-CL-1003",

    barcode: "8901452367003",

    stock: 0,

    warehouseLocation: "Bangalore Warehouse",

    thumbnailImage:
      "/images/contactlens/lens3.jpg",

    status: "Inactive",

    description:
      "Colored cosmetic contact lens that enhances natural eye appearance with comfortable wear.",

    notes:
      "Currently out of stock.",

    createdOn: "2026-05-09",

    updatedDate: "2026-05-10",

    createdBy: "Admin",
  },

  {
    id: "4",

    lensId: "LENS-1004",
    productName: "Air Optix Aqua",
    productCode: "CL-1004",

    lensName: "Air Optix Aqua",

    brand: "Alcon",

    productType: "Rx",

    powerType: "Spherical",

    modality: "BiWeekly",

    material: "Silicone Hydrogel",

    baseCurve: "8.6",

    diameter: "14.2",

    sphericalPower: "-2.00",

    cylindricalPower: "-0.25",

    axis: "175",

    additionalPower: "+1.00",

    color: "Transparent",

    hsnCode: "90013000",

    tax: 18,

    mrp: 2899,

    sellingPrice: 2599,

    discountPrice: 2399,

    skuCode: "SKU-CL-1004",

    barcode: "8901452367004",

    stock: 85,

    warehouseLocation: "Hyderabad Warehouse",

    thumbnailImage:
      "/images/contactlens/lens4.jpg",

    status: "Active",

    description:
      "Breathable silicone hydrogel lens designed for exceptional all-day comfort and clarity.",

    notes:
      "Popular bi-weekly replacement lens.",

    createdOn: "2026-05-08",

    updatedDate: "2026-05-09",

    createdBy: "Admin",
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

export const users = [
  {
    id: "USR-001",
    userId: "1001",
    fullName: "Alex Thompson",
    username: "athompson_admin",
    email: "alex.t@company.com",
    phone: "+1 (555) 123-4567",
    role: "Administrator",
    department: "IT Operations",
    status: "Active",
    password: "hashed_password_123",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    permissions: ["all", "manage_users", "view_reports"],
    accessLevel: "SuperUser",
    address: "123 Tech Lane",
    city: "New York",
    state: "NY",
    country: "USA",
    totalOrdersManaged: 145,
    assignedCustomers: 12,
    lastLogin: "2026-05-12T09:30:00Z",
    lastActivity: "2026-05-13T10:15:00Z",
    loginStatus: "Online",
    twoFactorEnabled: true,
    notes: "Primary system administrator for the Northeast region.",
    createdOn: "2024-01-15T08:00:00Z",
    updatedDate: "2026-01-20T14:30:00Z",
    createdBy: "System_Init"
  },
  {
    id: "USR-002",
    userId: "1002",
    fullName: "Sarah Chen",
    username: "schen_procure",
    email: "s.chen@company.com",
    phone: "+1 (555) 987-6543",
    role: "Procurement Manager",
    department: "Supply Chain",
    status: "Active",
    password: "hashed_password_456",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    permissions: ["view_orders", "approve_orders", "manage_vendors"],
    accessLevel: "Manager",
    address: "456 Logistic Way",
    city: "San Francisco",
    state: "CA",
    country: "USA",
    totalOrdersManaged: 892,
    assignedCustomers: 5,
    lastLogin: "2026-05-13T08:15:00Z",
    lastActivity: "2026-05-13T12:45:00Z",
    loginStatus: "Online",
    twoFactorEnabled: true,
    notes: "Authorized for high-value purchase approvals.",
    createdOn: "2024-03-20T10:00:00Z",
    updatedDate: "2025-12-01T09:00:00Z",
    createdBy: "USR-001"
  },
  {
    id: "USR-003",
    userId: "1003",
    fullName: "Michael Rodriguez",
    username: "mrod_sales",
    email: "m.rodriguez@company.com",
    phone: "+1 (555) 444-5566",
    role: "Sales Executive",
    department: "Sales",
    status: "Active",
    password: "hashed_password_789",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    permissions: ["view_customers", "create_orders", "edit_own_profile"],
    accessLevel: "Staff",
    address: "789 Sales Blvd",
    city: "Austin",
    state: "TX",
    country: "USA",
    totalOrdersManaged: 312,
    assignedCustomers: 45,
    lastLogin: "2026-05-11T16:45:00Z",
    lastActivity: "2026-05-12T11:20:00Z",
    loginStatus: "Offline",
    twoFactorEnabled: false,
    notes: "Top performer for Q1 2026.",
    createdOn: "2024-06-10T11:30:00Z",
    updatedDate: "2026-02-15T16:20:00Z",
    createdBy: "USR-001"
  },
  {
    id: "USR-004",
    userId: "1004",
    fullName: "Emily Blunt",
    username: "eblunt_fin",
    email: "e.blunt@company.com",
    phone: "+44 20 7946 0123",
    role: "Finance Auditor",
    department: "Finance",
    status: "Inactive",
    password: "hashed_password_abc",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    permissions: ["view_reports", "view_invoices", "export_data"],
    accessLevel: "Auditor",
    address: "10 Baker Street",
    city: "London",
    state: "Greater London",
    country: "UK",
    totalOrdersManaged: 0,
    assignedCustomers: 0,
    lastLogin: "2026-04-30T11:00:00Z",
    lastActivity: "2026-04-30T13:00:00Z",
    loginStatus: "Offline",
    twoFactorEnabled: true,
    notes: "On maternity leave until September 2026.",
    createdOn: "2023-11-05T09:00:00Z",
    updatedDate: "2026-04-30T13:00:00Z",
    createdBy: "USR-001"
  },
  {
    id: "USR-005",
    userId: "1005",
    fullName: "David Park",
    username: "dpark_whse",
    email: "d.park@company.com",
    phone: "+82 2-312-4567",
    role: "Warehouse Supervisor",
    department: "Logistics",
    status: "Active",
    password: "hashed_password_def",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    permissions: ["update_inventory", "view_shipments", "manage_stock"],
    accessLevel: "Staff",
    address: "22 Gangnam-daero",
    city: "Seoul",
    state: "Seoul",
    country: "South Korea",
    totalOrdersManaged: 1205,
    assignedCustomers: 0,
    lastLogin: "2026-05-13T07:00:00Z",
    lastActivity: "2026-05-13T13:00:00Z",
    loginStatus: "Online",
    twoFactorEnabled: false,
    notes: "Managing the night shift operations.",
    createdOn: "2025-02-12T06:00:00Z",
    updatedDate: "2025-02-12T06:00:00Z",
    createdBy: "USR-002"
  },
  {
    id: "USR-006",
    userId: "1006",
    fullName: "Priya Sharma",
    username: "psharma_hr",
    email: "p.sharma@company.com",
    phone: "+91 98765 43210",
    role: "HR Generalist",
    department: "Human Resources",
    status: "Suspended",
    password: "hashed_password_ghi",
    profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    permissions: ["view_employee_basic", "manage_payroll"],
    accessLevel: "Restricted",
    address: "Level 5, Sky Tower",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    totalOrdersManaged: 0,
    assignedCustomers: 0,
    lastLogin: "2026-05-01T14:20:00Z",
    lastActivity: "2026-05-01T15:00:00Z",
    loginStatus: "Offline",
    twoFactorEnabled: true,
    notes: "Account suspended pending security review after multiple failed login attempts.",
    createdOn: "2025-04-01T10:45:00Z",
    updatedDate: "2026-05-02T09:15:00Z",
    createdBy: "USR-001"
  }
];
export const roles = [

  {
    id: "1",

    roleName:
      "Admin",

    description:
      "Full system access with all permissions",

    permissions: [

      "User Management",
      "Product Management",
      "Inventory Control",
      "Billing Access",
      "Reports",
      "Settings",
    ],

    totalUsers: 2,

    status:
      "Active",

    createdOn:
      "2026-05-12",
  },

  {
    id: "2",

    roleName:
      "Manager",

    description:
      "Manage products, inventory and operations",

    permissions: [

      "Product Management",
      "Inventory Control",
      "Sales Monitoring",
      "Reports",
    ],

    totalUsers: 3,

    status:
      "Active",

    createdOn:
      "2026-05-10",
  },

  {
    id: "3",

    roleName:
      "Sales",

    description:
      "Sales and customer billing access",

    permissions: [

      "Billing Access",
      "Customer Management",
      "Product View",
    ],

    totalUsers: 5,

    status:
      "Inactive",

    createdOn:
      "2026-05-09",
  },

  {
    id: "4",

    roleName:
      "Inventory Staff",

    description:
      "Manage stock and warehouse operations",

    permissions: [

      "Inventory Control",
      "Stock Updates",
      "Product View",
    ],

    totalUsers: 2,

    status:
      "Active",

    createdOn:
      "2026-05-08",
  },

];

export const customers = [
  {
    id: "1",
    customerId: "CUS-1001",
    customerName: "Rahul Sharma",
    fullName: "Rahul Sharma",
    customerType: "B2C",

    status: "Active",

    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    alternatePhone: "+91 9123456780",

    addressLine1: "22 MG Road",
    addressLine2: "Near Metro Station",

    address: "22 MG Road, Near Metro Station",
    city: "Delhi",
    state: "Delhi",
    country: "India",
    postalCode: "110001",

    salesPerson: "Amit Verma",
    customerGroup: "Premium",

    totalOrders: 18,
    totalRevenue: 245000,
    lastOrderDate: "2026-05-12",

    paymentMethod: "UPI",
    outstandingAmount: 1200,
    creditLimit: 50000,
    gstNumber: "07ABCDE1234F1Z5",

    lastLogin: "2026-05-12",
    lastPurchase: "2026-05-11",

    notes: "Premium repeat customer.",

    createdOn: "2026-05-01",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },

  {
    id: "2",
    customerId: "CUS-1002",
    customerName: "Riya Patel",
    fullName: "Riya Patel",
    customerType: "B2B",

    status: "Active",

    email: "riya@gmail.com",
    phone: "+91 9988776655",
    alternatePhone: "+91 9876501234",

    addressLine1: "Andheri East",
    addressLine2: "Business Park",

    address: "Andheri East, Business Park",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    postalCode: "400069",

    salesPerson: "Suresh",
    customerGroup: "Wholesale",

    totalOrders: 35,
    totalRevenue: 680000,
    lastOrderDate: "2026-05-11",

    paymentMethod: "Bank Transfer",
    outstandingAmount: 5400,
    creditLimit: 120000,
    gstNumber: "27ABCDE1234F1Z5",

    lastLogin: "2026-05-11",
    lastPurchase: "2026-05-10",

    notes: "Wholesale customer account.",

    createdOn: "2026-05-02",
    updatedDate: "2026-05-11",
    createdBy: "Admin",
  },

  {
    id: "3",
    customerId: "CUS-1003",
    customerName: "Arjun Verma",
    fullName: "Arjun Verma",
    customerType: "B2C",

    status: "Inactive",

    email: "arjun@gmail.com",
    phone: "+91 9090909090",
    alternatePhone: "+91 9898989898",

    addressLine1: "Sector 18",
    addressLine2: "Near Mall",

    address: "Sector 18, Near Mall",
    city: "Noida",
    state: "Uttar Pradesh",
    country: "India",
    postalCode: "201301",

    salesPerson: "Rohit",
    customerGroup: "Regular",

    totalOrders: 8,
    totalRevenue: 98000,
    lastOrderDate: "2026-05-09",

    paymentMethod: "Cash",
    outstandingAmount: 0,
    creditLimit: 20000,
    gstNumber: "09ABCDE1234F1Z5",

    lastLogin: "2026-05-09",
    lastPurchase: "2026-05-08",

    notes: "Inactive customer profile.",

    createdOn: "2026-05-03",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },

  {
    id: "4",
    customerId: "CUS-1004",
    customerName: "Sneha Kapoor",
    fullName: "Sneha Kapoor",
    customerType: "B2C",

    status: "Active",

    email: "sneha@gmail.com",
    phone: "+91 8181818181",
    alternatePhone: "+91 8000000001",

    addressLine1: "MG Road",
    addressLine2: "Central Plaza",

    address: "MG Road, Central Plaza",
    city: "Bangalore",
    state: "Karnataka",
    country: "India",
    postalCode: "560001",

    salesPerson: "Vikas",
    customerGroup: "Premium",

    totalOrders: 24,
    totalRevenue: 320000,
    lastOrderDate: "2026-05-12",

    paymentMethod: "Card",
    outstandingAmount: 2500,
    creditLimit: 65000,
    gstNumber: "29ABCDE1234F1Z5",

    lastLogin: "2026-05-12",
    lastPurchase: "2026-05-11",

    notes: "Frequent buyer.",

    createdOn: "2026-05-04",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },

  {
    id: "5",
    customerId: "CUS-1005",
    customerName: "Karan Mehta",
    fullName: "Karan Mehta",
    customerType: "B2B",

    status: "Active",

    email: "karan@gmail.com",
    phone: "+91 7878787878",
    alternatePhone: "+91 9000000001",

    addressLine1: "Park Street",
    addressLine2: "Office Complex",

    address: "Park Street, Office Complex",
    city: "Kolkata",
    state: "West Bengal",
    country: "India",
    postalCode: "700016",

    salesPerson: "Anjali",
    customerGroup: "Distributor",

    totalOrders: 42,
    totalRevenue: 890000,
    lastOrderDate: "2026-05-10",

    paymentMethod: "Bank Transfer",
    outstandingAmount: 7800,
    creditLimit: 150000,
    gstNumber: "19ABCDE1234F1Z5",

    lastLogin: "2026-05-10",
    lastPurchase: "2026-05-09",

    notes: "Distributor customer.",

    createdOn: "2026-05-05",
    updatedDate: "2026-05-10",
    createdBy: "Admin",
  },

  {
    id: "6",
    customerId: "CUS-1006",
    customerName: "Priya Nair",
    fullName: "Priya Nair",
    customerType: "B2C",

    status: "Active",

    email: "priya@gmail.com",
    phone: "+91 9998887776",
    alternatePhone: "+91 9111111111",

    addressLine1: "Marine Drive",
    addressLine2: "Sea View Apartments",

    address: "Marine Drive, Sea View Apartments",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    postalCode: "400002",

    salesPerson: "Deepak",
    customerGroup: "Regular",

    totalOrders: 16,
    totalRevenue: 185000,
    lastOrderDate: "2026-05-08",

    paymentMethod: "UPI",
    outstandingAmount: 0,
    creditLimit: 30000,
    gstNumber: "27ABCDE1234F1Z5",

    lastLogin: "2026-05-08",
    lastPurchase: "2026-05-07",

    notes: "Regular customer account.",

    createdOn: "2026-05-06",
    updatedDate: "2026-05-08",
    createdBy: "Admin",
  },

  {
    id: "7",
    customerId: "CUS-1007",
    customerName: "Aditya Singh",
    fullName: "Aditya Singh",
    customerType: "B2B",

    status: "Inactive",

    email: "aditya@gmail.com",
    phone: "+91 9098765432",
    alternatePhone: "+91 9555555555",

    addressLine1: "Banjara Hills",
    addressLine2: "Corporate Hub",

    address: "Banjara Hills, Corporate Hub",
    city: "Hyderabad",
    state: "Telangana",
    country: "India",
    postalCode: "500034",

    salesPerson: "Rahul",
    customerGroup: "Corporate",

    totalOrders: 27,
    totalRevenue: 540000,
    lastOrderDate: "2026-05-06",

    paymentMethod: "Cheque",
    outstandingAmount: 12000,
    creditLimit: 200000,
    gstNumber: "36ABCDE1234F1Z5",

    lastLogin: "2026-05-06",
    lastPurchase: "2026-05-05",

    notes: "Corporate inactive account.",

    createdOn: "2026-05-07",
    updatedDate: "2026-05-06",
    createdBy: "Admin",
  },

  {
    id: "8",
    customerId: "CUS-1008",
    customerName: "Neha Joshi",
    fullName: "Neha Joshi",
    customerType: "B2C",

    status: "Active",

    email: "neha@gmail.com",
    phone: "+91 9898989898",
    alternatePhone: "+91 9444444444",

    addressLine1: "Civil Lines",
    addressLine2: "Near Bus Stand",

    address: "Civil Lines, Near Bus Stand",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India",
    postalCode: "302001",

    salesPerson: "Sonia",
    customerGroup: "Premium",

    totalOrders: 20,
    totalRevenue: 265000,
    lastOrderDate: "2026-05-12",

    paymentMethod: "Card",
    outstandingAmount: 3500,
    creditLimit: 55000,
    gstNumber: "08ABCDE1234F1Z5",

    lastLogin: "2026-05-12",
    lastPurchase: "2026-05-11",

    notes: "Premium eyewear customer.",

    createdOn: "2026-05-08",
    updatedDate: "2026-05-12",
    createdBy: "Admin",
  },
];

export const invoices = [
  {
    id: "1",
    invoiceId: "INV-1001",
    invoiceNo: "INV-2026-001",
    orderNo: "ORD-1001",
    customerName: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    billingAddress: "22 MG Road, Near Metro Station, Delhi, India - 110001",
    shippingAddress: "22 MG Road, Near Metro Station, Delhi, India - 110001",
    invoiceDate: "2026-05-01",
    dueDate: "2026-05-10",
    invoiceStatus: "Sent",
    paymentStatus: "Paid",
    productName: "RayBan Optical Frame",
    productType: "Frame",
    category: "Eyewear", // Added category
    quantity: 2,
    unitPrice: 8500,
    tax: 18,
    discount: 1000,
    lineTotal: 17000,
    subtotal: 17000,
    taxAmount: 3060,
    discountAmount: 1000,
    shippingCharge: 200,
    grandTotal: 19260,
    paidAmount: 19260,
    balanceDue: 0,
    paymentMethod: "UPI",
    transactionId: "TXN-908776",
    notes: "Invoice paid successfully.",
    createdOn: "2026-05-01",
    updatedDate: "2026-05-02",
    createdBy: "Admin",
  },
  {
    id: "2",
    invoiceId: "INV-1002",
    invoiceNo: "INV-2026-002",
    orderNo: "ORD-1002",
    customerName: "Riya Patel",
    email: "riya@gmail.com",
    phone: "+91 9988776655",
    billingAddress: "Andheri East, Business Park, Mumbai, India - 400069",
    shippingAddress: "Andheri East, Business Park, Mumbai, India - 400069",
    invoiceDate: "2026-05-02",
    dueDate: "2026-05-12",
    invoiceStatus: "Sent",
    paymentStatus: "Partial",
    productName: "Acuvue Contact Lens",
    productType: "Contact Lens",
    category: "Contacts", // Added category
    quantity: 5,
    unitPrice: 2500,
    tax: 12,
    discount: 500,
    lineTotal: 12500,
    subtotal: 12500,
    taxAmount: 1500,
    discountAmount: 500,
    shippingCharge: 150,
    grandTotal: 13650,
    paidAmount: 7000,
    balanceDue: 6650,
    paymentMethod: "Bank Transfer",
    transactionId: "TXN-887766",
    notes: "Partial payment received.",
    createdOn: "2026-05-02",
    updatedDate: "2026-05-03",
    createdBy: "Admin",
  },
  {
    id: "3",
    invoiceId: "INV-1003",
    invoiceNo: "INV-2026-003",
    orderNo: "ORD-1003",
    customerName: "Arjun Verma",
    email: "arjun@gmail.com",
    phone: "+91 9090909090",
    billingAddress: "Sector 18, Near Mall, Noida, India - 201301",
    shippingAddress: "Sector 18, Near Mall, Noida, India - 201301",
    invoiceDate: "2026-05-03",
    dueDate: "2026-05-15",
    invoiceStatus: "Draft",
    paymentStatus: "Pending",
    productName: "Fastrack Sunglasses",
    productType: "Accessories",
    category: "Fashion", // Added category
    quantity: 3,
    unitPrice: 4200,
    tax: 18,
    discount: 0,
    lineTotal: 12600,
    subtotal: 12600,
    taxAmount: 2268,
    discountAmount: 0,
    shippingCharge: 200,
    grandTotal: 15068,
    paidAmount: 0,
    balanceDue: 15068,
    paymentMethod: "Cash",
    transactionId: "",
    notes: "Waiting for customer confirmation.",
    createdOn: "2026-05-03",
    updatedDate: "2026-05-03",
    createdBy: "Admin",
  },
  {
    id: "4",
    invoiceId: "INV-1004",
    invoiceNo: "INV-2026-004",
    orderNo: "ORD-1004",
    customerName: "Sneha Kapoor",
    email: "sneha@gmail.com",
    phone: "+91 8181818181",
    billingAddress: "MG Road, Central Plaza, Bangalore, India - 560001",
    shippingAddress: "MG Road, Central Plaza, Bangalore, India - 560001",
    invoiceDate: "2026-05-04",
    dueDate: "2026-05-14",
    invoiceStatus: "Sent",
    paymentStatus: "Paid",
    productName: "Oakley Premium Frame",
    productType: "Frame",
    category: "Premium", // Added category
    quantity: 1,
    unitPrice: 18000,
    tax: 18,
    discount: 1500,
    lineTotal: 18000,
    subtotal: 18000,
    taxAmount: 3240,
    discountAmount: 1500,
    shippingCharge: 300,
    grandTotal: 20040,
    paidAmount: 20040,
    balanceDue: 0,
    paymentMethod: "Card",
    transactionId: "TXN-667788",
    notes: "Premium customer order.",
    createdOn: "2026-05-04",
    updatedDate: "2026-05-05",
    createdBy: "Admin",
  },
  {
    id: "5",
    invoiceId: "INV-1005",
    invoiceNo: "INV-2026-005",
    orderNo: "ORD-1005",
    customerName: "Karan Mehta",
    email: "karan@gmail.com",
    phone: "+91 7878787878",
    billingAddress: "Park Street, Office Complex, Kolkata, India - 700016",
    shippingAddress: "Park Street, Office Complex, Kolkata, India - 700016",
    invoiceDate: "2026-05-05",
    dueDate: "2026-05-16",
    invoiceStatus: "Cancelled",
    paymentStatus: "Overdue",
    productName: "Essilor Optical Lens",
    productType: "Optical Lens",
    category: "Medical", // Added category
    quantity: 4,
    unitPrice: 6200,
    tax: 18,
    discount: 1000,
    lineTotal: 24800,
    subtotal: 24800,
    taxAmount: 4464,
    discountAmount: 1000,
    shippingCharge: 250,
    grandTotal: 28514,
    paidAmount: 5000,
    balanceDue: 23514,
    paymentMethod: "Cheque",
    transactionId: "TXN-554433",
    notes: "Invoice overdue and cancelled.",
    createdOn: "2026-05-05",
    updatedDate: "2026-05-06",
    createdBy: "Admin",
  },
  {
    id: "6",
    invoiceId: "INV-1006",
    invoiceNo: "INV-2026-006",
    orderNo: "ORD-1006",
    customerName: "Priya Nair",
    email: "priya@gmail.com",
    phone: "+91 9998887776",
    billingAddress: "Marine Drive, Sea View Apartments, Mumbai, India - 400002",
    shippingAddress: "Marine Drive, Sea View Apartments, Mumbai, India - 400002",
    invoiceDate: "2026-05-06",
    dueDate: "2026-05-18",
    invoiceStatus: "Sent",
    paymentStatus: "Paid",
    productName: "Zeiss Lens Package",
    productType: "Optical Lens",
    category: "Medical", // Added category
    quantity: 2,
    unitPrice: 9500,
    tax: 18,
    discount: 1200,
    lineTotal: 19000,
    subtotal: 19000,
    taxAmount: 3420,
    discountAmount: 1200,
    shippingCharge: 250,
    grandTotal: 21470,
    paidAmount: 21470,
    balanceDue: 0,
    paymentMethod: "UPI",
    transactionId: "TXN-998877",
    notes: "Completed invoice payment.",
    createdOn: "2026-05-06",
    updatedDate: "2026-05-07",
    createdBy: "Admin",
  },
];
export const purchaseOrders = [
  {
    id: "1",
    purchaseId: "PUR-1001",
    purchaseNo: "PO-2026-001",

    supplierInvoiceNo: "SUP-INV-001",

    vendorName: "Vision Optical Suppliers",
    supplierName: "Vision Optical Suppliers",

    email: "visionoptical@gmail.com",
    phone: "+91 9876543210",
    mobile: "+91 9876543210",

    gstNumber: "07ABCDE1234F1Z5",

    billingAddress:
      "22 MG Road, Delhi, India - 110001",

    poDate: "2026-05-01",
    purchaseDate: "2026-05-01",

    dueDate: "2026-05-10",

    purchaseStatus: "Received",
    status: "Received",

    paymentStatus: "Paid",

    referenceNo: "REF-1001",

    productName: "RayBan Optical Frame",
    productType: "Frame",

    brand: "RayBan",

    selectProductDetails:
      "Premium optical frame",

    barcode: "RB2026001",

    subtopic: "Premium Eyewear",

    quantity: 20,
    totalQty: 20,

    unitCost: 3500,

    tax: 18,
    discount: 1000,

    lineTotal: 70000,

    subtotal: 70000,
    taxAmount: 12600,
    discountAmount: 1000,
    shippingCharge: 500,
    grandTotal: 82100,

    paidAmount: 82100,
    balanceDue: 0,

    paymentMethod: "Bank Transfer",
    transactionId: "TXN-887766",

    warehouseLocation:
      "Delhi Warehouse",

    receivedQuantity: 20,
    pendingQuantity: 0,

    receivedDate: "2026-05-03",

    notes:
      "Purchase order received successfully.",

    createdOn: "2026-05-01",
    updatedDate: "2026-05-03",
    createdBy: "Admin",
  },

  {
    id: "2",
    purchaseId: "PUR-1002",
    purchaseNo: "PO-2026-002",

    supplierInvoiceNo: "SUP-INV-002",

    vendorName: "Elite Lens Traders",
    supplierName: "Elite Lens Traders",

    email: "elitelens@gmail.com",
    phone: "+91 9988776655",
    mobile: "+91 9988776655",

    gstNumber: "27ABCDE1234F1Z5",

    billingAddress:
      "Andheri East, Mumbai, India - 400069",

    poDate: "2026-05-02",
    purchaseDate: "2026-05-02",

    dueDate: "2026-05-12",

    purchaseStatus: "Ordered",
    status: "Ordered",

    paymentStatus: "Partial",

    referenceNo: "REF-1002",

    productName: "Essilor Lens",
    productType: "Optical Lens",

    brand: "Essilor",

    selectProductDetails:
      "Anti glare optical lens",

    barcode: "EL2026002",

    subtopic: "Lens Category",

    quantity: 50,
    totalQty: 50,

    unitCost: 1800,

    tax: 12,
    discount: 2000,

    lineTotal: 90000,

    subtotal: 90000,
    taxAmount: 10800,
    discountAmount: 2000,
    shippingCharge: 700,
    grandTotal: 99500,

    paidAmount: 45000,
    balanceDue: 54500,

    paymentMethod: "Cheque",
    transactionId: "TXN-554433",

    warehouseLocation:
      "Mumbai Warehouse",

    receivedQuantity: 30,
    pendingQuantity: 20,

    receivedDate: "2026-05-05",

    notes:
      "Remaining quantity pending.",

    createdOn: "2026-05-02",
    updatedDate: "2026-05-05",
    createdBy: "Admin",
  },

  {
    id: "3",
    purchaseId: "PUR-1003",
    purchaseNo: "PO-2026-003",

    supplierInvoiceNo: "SUP-INV-003",

    vendorName: "Fashion Accessories Hub",
    supplierName: "Fashion Accessories Hub",

    email: "fashionhub@gmail.com",
    phone: "+91 9090909090",
    mobile: "+91 9090909090",

    gstNumber: "09ABCDE1234F1Z5",

    billingAddress:
      "Sector 18, Noida, India - 201301",

    poDate: "2026-05-03",
    purchaseDate: "2026-05-03",

    dueDate: "2026-05-15",

    purchaseStatus: "Draft",
    status: "Draft",

    paymentStatus: "Pending",

    referenceNo: "REF-1003",

    productName: "Fastrack Sunglasses",
    productType: "Accessories",

    brand: "Fastrack",

    selectProductDetails:
      "Stylish sunglasses collection",

    barcode: "FS2026003",

    subtopic: "Accessories",

    quantity: 35,
    totalQty: 35,

    unitCost: 1200,

    tax: 18,
    discount: 0,

    lineTotal: 42000,

    subtotal: 42000,
    taxAmount: 7560,
    discountAmount: 0,
    shippingCharge: 300,
    grandTotal: 49860,

    paidAmount: 0,
    balanceDue: 49860,

    paymentMethod: "Cash",
    transactionId: "",

    warehouseLocation:
      "Noida Warehouse",

    receivedQuantity: 0,
    pendingQuantity: 35,

    receivedDate: "",

    notes:
      "Waiting for supplier confirmation.",

    createdOn: "2026-05-03",
    updatedDate: "2026-05-03",
    createdBy: "Admin",
  },

  {
    id: "4",
    purchaseId: "PUR-1004",
    purchaseNo: "PO-2026-004",

    supplierInvoiceNo: "SUP-INV-004",

    vendorName: "Luxury Eyewear Pvt Ltd",
    supplierName: "Luxury Eyewear Pvt Ltd",

    email: "luxuryeyewear@gmail.com",
    phone: "+91 8181818181",
    mobile: "+91 8181818181",

    gstNumber: "29ABCDE1234F1Z5",

    billingAddress:
      "MG Road, Bangalore, India - 560001",

    poDate: "2026-05-04",
    purchaseDate: "2026-05-04",

    dueDate: "2026-05-18",

    purchaseStatus: "Received",
    status: "Received",

    paymentStatus: "Paid",

    referenceNo: "REF-1004",

    productName: "Oakley Premium Frame",
    productType: "Frame",

    brand: "Oakley",

    selectProductDetails:
      "Luxury imported frame",

    barcode: "OK2026004",

    subtopic: "Luxury Collection",

    quantity: 15,
    totalQty: 15,

    unitCost: 7200,

    tax: 18,
    discount: 3000,

    lineTotal: 108000,

    subtotal: 108000,
    taxAmount: 19440,
    discountAmount: 3000,
    shippingCharge: 800,
    grandTotal: 125240,

    paidAmount: 125240,
    balanceDue: 0,

    paymentMethod: "UPI",
    transactionId: "TXN-778899",

    warehouseLocation:
      "Bangalore Warehouse",

    receivedQuantity: 15,
    pendingQuantity: 0,

    receivedDate: "2026-05-06",

    notes:
      "Premium imported order completed.",

    createdOn: "2026-05-04",
    updatedDate: "2026-05-06",
    createdBy: "Admin",
  },

  {
    id: "5",
    purchaseId: "PUR-1005",
    purchaseNo: "PO-2026-005",

    supplierInvoiceNo: "SUP-INV-005",

    vendorName: "Contact Lens World",
    supplierName: "Contact Lens World",

    email: "lensworld@gmail.com",
    phone: "+91 7878787878",
    mobile: "+91 7878787878",

    gstNumber: "19ABCDE1234F1Z5",

    billingAddress:
      "Park Street, Kolkata, India - 700016",

    poDate: "2026-05-05",
    purchaseDate: "2026-05-05",

    dueDate: "2026-05-20",

    purchaseStatus: "Ordered",
    status: "Ordered",

    paymentStatus: "Overdue",

    referenceNo: "REF-1005",

    productName: "Acuvue Contact Lens",
    productType: "Contact Lens",

    brand: "Acuvue",

    selectProductDetails:
      "Monthly disposable lenses",

    barcode: "AC2026005",

    subtopic: "Contact Lens",

    quantity: 100,
    totalQty: 100,

    unitCost: 650,

    tax: 12,
    discount: 1500,

    lineTotal: 65000,

    subtotal: 65000,
    taxAmount: 7800,
    discountAmount: 1500,
    shippingCharge: 600,
    grandTotal: 71900,

    paidAmount: 25000,
    balanceDue: 46900,

    paymentMethod: "Bank Transfer",
    transactionId: "TXN-112233",

    warehouseLocation:
      "Kolkata Warehouse",

    receivedQuantity: 60,
    pendingQuantity: 40,

    receivedDate: "2026-05-08",

    notes:
      "Delayed shipment from supplier.",

    createdOn: "2026-05-05",
    updatedDate: "2026-05-08",
    createdBy: "Admin",
  },

  {
    id: "6",
    purchaseId: "PUR-1006",
    purchaseNo: "PO-2026-006",

    supplierInvoiceNo: "SUP-INV-006",

    vendorName: "Zeiss Vision Care",
    supplierName: "Zeiss Vision Care",

    email: "zeissvision@gmail.com",
    phone: "+91 9998887776",
    mobile: "+91 9998887776",

    gstNumber: "27ABCDE1234F1Z5",

    billingAddress:
      "Marine Drive, Mumbai, India - 400002",

    poDate: "2026-05-06",
    purchaseDate: "2026-05-06",

    dueDate: "2026-05-22",

    purchaseStatus: "Received",
    status: "Received",

    paymentStatus: "Paid",

    referenceNo: "REF-1006",

    productName: "Zeiss Lens Package",
    productType: "Optical Lens",

    brand: "Zeiss",

    selectProductDetails:
      "Premium lens package",

    barcode: "ZE2026006",

    subtopic: "Vision Care",

    quantity: 40,
    totalQty: 40,

    unitCost: 2800,

    tax: 18,
    discount: 2500,

    lineTotal: 112000,

    subtotal: 112000,
    taxAmount: 20160,
    discountAmount: 2500,
    shippingCharge: 900,
    grandTotal: 130560,

    paidAmount: 130560,
    balanceDue: 0,

    paymentMethod: "Card",
    transactionId: "TXN-334455",

    warehouseLocation:
      "Mumbai Warehouse",

    receivedQuantity: 40,
    pendingQuantity: 0,

    receivedDate: "2026-05-09",

    notes:
      "High-value purchase completed.",

    createdOn: "2026-05-06",
    updatedDate: "2026-05-09",
    createdBy: "Admin",
  },
];

export const expenses:
Expense[] = [

  {
    id: "1",

    expenseName:
      "Office Rent",

    ledger:
      "Administrative Expense",

    amount:
      25000,

    paymentMethod:
      "Bank Transfer",

    expenseDate:
      "2026-05-10",

    createdBy:
      "Admin",

    status:
      "Paid",

    notes:
      "Monthly office rent payment.",
  },

  {
    id: "2",

    expenseName:
      "Electricity Bill",

    ledger:
      "Utility Expense",

    amount:
      8200,

    paymentMethod:
      "UPI",

    expenseDate:
      "2026-05-12",

    createdBy:
      "Manager",

    status:
      "Pending",

    notes:
      "Awaiting approval.",
  },

  {
    id: "3",

    expenseName:
      "Staff Salary",

    ledger:
      "Payroll",

    amount:
      120000,

    paymentMethod:
      "Bank Transfer",

    expenseDate:
      "2026-05-15",

    createdBy:
      "Admin",

    status:
      "Paid",

    notes:
      "Monthly salary payout.",
  },
];
export const ledgers:
Ledger[] = [

  {
    id: "1",

    ledgerName:
      "Office Expense Ledger",

    ledgerGroup:
      "Administrative",

    openingBalance:
      50000,

    balanceType:
      "Debit",

    currentBalance:
      32000,

    createdOn:
      "2026-05-10",

    createdBy:
      "Admin",

    status:
      "Active",

    notes:
      "Handles office related expenses.",
  },

  {
    id: "2",

    ledgerName:
      "Utility Expense Ledger",

    ledgerGroup:
      "Utilities",

    openingBalance:
      25000,

    balanceType:
      "Debit",

    currentBalance:
      18500,

    createdOn:
      "2026-05-11",

    createdBy:
      "Manager",

    status:
      "Active",

    notes:
      "Electricity and utility payments.",
  },

  {
    id: "3",

    ledgerName:
      "Sales Revenue Ledger",

    ledgerGroup:
      "Revenue",

    openingBalance:
      100000,

    balanceType:
      "Credit",

    currentBalance:
      175000,

    createdOn:
      "2026-05-12",

    createdBy:
      "Admin",

    status:
      "Active",

    notes:
      "Tracks company sales revenue.",
  },

];