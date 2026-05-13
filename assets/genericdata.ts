import {
  DashboardStat,
  Expense,
  Inventory,
  Invoice,
  Ledger,
  LedgerGroup,
  PurchaseOrder,
  ReportChartData,
  SalesTarget,
  User
} from "@/assets/types";

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

    customerType:
      "B2C",

    fullName:
      "Rahul Sharma",

    phoneNumber:
      "9876543210",

    email:
      "rahul@gmail.com",

    addressLine1:
      "MG Road",

    addressLine2:
      "Near Metro Station",

    city:
      "Mumbai",

    state:
      "Maharashtra",

    country:
      "India",

    status:
      "Active",

    createdOn:
      "2026-05-12",
  },

  {
    id: "2",

    customerType:
      "B2B",

    fullName:
      "Vision Optics Pvt Ltd",

    phoneNumber:
      "9898989898",

    email:
      "visionoptics@gmail.com",

    addressLine1:
      "Ring Road",

    addressLine2:
      "Business Hub",

    city:
      "Ahmedabad",

    state:
      "Gujarat",

    country:
      "India",

    status:
      "Active",

    createdOn:
      "2026-05-11",
  },

  {
    id: "3",

    customerType:
      "B2C",

    fullName:
      "Priya Patel",

    phoneNumber:
      "9123456780",

    email:
      "priya@gmail.com",

    addressLine1:
      "SG Highway",

    addressLine2:
      "Apartment 402",

    city:
      "Ahmedabad",

    state:
      "Gujarat",

    country:
      "India",

    status:
      "Inactive",

    createdOn:
      "2026-05-10",
  },

  {
    id: "4",

    customerType:
      "B2B",

    fullName:
      "EyeCare Vision",

    phoneNumber:
      "9988776655",

    email:
      "eyecare@gmail.com",

    addressLine1:
      "Linking Road",

    addressLine2:
      "Corporate Plaza",

    city:
      "Delhi",

    state:
      "Delhi",

    country:
      "India",

    status:
      "Active",

    createdOn:
      "2026-05-09",
  },

];

export const invoices:Invoice[]= [

  {
    id: "1",

    invoiceNo:
      "INV-1001",

    orderNo:
      "ORD-1001",

    customerName:
      "Rahul Sharma",

    productName:
      "RayBan Aviator Frame",

    brand:
      "RayBan",

    category:
      "Frame",

    invoiceDate:
      "2026-05-14",

    dueDate:
      "2026-05-20",

    subtotal:
      4200,

    tax:
      300,

    discount:
      0,

    totalAmount:
      4500,

    paidAmount:
      4500,

    dueAmount:
      0,

    paymentStatus:
      "Paid",

    invoiceStatus:
      "Completed",

    paymentMethod:
      "UPI",

    createdBy:
      "Admin",

    notes:
      "Customer paid full amount.",
  },

  {
    id: "2",

    invoiceNo:
      "INV-1002",

    orderNo:
      "ORD-1002",

    customerName:
      "Vision Optics Pvt Ltd",

    productName:
      "Premium Optical Lens",

    brand:
      "Essilor",

    category:
      "Optical Lens",

    invoiceDate:
      "2026-05-13",

    dueDate:
      "2026-05-22",

    subtotal:
      12000,

    tax:
      800,

    discount:
      0,

    totalAmount:
      12800,

    paidAmount:
      0,

    dueAmount:
      12800,

    paymentStatus:
      "Pending",

    invoiceStatus:
      "Pending",

    paymentMethod:
      "Bank Transfer",

    createdBy:
      "Manager",

    notes:
      "Waiting for payment approval.",
  },

  {
    id: "3",
    invoiceNo:
      "INV-1003",
    orderNo:
      "ORD-1003",
    customerName:
      "Priya Patel",
    productName:
      "Acuvue Contact Lens",
    brand:
      "Acuvue",
    category:
      "Contact Lens",
    invoiceDate:
      "2026-05-12",
    dueDate:
      "2026-05-18",
    subtotal:
      2000,
    tax:
      200,
    discount:
      0,
    totalAmount:
      2200,
    paidAmount:
      2200,
    dueAmount:
      0,
    paymentStatus:
      "Paid",
    invoiceStatus:
      "Completed",
    paymentMethod:
      "Cash",
    createdBy:
      "Sales",
    notes:
      "Cash payment received.",
  },
  {
    id: "4",
    invoiceNo:
      "INV-1004",
    orderNo:
      "ORD-1004",
    customerName:
      "EyeCare Vision",
    productName:
      "Oakley Sports Frame",
    brand:
      "Oakley",
    category:
      "Frame",
    invoiceDate:
      "2026-05-11",
    dueDate:
      "2026-05-25",
    subtotal:
      8400,
    tax:
      500,
    discount:
      0,
    totalAmount:
      8900,
    paidAmount:
      3000,
    dueAmount:
      5900,
    paymentStatus:
      "Partial",
    invoiceStatus:
      "Processing",
    paymentMethod:
      "Card",
    createdBy:
      "Admin",
    notes:
      "Partial advance payment received.",
  },
];

