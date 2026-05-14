"use client";

import Link from "next/link";
import React, { useState } from "react";

import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import {
  MenuBook as BookOpen,
  CreditCard,
  ExpandLess,
  ExpandMore,
  Description as FileText,
  Layers,
  AdminPanelSettings as ShieldCheck,
  ShoppingCart,
  AdsClick as Target,
  AccountCircle as UserCircle,
  People as Users
} from "@mui/icons-material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import {
  usePathname,
} from "next/navigation";

const sidebarMenus = [
  {
    title: "Dashboard",
    icon: <DashboardOutlinedIcon/>,
    path: "/dashboard",
  },
    {
    title: "Customer Management",
    icon: <UserCircle />,
    path: "/customers",
  },
  {
    title: "Product Management",

    icon: <Layers />,

    children: [
      {
        title:
          "Brand Management",

        path:
          "/products/brands",
      },
      {
      title:
        "Brand Group Management",
      path:
        "/products/brand-groups",
    },

      {
        title:
          "Category Management",

        path:
          "/products/categories",
      },

      {
        title:
          "Frame Management",

        path:
          "/products/frames",
      },

      {
        title:
          "Contact Lens Management",

        path:
          "/products/contact-lens",
      },

      {
        title:
          "Material Management",

        path:
          "/products/materials",
      },

      {
        title:
          "Rim Shape Management",

        path:
          "/products/rim-shapes",
      },
    ],
  },
  {
    title:"Inventory Management",
    icon: <Inventory2OutlinedIcon />,
    path:"/inventory"
  },
  // {
  //   title:
  //     "Purchase Order Management",

  //   icon: <Package />,

  //   path: "/purchase-orders",
  // },
  {
    title: "Order Management",
    icon: <ShoppingCart />,
    path: "/orders",
  },
    {
    title: "Invoice Management",
    icon: <FileText />,
    path: "/invoices",
  },
    {
    title: "Expense Tracking",
    icon: <CreditCard />,
    path: "/expenses",
  },
  {
  title: "Ledger Management",
  icon: <BookOpen />,
  children: [
    {
      title:
        "Ledger Group",
      path:
        "/ledger-groups",
    },
    {
      title:
        "Ledger Master",
      path:
        "/ledgers",
    },
  ],
},
    {
    title: "Sales Person Target",
    icon: <Target />,
    path: "/sales-target",
  },
    {
    title: "Role Management",
    icon: <ShieldCheck />,
    path: "/roles",
  },
  {
    title: "User Management",
    icon: <Users />,
    path: "/users",
  },
];

