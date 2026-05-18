"use client";

import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

export default function StoreForm() {
  const router = useRouter();

  // Basic Info
  const [storeName, setStoreName] = useState("");
  const [storeCode, setStoreCode] = useState("");
  const [storeType, setStoreType] = useState("Retail Outlet");
  const [manager, setManager] = useState("");
  const [status, setStatus] = useState("Active");

  // Contact Info
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");

  // ERP Specific Info
  const [gstin, setGstin] = useState("");
  const [monthlyTarget, setMonthlyTarget] = useState("");
  const [monthlyRevenue, setMonthlyRevenue] = useState("");
  const [totalStaff, setTotalStaff] = useState("");
  const [totalSKUs, setTotalSKUs] = useState("");
  const [inventoryValue, setInventoryValue] = useState("");
  const [operatingHours, setOperatingHours] = useState("10:00 AM - 09:30 PM");

  const handleSubmit = () => {
    const payload = {
      storeName,
      storeCode,
      storeType,
      manager,
      status,
      phone,
      email,
      location,
      gstin,
      monthlyTarget: Number(monthlyTarget) || 0,
      monthlyRevenue: Number(monthlyRevenue) || 0,
      totalStaff: Number(totalStaff) || 0,
      totalSKUs: Number(totalSKUs) || 0,
      inventoryValue: Number(inventoryValue) || 0,
      operatingHours,
      capacityLimit: 50, // default capacity
      createdOn: new Date().toLocaleDateString("en-GB"),
    };

    console.log("ERP Store Registered:", payload);
    router.push("/stores");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/stores" style={{ textDecoration: "none" }}>
          <Button startIcon={<ArrowBackIcon />} sx={{ textTransform: "none", fontWeight: 600 }}>
            Back to Stores
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          background: "#FFFFFF",
          borderRadius: "24px",
          border: "1px solid #E2E8F0",
          p: 4,
        }}
      >
        <Typography sx={{ fontSize: "28px", fontWeight: 700, color: "#0F172A", mb: 1 }}>
          Add Store
        </Typography>
        <Typography sx={{ color: "#64748B", mb: 4, fontSize: "14px" }}>
          Register a new branch, warehouse, or retail showroom into the Optechcular ERP network.
        </Typography>

        <Stack spacing={4}>
          {/* SECTION 1: PRIMARY INFORMATION */}
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#334155", mb: 2 }}>
              1. Branch Profiling
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              <TextField
                fullWidth
                label="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                placeholder="e.g. Hyderabad Hitech City Store"
              />
              <TextField
                fullWidth
                label="Store Code"
                value={storeCode}
                onChange={(e) => setStoreCode(e.target.value)}
                placeholder="e.g. STR-HYD-04"
              />
              <TextField
                select
                fullWidth
                label="Store Type"
                value={storeType}
                onChange={(e) => setStoreType(e.target.value)}
              >
                <MenuItem value="Retail Outlet">Retail Outlet</MenuItem>
                <MenuItem value="Mega Showroom">Mega Showroom</MenuItem>
                <MenuItem value="Warehouse Hub">Warehouse Hub</MenuItem>
                <MenuItem value="Distribution Center">Distribution Center</MenuItem>
              </TextField>
              <TextField
                select
                fullWidth
                label="Status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
              </TextField>
            </Box>
          </Box>

          <Divider />

          {/* SECTION 2: CONTACT & OPERATING */}
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#334155", mb: 2 }}>
              2. Operations & Contacts
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3 }}>
              <TextField
                fullWidth
                label="Store Manager Name"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
                placeholder="e.g. Suresh Kumar"
              />
              <TextField
                fullWidth
                label="Operating Hours"
                value={operatingHours}
                onChange={(e) => setOperatingHours(e.target.value)}
                placeholder="e.g. 10:00 AM - 09:30 PM"
              />
              <TextField
                fullWidth
                label="Contact Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. +91 9100223344"
              />
              <TextField
                fullWidth
                label="Contact Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. hyderabad04@optechcular.com"
              />
            </Box>
            <TextField
              fullWidth
              multiline
              rows={2}
              label="Store Address"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter exact branch street, landmark, state, and pin code"
              sx={{ mt: 3 }}
            />
          </Box>

          <Divider />

          {/* SECTION 3: ERP METRICS */}
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: 700, color: "#334155", mb: 2 }}>
              3. ERP & Financial Target Specifications
            </Typography>
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" }, gap: 3 }}>
              <TextField
                fullWidth
                label="GSTIN / Tax ID"
                value={gstin}
                onChange={(e) => setGstin(e.target.value.toUpperCase())}
                placeholder="e.g. 36DDDDD4444D4Z4"
              />
              <TextField
                fullWidth
                label="Monthly Sales Target (₹)"
                value={monthlyTarget}
                type="number"
                onChange={(e) => setMonthlyTarget(e.target.value)}
                placeholder="e.g. 2500000"
              />
              <TextField
                fullWidth
                label="Current Month Revenue (₹)"
                value={monthlyRevenue}
                type="number"
                onChange={(e) => setMonthlyRevenue(e.target.value)}
                placeholder="e.g. 1200000"
              />
              <TextField
                fullWidth
                label="Active SKU Roster Count"
                value={totalSKUs}
                type="number"
                onChange={(e) => setTotalSKUs(e.target.value)}
                placeholder="e.g. 850"
              />
              <TextField
                fullWidth
                label="Physical Inventory Valuation (₹)"
                value={inventoryValue}
                type="number"
                onChange={(e) => setInventoryValue(e.target.value)}
                placeholder="e.g. 4500000"
              />
              <TextField
                fullWidth
                label="Assigned Workforce Count"
                value={totalStaff}
                type="number"
                onChange={(e) => setTotalStaff(e.target.value)}
                placeholder="e.g. 8"
              />
            </Box>
          </Box>
        </Stack>

        {/* SUBMIT BUTTONS */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 5 }}>
          <Button variant="outlined" onClick={() => router.push("/stores")} sx={{ borderRadius: "10px", px: 3 }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} sx={{ borderRadius: "10px", px: 4, boxShadow: "none" }}>
            Register Store in ERP
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
