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

    if (!isLoggedIn && pathname !== "/") {
    router.replace("/");
    }

    if (isLoggedIn && pathname === "/") {
    router.replace("/dashboard");
    }
    }, [pathname, router]);

    return <>{children}</>;
}