"use client";
import {
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT,
} from "@/assets/constants";
import { Customer } from "@/assets/types";
import CommonTable from "@/component/common/table/CommonTable";
import StatusSelect from "@/component/common/table/StatusSelect";
import TableActions from "@/component/common/table/TableActions";
import {
  Chip,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Props {
  customers: Customer[];
  setCustomerData: React.Dispatch< React.SetStateAction< Customer[]>>;
}

export default function CustomerTable({ customers, setCustomerData}: Props) {
  const router = useRouter();
  const columns = [
    {
      key: "customerName",
      label: "Customer Name",
    },
    {
      key: "customerType",
      label: "Customer Type",
    },
    {
      key: "phone",
      label: "Phone",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "location",
      label: "Location",
    },
    {
      key: "status",
      label: "Status",
      align: "center" as const,
    },
    {
      key: "actions",
      label: "Actions",
      align: "center" as const,
    },
  ];
  const handleStatusChange = (
    id: string,
    value: string
  ) => {
    setCustomerData((prev) =>
      prev.map((customer) =>
        customer.id === id
          ? {
              ...customer,
              status: value,
            }
          : customer
      )
    );
  };
  return (
    <CommonTable
      columns={columns}
      rows={customers}
      renderCell={(
        customer,
        key
      ) => {
        switch (key) {
          case "customerName":
            return (
              <Typography
                sx={{
                  fontWeight: FONT_WEIGHT.BOLD,
                  color: "#2563EB",
                  fontSize: "15px",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                }}
              >
                { customer.customerName }
              </Typography>
            );
          case "customerType":
            return (
              <Chip
                label={ customer.customerType }
                size="small"
                sx={{
                  background:
                    customer.customerType ===
                    "Individual"
                      ? "#EFF6FF"
                      : "#FDF4FF",
                  color:
                    customer.customerType ===
                    "Business"
                      ? "#2563EB"
                      : "#C026D3",
                  fontWeight: FONT_WEIGHT.BOLD,
                  borderRadius: "8px",
                  fontFamily: FONT_FAMILY.BODY,
                }}
              />
            );
          case "phone":
            return (
              <Typography
                sx={{
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                  color: "#0F172A",
                }}
              >
                { customer.phone }
              </Typography>
            );
          case "email":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { customer.email }
              </Typography>
            );
          case "location":
            return (
              <Typography
                sx={{
                  color: "#475569",
                  fontFamily: FONT_FAMILY.TABLE_BODY,
                  fontSize: FONT_SIZE.TABLE_BODY,
                }}
              >
                { customer.city },{" "}
                { customer.state }
              </Typography>
            );
          case "status":
            return (
              <StatusSelect
                value={ customer.status }
                options={[ "Active", "Inactive" ]}
                onChange={(value) =>
                  handleStatusChange(
                    customer.id,
                    value
                  )
                }
              />
            );
          case "actions":
            return (
              <TableActions
                onView={() =>
                  router.push( `/customers/view/${customer.id}` )
                }
                onEdit={() =>
                  router.push( `/customers/edit/${customer.id}` )
                }
              />
            );
          default: return null;
        }
      }}
    />
  );
}