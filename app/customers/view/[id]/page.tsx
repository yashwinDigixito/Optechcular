"use client";

import {
    useParams,
} from "next/navigation";

import CustomerDetails from "@/component/customer-management/CustomerDetails";

export default function CustomerViewPage() {

  const params =
    useParams();

  return (
    <CustomerDetails
      id={
        params.id as string
      }
    />
  );
}