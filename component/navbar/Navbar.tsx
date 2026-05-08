"use client";

import {
    Avatar,
    Box,
    IconButton,
    InputBase,
    Typography,
} from "@mui/material";

import {
    Menu,
    Notifications,
    Search,
} from "@mui/icons-material";

import { COLORS } from "@/assets/constants";

export default function Navbar() {
  return (
    <Box
      sx={{
        height: 70,
        background: COLORS.WHITE,

        display: "flex",
        alignItems: "center",
        justifyContent:
          "space-between",

        px: 3,

        borderBottom:
          "1px solid #E5E7EB",
      }}
    >
      {/* Left Section */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <Menu />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          Dashboard
        </Typography>
      </Box>

      {/* Search */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          background:
            COLORS.BACKGROUND,

          px: 2,
          py: 1,

          borderRadius: 3,

          width: 320,
        }}
      >
        <Search
          sx={{
            color: "#6B7280",
          }}
        />

        <InputBase
          placeholder="Search..."
          sx={{
            ml: 1,
            flex: 1,
          }}
        />
      </Box>

      {/* Right Section */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton>
          <Notifications />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Avatar>
            A
          </Avatar>

          <Box>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 14,
              }}
            >
              Admin User
            </Typography>

            <Typography
              sx={{
                fontSize: 12,
                color: "#6B7280",
              }}
            >
              Administrator
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}