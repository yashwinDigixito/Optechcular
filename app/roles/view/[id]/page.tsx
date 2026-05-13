"use client";

import {
  useParams,
} from "next/navigation";

import RoleViewContent from "@/component/role-management/RoleViewContent";

export default function RoleViewPage() {

  const params =
    useParams();

  return (
    <RoleViewContent
      id={
        params.id as string
      }
    />
  );
}