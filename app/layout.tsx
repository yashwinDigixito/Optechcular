// <<<<<<< HEAD
"use client";
import { theme } from "@/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
// =======


import Navbar from "@/component/navbar/Navbar";
import Sidebar from "@/component/sidebar/Sidebar";
import AuthProvider from "@/providers/AuthProvider";
import Providers from "@/providers/Providers";
import "./globals.css";

import { usePathname } from "next/navigation";
import SidebarMenu from "@/component/sidebar/Sidebar";
import { useState } from "react";
// >>>>>>> e3b8dbbb44b139742569e8d09466f24203900a3d

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";
  const [collapsed, setCollapsed] =
    useState(false);





  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            {isLoginPage ? (
              children
            ) : (
              <div style={{ display: "flex" }}>
                 <SidebarMenu
                 
                collapsed={collapsed}
        setCollapsed={setCollapsed} 
                 
                 
                 />

                <div
                  style={{
                    flex: 1,
                    minHeight: "100vh",
                    background: "#F4F7FE",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Navbar
                  
                  collapsed={collapsed}
              setCollapsed={setCollapsed}
                  
                  
                  />

                  <main
                    style={{
                      flex: 1,
                      padding: "24px",
                    }}
                  >
                    {children}
                  </main>
                </div>
              </div>
            )}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}