"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

import Navbar from "@/component/navbar/Navbar";
import SidebarMenu from "@/component/sidebar/Sidebar";

import AuthProvider from "@/providers/AuthProvider";
import Providers from "@/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const [collapsed, setCollapsed] = useState(false);

  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            {isLoginPage ? (
              children
            ) : (
              <div
                style={{
                  display: "flex",
                  height: "100vh",
                  overflow: "hidden",
                }}
              >
                {/* SIDEBAR */}
                <SidebarMenu
                  collapsed={collapsed}
                  setCollapsed={setCollapsed}
                />

                {/* RIGHT SECTION */}
                <div
  style={{
    flex: 1,

    display: "flex",

    flexDirection:
      "column",

    overflow: "hidden",

    background:
      "#F4F7FE",

    alignItems:
      "stretch",

    justifyContent:
      "flex-start",
  }}
>
                  {/* NAVBAR */}
                  <Navbar
                    collapsed={collapsed}
                    setCollapsed={setCollapsed}
                  />

                  {/* PAGE CONTENT */}
                  <main
  style={{
    flex: 1,

    overflowY: "auto",

    padding: "12px 0px 0px 0px",

    display: "block",

    minHeight: 0,
  }}
>
  {children}
</main>
                </div>
              </div>
            )}
          </AuthProvider>
        </Providers>
        <ToastContainer position="top-right" autoClose={1500} />
      </body>
    </html>
  );
}