export const COLORS = {
  PRIMARY: "#2563EB",
  SECONDARY: "#111827",
  BACKGROUND: "#F4F7FE",
  WHITE: "#FFFFFF",
  BORDER: "#E5E7EB",
  SUCCESS: "#22C55E",
  ERROR: "#EF4444",
};

export const ROLES = [
  "Admin",
  "Manager",
  "Sales",
  "Accountant",
];

export const sidebarMenus = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },

  {
    title: "Customers",
    path: "/customers",
  },

  {
    title: "Invoices",
    path: "/invoices",
  },

  {
    title: "Purchase Orders",
    path: "/purchase-orders",
  },

  {
    title: "Expenses",
    path: "/expenses",
  },

  {
    title: "Ledgers",
    path: "/ledgers",
  },

  {
    title: "Orders",
    path: "/orders",
  },

  {
    title: "Sales Target",
    path: "/sales-target",
  },

  {
    title: "Users",
    path: "/users",
  },

  {
    title: "Roles",
    path: "/roles",
  },

  {
    title: "Products",

    children: [
      {
        title: "Brands",
        path: "/products/brands",
      },

      {
        title: "Categories",
        path: "/products/categories",
      },

      {
        title: "Frames",
        path: "/products/frames",
      },

      {
        title: "Contact Lens",
        path: "/products/contact-lens",
      },

      {
        title: "Materials",
        path: "/products/materials",
      },

      {
        title: "Rim Shapes",
        path: "/products/rim-shapes",
      },
    ],
  },
];

export const CUSTOMER_TYPES = [
  "B2B",
  "B2C",
];

export const ORDER_STATUS = [
  "Pending",
  "Completed",
  "Cancelled",
];

export const INVOICE_STATUS = [
  "Paid",
  "Pending",
  "Overdue",
];

export const RIM_TYPES = [
  "Full Rim",
  "Half Rim",
  "Rim Less",
];

export const POWER_TYPES = [
  "Spherical",
  "Astigmatism",
  "Progressive",
];

export const MODALITIES = [
  "Daily",
  "BiWeekly",
  "Monthly",
  "Quartely",
  "Yearly",
];