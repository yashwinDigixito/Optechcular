"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthProvider({
children,
}: {
children: React.ReactNode;
}) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn && pathname !== "/login") {
    router.replace("/login");
    }

    if (isLoggedIn && pathname === "/login") {
    router.replace("/");
    }
    }, [pathname, router]);

    return <>{children}</>;
}