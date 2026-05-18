"use client";

import {
  useState,
} from "react";

import { Store } from "@/assets/types";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Button,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Props {
  store: Store;
}

export default function EditStoreForm({
  store,
}: Props) {
  const router = useRouter();

  const [storeName, setStoreName] = useState(store.storeName);
  const [storeCode, setStoreCode] = useState(store.storeCode);
  const [phone, setPhone] = useState(store.phone);
  const [email, setEmail] = useState(store.email);
  const [location, setLocation] = useState(store.location);
  const [manager, setManager] = useState(store.manager);
  const [status, setStatus] = useState(store.status);

  const handleSubmit = () => {
    const payload = {
      ...store,
      storeName,
      storeCode,
      phone,
      email,
      location,
      manager,
      status,
    };

    console.log("Updated Store:", payload);

    router.push("/stores");
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {/* BACK */}
      <Box sx={{ mb: 3 }}>
        <Link
          href="/stores"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
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
        {/* HEADER */}
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#0F172A",
            mb: 4,
          }}
        >
          Edit Store
        </Typography>

        {/* FORM */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 3,
          }}
        >
          {/* STORE NAME */}
          <TextField
            fullWidth
            label="Store Name"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
          />

          {/* STORE CODE */}
          <TextField
            fullWidth
            label="Store Code"
            value={storeCode}
            onChange={(e) => setStoreCode(e.target.value)}
          />

          {/* MANAGER NAME */}
          <TextField
            fullWidth
            label="Store Manager"
            value={manager}
            onChange={(e) => setManager(e.target.value)}
          />

          {/* STATUS */}
          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value as
                  "Active" | "Inactive"
              )
            }
          >
            <MenuItem value="Active">
              Active
            </MenuItem>
            <MenuItem value="Inactive">
              Inactive
            </MenuItem>
          </TextField>

          {/* PHONE */}
          <TextField
            fullWidth
            label="Contact Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* EMAIL */}
          <TextField
            fullWidth
            label="Contact Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        {/* LOCATION */}
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Store Location / Address"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{
            mt: 3,
          }}
        />

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 2,
            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            onClick={() => router.push("/stores")}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={handleSubmit}
          >
            Update Store
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
