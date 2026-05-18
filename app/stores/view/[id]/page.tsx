"use client";

import {
  useParams,
} from "next/navigation";

import StoreViewContent from "@/component/store-management/StoreViewContent";

export default function StoreViewPage() {
  const params = useParams();

  return (
    <StoreViewContent
      id={
        params.id as string
      }
    />
  );
}
