// app/dashboard/page.tsx

import DashboardCard from "@/component/dashboard/DashboardCard";
import ReportChart from "@/component/dashboard/ReportChart";
import SalesReturnChart from "@/component/dashboard/SalesReturnChart";

import {
  dashboardStats,
  orderReportData,
  purchaseReportData,
} from "@/assets/genericdata";

import { Box, Grid } from "@mui/material";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        p: 3,
        background: "#F5F7FA",
        minHeight: "100vh",
      }}
    >
      {/* Top Cards */}
      <Grid
            container
            spacing={3}
            sx={{
              alignItems: "stretch",
            }}
          >
        
        {dashboardStats.map((item, index) => (
          <Grid
            key={index}
            size={{
              xs: 12,
              sm: 6,
              lg: 4,
            }}
          >
            <DashboardCard
              title={item.title}
              value={item.value}
              growth={item.growth}
            />
          </Grid>
        ))}

      </Grid>

      {/* Charts */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        
        <Grid size={{ xs: 12, md: 6 }}>
          <ReportChart
            title="Order Report"
            data={orderReportData}
            color="#2563EB"
            label="10%"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <ReportChart
            title="Purchase Report"
            data={purchaseReportData}
            color="#16A34A"
            label="12%"
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <SalesReturnChart />
        </Grid>

      </Grid>
    </Box>
  );
}