type Props = {
  collapsed: boolean;

  setCollapsed: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const SidebarMenu = ({
  collapsed,
}: Props) => {

  const pathname =
    usePathname();

  const [openMenus, setOpenMenus] =
    useState<
      Record<string, boolean>
    >({});

  const [openChildren, setOpenChildren] =
    useState<
      Record<string, boolean>
    >({});

  const handleToggle = (
    title: string
  ) => {

    setOpenMenus((prev) => {

      const isOpen =
        prev[title];

      setOpenChildren({});

      return isOpen
        ? {}
        : { [title]: true };
    });
  };

  const handleChildToggle = (
    title: string
  ) => {

    setOpenChildren((prev) => {

      const isOpen =
        prev[title];

      return {
        [title]: !isOpen,
      };
    });
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width:
          collapsed
            ? 110
            : 300,

        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width:
            collapsed
              ? 110
              : 300,

          transition: "0.2s",

          height: "100vh",

          overflowY: "auto",

          overflowX: "hidden",

          borderRight:
            "1px solid #E5E7EB",

          background:
            "#FFFFFF",

          p: 1,

          boxSizing:
            "border-box",

          "&::-webkit-scrollbar":
            {
              display: "none",
            },

          msOverflowStyle:
            "none",

          scrollbarWidth:
            "none",
        },
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          display: "flex",

          alignItems: "center",

          justifyContent:
            collapsed
              ? "center"
              : "flex-start",

          flexDirection:
            "column",

          mb:
            collapsed
              ? 4
              : 2,

          mt: 1,
        }}
      >
        {collapsed ? (
          <Link
              href="/dashboard"
              style={{
                textDecoration:
                  "none",
              }}
            >
          <Box
            sx={{
              width: 56,

              height: 56,

              borderRadius:
                "50%",

              background:
                "#F8FAFC",

              display: "flex",

              alignItems:
                "center",

              justifyContent:
                "center",

              fontSize:
                "1.4rem",

              fontWeight: 700,

              color:
                "primary.main",

              border:
                "1px solid #E2E8F0",
            }}
          >
            O
          </Box>
          </Link>
        ) : (
          <>
            <Link
              href="/dashboard"
              style={{
                textDecoration:
                  "none",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 800,

                  color:
                    "primary.main",

                  px: 2,

                  cursor:
                    "pointer",

                  letterSpacing:
                    "0.5px",
                }}
              >
                OPTECHCULAR
              </Typography>
            </Link>

            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,

                color:
                  "text.secondary",

                px: 2,

                mt: 0.5,

                display:
                  "block",

                letterSpacing:
                  "1px",
              }}
            >
              MANAGEMENT SYSTEM
            </Typography>
          </>
        )}
      </Box>

      {/* MENU */}
      <List component="nav">

        {sidebarMenus.map(
          (menu) => {

            const hasChildren =
              Boolean(
                menu.children
              );

            const isOpen =
              Boolean(
                openMenus[
                  menu.title
                ]
              );

            return (
              <React.Fragment
                key={menu.title}
              >
                {/* MAIN MENU */}
                <ListItemButton
                  component={
                    hasChildren
                      ? "div"
                      : Link
                  }
                  href={
                    !hasChildren
                      ? menu.path
                      : undefined
                  }
                  onClick={() =>
                    hasChildren &&
                    handleToggle(
                      menu.title
                    )
                  }
                  sx={{
                    borderRadius: 3,

                    mb: 0.8,

                    minHeight: 52,

                    justifyContent:
                      collapsed
                        ? "center"
                        : "flex-start",

                    px:
                      collapsed
                        ? 0
                        : 1.5,

                    background:
                      pathname ===
                      menu.path
                        ? "#EFF6FF"
                        : "transparent",

                    border:
                      pathname ===
                      menu.path
                        ? "1px solid #DBEAFE"
                        : "1px solid transparent",

                    transition:
                      "0.2s",

                    "&:hover": {
                      background:
                        "#F8FAFC",
                    },
                  }}
                >
                  {/* ICON */}
                  <ListItemIcon
                    sx={{
                      minWidth:
                        collapsed
                          ? 0
                          : 42,

                      color:
                        pathname ===
                        menu.path
                          ? "primary.main"
                          : isOpen
                          ? "primary.main"
                          : "#64748B",

                      justifyContent:
                        "center",
                    }}
                  >
                    {menu.icon}
                  </ListItemIcon>

                  {/* TITLE */}
                  {!collapsed && (
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontSize:
                              "0.9rem",

                            fontWeight:
                              pathname ===
                              menu.path
                                ? 700
                                : 600,

                            color:
                              pathname ===
                              menu.path
                                ? "primary.main"
                                : "#334155",
                          }}
                        >
                          {
                            menu.title
                          }
                        </Typography>
                      }
                    />
                  )}

                  {/* ARROW */}
                  {!collapsed &&
                    hasChildren &&
                    (isOpen ? (
                      <ExpandLess
                        sx={{
                          color:
                            "#94A3B8",
                        }}
                      />
                    ) : (
                      <ExpandMore
                        sx={{
                          color:
                            "#94A3B8",
                        }}
                      />
                    ))}
                </ListItemButton>

                {/* CHILD MENUS */}
                {hasChildren &&
                  !collapsed && (
                    <Collapse
                      in={isOpen}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List
                        component="div"
                        disablePadding
                      >
                        {menu.children?.map(
                          (
                            child: {
                              title: string;
                              path?: string;
                              children?: {
                                title: string;
                                path: string;
                              }[];
                            }
                          ) => {

                            const childHasChildren =
                              Boolean(
                                child.children
                              );

                            const childOpen =
                              Boolean(
                                openChildren[
                                  child
                                    .title
                                ]
                              );

                            return (
                              <React.Fragment
                                key={
                                  child.title
                                }
                              >
                                {/* CHILD */}
                                <ListItemButton
                                  component={
                                    childHasChildren
                                      ? "div"
                                      : Link
                                  }
                                  href={
                                    !childHasChildren
                                      ? child.path
                                      : undefined
                                  }
                                  onClick={() =>
                                    childHasChildren &&
                                    handleChildToggle(
                                      child.title
                                    )
                                  }
                                  sx={{
                                    pl: 7,

                                    borderRadius: 2,

                                    minHeight: 42,
                                  }}
                                >
                                  <ListItemText
                                    primary={
                                      child.title
                                    }
                                    slotProps={{
                                      primary:
                                        {
                                          sx: {
                                            fontSize:
                                              "0.82rem",

                                            fontWeight: 600,

                                            color:
                                              "#475569",
                                          },
                                        },
                                    }}
                                  />

                                  {childHasChildren &&
                                    (childOpen ? (
                                      <ExpandLess />
                                    ) : (
                                      <ExpandMore />
                                    ))}
                                </ListItemButton>

                                {/* SUB CHILD */}
                                {childHasChildren && (
                                  <Collapse
                                    in={
                                      childOpen
                                    }
                                    timeout="auto"
                                    unmountOnExit
                                  >
                                    <List
                                      component="div"
                                      disablePadding
                                    >
                                      {child.children?.map(
                                        (
                                          subChild: {
                                            title: string;
                                            path: string;
                                          }
                                        ) => {

                                          return (
                                            <ListItemButton
                                              key={
                                                subChild.title
                                              }
                                              component={
                                                Link
                                              }
                                              href={
                                                subChild.path
                                              }
                                              sx={{
                                                pl: 9,

                                                borderRadius: 2,

                                                minHeight: 40,
                                              }}
                                            >
                                              <ListItemText
                                                primary={
                                                  subChild.title
                                                }
                                                slotProps={{
                                                  primary:
                                                    {
                                                      sx: {
                                                        fontSize:
                                                          "0.8rem",

                                                        fontWeight: 500,

                                                        color:
                                                          "#64748B",
                                                      },
                                                    },
                                                }}
                                              />
                                            </ListItemButton>
                                          );
                                        }
                                      )}
                                    </List>
                                  </Collapse>
                                )}
                              </React.Fragment>
                            );
                          }
                        )}
                      </List>
                    </Collapse>
                  )}
              </React.Fragment>
            );
          }
        )}
      </List>
    </Drawer>
  );
};

export default SidebarMenu;