"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Box,
    Collapse,
    Typography,
} from "@mui/material";

import {
    ExpandLess,
    ExpandMore,
} from "@mui/icons-material";

import { useState } from "react";

import { COLORS, sidebarMenus } from "@/assets/constants";

export default function Sidebar() {
  const pathname = usePathname();

  const [openProducts, setOpenProducts] =
    useState(true);

  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        background: COLORS.SECONDARY,
        color: COLORS.WHITE,
        p: 3,
      }}
    >
      {/* Logo */}

      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          mb: 5,
        }}
      >
        OPTECHULAR
      </Typography>

      {/* Menus */}

      {sidebarMenus.map((menu) => {
        const isActive =
          pathname === menu.path;

        // Normal Menu

        if (menu.path) {
          return (
            <Link
              href={menu.path}
              key={menu.title}
            >
              <Box
                sx={{
                  p: 1.5,
                  mb: 1,
                  borderRadius: 2,
                  cursor: "pointer",

                  background: isActive
                    ? COLORS.PRIMARY
                    : "transparent",

                  "&:hover": {
                    background:
                      COLORS.PRIMARY,
                  },
                }}
              >
                <Typography>
                  {menu.title}
                </Typography>
              </Box>
            </Link>
          );
        }

        // Product Menu

        return (
          <Box key={menu.title}>
            <Box
              onClick={() =>
                setOpenProducts(
                  !openProducts,
                )
              }
              sx={{
                p: 1.5,
                borderRadius: 2,
                cursor: "pointer",

                display: "flex",
                alignItems: "center",
                justifyContent:
                  "space-between",

                "&:hover": {
                  background:
                    COLORS.PRIMARY,
                },
              }}
            >
              <Typography>
                {menu.title}
              </Typography>

              {openProducts ? (
                <ExpandLess />
              ) : (
                <ExpandMore />
              )}
            </Box>

            <Collapse in={openProducts}>
              {menu.children?.map(
                (child) => {
                  const isChildActive =
                    pathname ===
                    child.path;

                  return (
                    <Link
                      href={child.path}
                      key={child.title}
                    >
                      <Box
                        sx={{
                          p: 1.2,
                          pl: 4,
                          mt: 1,
                          borderRadius: 2,
                          cursor: "pointer",

                          background:
                            isChildActive
                              ? COLORS.PRIMARY
                              : "transparent",

                          "&:hover": {
                            background:
                              COLORS.PRIMARY,
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                        >
                          {child.title}
                        </Typography>
                      </Box>
                    </Link>
                  );
                },
              )}
            </Collapse>
          </Box>
        );
      })}
    </Box>
  );
}