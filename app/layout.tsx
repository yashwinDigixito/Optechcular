"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "@/component/navbar/Navbar";
import Sidebar from "@/component/sidebar/Sidebar";
import AuthProvider from "@/providers/AuthProvider";
import Providers from "@/providers/Providers";
import "./globals.css";

import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body>
        <Providers>
          <AuthProvider>
            {isLoginPage ? (
              children
            ) : (
              <div style={{ display: "flex" }}>
                <Sidebar />

                <div
                  style={{
                    flex: 1,
                    minHeight: "100vh",
                    background: "#F4F7FE",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Navbar />

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
        <ToastContainer position="top-right" autoClose={1500} />
      </body>
    </html>
  );
}