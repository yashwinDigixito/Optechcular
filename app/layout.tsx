import "./globals.css";

import Sidebar from "@/component/sidebar/Sidebar";

import Navbar from "@/component/navbar/Navbar";

import Providers from "@/providers/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div
            style={{
              display: "flex",
            }}
          >
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
        </Providers>
      </body>
    </html>
  );
}