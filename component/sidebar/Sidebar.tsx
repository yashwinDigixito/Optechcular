// components/dashboard/Sidebar.tsx

"use client";

import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutIcon from "@mui/icons-material/Logout";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import PeopleIcon from "@mui/icons-material/People";
import PersonIcon from "@mui/icons-material/Person";
import ReceiptIcon from "@mui/icons-material/Receipt";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const drawerWidth = 280;

const menuItems = [
  {
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Customer Management",
    icon: <PeopleIcon />,
  },
  {
    name: "Invoice Management",
    icon: <ReceiptIcon />,
  },
  {
    name: "Purchase Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    name: "Expense Tracking",
    icon: <MoneyOffIcon />,
  },
  {
    name: "Ledger Management",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    name: "Product Management",
    icon: <Inventory2Icon />,
  },
  {
    name: "Sales Person Target",
    icon: <TrackChangesIcon />,
  },
  {
    name: "Order Management",
    icon: <AssignmentIcon />,
  },
  {
    name: "Role Management",
    icon: <AdminPanelSettingsIcon />,
  },
  {
    name: "User Management",
    icon: <PersonIcon />,
  },
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background:
            "linear-gradient(180deg, #071B34 0%, #0B2447 100%)",
          color: "#fff",
          border: "none",
        },
      }}
    >
      {/* Logo */}
      <Toolbar>
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          OPTECHCULAR
        </Typography>
      </Toolbar>

      {/* Menu */}
      <Box sx={{ px: 2, mt: 2, flex: 1 }}>
        <List>
          {menuItems.map((item, index) => (
            <ListItemButton
              key={index}
              sx={{
                borderRadius: "14px",
                mb: 1,
                py: 1.5,

                "&:hover": {
                  background: "#2563EB",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: "40px",
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText
                primary={item.name}
                sx={{
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Logout */}
      <Box sx={{ p: 2 }}>
        <ListItemButton
          sx={{
            borderRadius: "14px",

            "&:hover": {
              background: "#EF4444",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#fff",
              minWidth: "40px",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText
            primary="Logout"
            sx={{
              fontSize: "15px",
              fontWeight: 500,
            }}
          />
        </ListItemButton>
      </Box>
    </Drawer>
  );
}