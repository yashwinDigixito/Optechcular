import dayjs from "dayjs";

export const formatDate = (date: string) => {
  return dayjs(date).format("DD MMM YYYY");
};

export const formatCurrency = (
  amount: number,
) => {
  return new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  }).format(amount);
};

export const generateBarcode = () => {
  return Math.floor(
    100000000 + Math.random() * 900000000,
  ).toString();
};

export const generateInvoiceNumber = () => {
  const random = Math.floor(
    1000 + Math.random() * 9000,
  );

  return `INV-${random}`;
};

export const generateOrderNumber = () => {
  const random = Math.floor(
    1000 + Math.random() * 9000,
  );

  return `ORD-${random}`;
};

export const generatePONumber = () => {
  const random = Math.floor(
    1000 + Math.random() * 9000,
  );

  return `PO-${random}`;
};

export const capitalizeText = (
  text: string,
) => {
  return (
    text.charAt(0).toUpperCase() +
    text.slice(1).toLowerCase()
  );
};

export const getInitials = (
  name: string,
) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

export const truncateText = (
  text: string,
  maxLength: number,
) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.substring(
    0,
    maxLength,
  )}...`;
};

export const calculateRemainingTarget = (
  target: number,
  achieved: number,
) => {
  return target - achieved;
};

export const filterBySearch = <
  T extends Record<string, unknown>,
>(
  data: T[],
  search: string,
): T[] => {
  return data.filter((item) =>
    JSON.stringify(item)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
};

export const sortByField = <
  T extends Record<string, unknown>,
>(
  data: T[],
  field: keyof T,
): T[] => {
  return [...data].sort((a, b) =>
    String(a[field]).localeCompare(
      String(b[field]),
    ),
  );
};

export const paginateData = <T>(
  data: T[],
  page: number,
  limit: number,
): T[] => {
  const start = (page - 1) * limit;
  const end = start + limit;

  return data.slice(start, end);
};

export const getStatusColor = (
  status: string,
) => {
  switch (status.toLowerCase()) {
    case "active":
    case "completed":
    case "paid":
    case "received":
      return "success";

    case "pending":
      return "warning";

    case "cancelled":
    case "inactive":
    case "overdue":
      return "error";

    default:
      return "default";
  }
};