export const purchaseOrders:
PurchaseOrder[] = [

  {
    id: "1",

    poNumber:
      "PO-1001",

    vendorName:
      "Vision Lens Supplier",

    vendorEmail:
      "vision@gmail.com",

    vendorPhone:
      "+91 9876543210",

    productName:
      "Premium Optical Lens",

    productSku:
      "SKU-OL-1001",

    category:
      "Optical Lens",

    quantity:
      50,

    unitPrice:
      1200,

    tax:
      3000,

    discount:
      1000,

    totalAmount:
      62000,

    paymentStatus:
      "Paid",

    poStatus:
      "Delivered",

    orderDate:
      "2026-05-10",

    expectedDelivery:
      "2026-05-20",

    createdBy:
      "Admin",

    notes:
      "Delivered successfully.",
  },

  {
    id: "2",

    poNumber:
      "PO-1002",

    vendorName:
      "RayBan Distributor",

    vendorEmail:
      "rayban@gmail.com",

    vendorPhone:
      "+91 9988776655",

    productName:
      "RayBan Aviator Frame",

    productSku:
      "SKU-RB-2001",

    category:
      "Frame",

    quantity:
      30,

    unitPrice:
      2500,

    tax:
      4000,

    discount:
      0,

    totalAmount:
      79000,

    paymentStatus:
      "Pending",

    poStatus:
      "Processing",

    orderDate:
      "2026-05-12",

    expectedDelivery:
      "2026-05-24",

    createdBy:
      "Manager",

    notes:
      "Waiting for dispatch.",
  },

  {
    id: "3",
    poNumber:
      "PO-1003",
    vendorName:
      "Acuvue Supplier",
    vendorEmail:
      "acuvue@gmail.com",
    vendorPhone:
      "+91 9123456780",
    productName:
      "Acuvue Contact Lens",
    productSku:"SKU-CL-3001",
    category:"Contact Lens",
    quantity:100,
    unitPrice:500,
    tax:2500,
    discount:500,
    totalAmount:52000,
    paymentStatus:"Partial",
    poStatus:"Pending",
    orderDate:"2026-05-14",
    expectedDelivery:"2026-05-28",
    createdBy:"Sales",
    notes:"Advance payment done.",
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


export const ledgerGroups:
LedgerGroup[] = [

  {
    id: "1",

    groupName:
      "Administrative",

    createdAt:
      "2026-05-10",

    status:
      "Active",

    notes:
      "Administrative expenses group.",
  },

  {
    id: "2",

    groupName:
      "Utilities",

    createdAt:
      "2026-05-11",

    status:
      "Active",

    notes:
      "Utility expenses group.",
  },

  {
    id: "3",

    groupName:
      "Revenue",

    createdAt:
      "2026-05-12",

    status:
      "Active",

    notes:
      "Sales revenue group.",
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
      "Office related expenses.",
  },

  {
    id: "2",

    ledgerName:
      "Electricity Ledger",

    ledgerGroup:
      "Utilities",

    openingBalance:
      20000,

    balanceType:
      "Debit",

    currentBalance:
      14500,

    createdOn:
      "2026-05-11",

    createdBy:
      "Manager",

    status:
      "Active",

    notes:
      "Electricity payments.",
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
      "Revenue tracking.",
  },

];

export const salesTargets:
SalesTarget[] = [

  {
    id: "1",
    salesPersonName:"Rahul Sharma",
    targetAmount:100000,
    achievedAmount:85000,
    remainingAmount:15000,
    dueDate:"2026-06-30",
    month:"June",
    status:"In Progress",
    notes:"Good performance this month.",
  },

  {
    id: "2",
    salesPersonName:"Priya Patel",
    targetAmount:120000,
    achievedAmount:120000,
    remainingAmount:0,
    dueDate:"2026-06-30",
    month:"June",
    status:"Completed",
    notes:"Target achieved successfully.",
  },

  {
    id: "3",
    salesPersonName:"Amit Verma",
    targetAmount:90000,
    achievedAmount:45000,
    remainingAmount:45000,
    dueDate:"2026-06-30",
    month:"June",
    status:"Pending",
    notes:"Needs improvement.",
  },
];

export const users:
User[] = [

  {
    id: "1",

    fullName:
      "Rahul Sharma",

    email:
      "rahul@gmail.com",

    phoneNumber:
      "9876543210",

    role:
      "Admin",

    status:
      "Active",

    createdOn:
      "2026-05-10",

    password:
      "123456",
  },

  {
    id: "2",

    fullName:
      "Priya Patel",

    email:
      "priya@gmail.com",

    phoneNumber:
      "9876543211",

    role:
      "Sales",

    status:
      "Active",

    createdOn:
      "2026-05-11",

    password:
      "123456",
  },

  {
    id: "3",

    fullName:
      "Amit Verma",

    email:
      "amit@gmail.com",

    phoneNumber:
      "9876543212",

    role:
      "Manager",

    status:
      "Inactive",

    createdOn:
      "2026-05-12",

    password:
      "123456",
  },

];

export const inventories:
Inventory[] = [

  {
    id: "1",

    productName:
      "RayBan Aviator",

    sku:
      "RB-AVI-001",

    barcode:
      "123456789",

    category:
      "Frame",

    brand:
      "RayBan",

    branch:
      "Mumbai",

    stock:
      25,

    minStock:
      10,

    price:
      4500,

    status:
      "In Stock",

    createdOn:
      "2026-05-14",

    createdBy:
      "Admin",

    notes:
      "Fast moving frame.",
  },

  {
    id: "2",

    productName:
      "Acuvue Moist",

    sku:
      "ACV-MST-101",

    barcode:
      "987654321",

    category:
      "Contact Lens",

    brand:
      "Acuvue",

    branch:
      "Delhi",

    stock:
      5,

    minStock:
      10,

    price:
      2200,

    status:
      "Low Stock",

    createdOn:
      "2026-05-13",

    createdBy:
      "Manager",

    notes:
      "Need urgent refill.",
  },

];