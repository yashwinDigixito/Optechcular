"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

type Props = {
  collapsed: boolean;
  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const Navbar = ({
  collapsed,
  setCollapsed,
}: Props) => {
  const [auth] = React.useState(true);

  const [anchorEl, setAnchorEl] =
    React.useState<null | HTMLElement>(null);

  // Open Menu ONLY on Hover
  const handleMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          mb: 0,
          zIndex: 1300,
          boxShadow: "none",
          borderBottom: "1px solid #E5E7EB",
        }}
      >
        <Toolbar>
          {/* Sidebar Toggle Button */}
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            onClick={() =>
              setCollapsed(!collapsed)
            }
            sx={{
              mr: 2,
              color: collapsed
                ? "primary.main"
                : "grey.500",
            }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />

          {/* Profile Section */}
          {auth && (
            <Box
              onMouseEnter={handleMenu}
            >
              {/* Profile Icon */}
              <IconButton
                sx={{
                  color: Boolean(anchorEl)
                    ? "primary.main"
                    : "grey.500",
                }}
              >
                <AccountCircle fontSize="large" />
              </IconButton>

              {/* Dropdown Menu */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                disableAutoFocusItem
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                slotProps={{
                  paper: {
                    onMouseLeave:
                      handleClose,
                    sx: {
                      mt: 1,
                      minWidth: 180,
                      borderRadius: 2,
                      boxShadow:
                        "0px 4px 20px rgba(0,0,0,0.08)",
                    },
                  },
                }}
              >
                {/* Profile */}
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    "&:hover": {
                      backgroundColor:
                        "#F5F5F5",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        "grey.600",
                    }}
                  >
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>

                  <ListItemText>
                    Profile
                  </ListItemText>
                </MenuItem>

                {/* Logout */}
                <MenuItem
                  onClick={handleClose}
                  sx={{
                    color: "#D32F2F",

                    "&:hover": {
                      backgroundColor:
                        "rgba(211, 47, 47, 0.08)",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color:
                        "#D32F2F",
                    }}
                  >
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>

                  <ListItemText>
                    Logout
                  </ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;