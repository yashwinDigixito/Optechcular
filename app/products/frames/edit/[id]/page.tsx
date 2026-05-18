import EditFramePage from "@/component/product-management/frames/EditFrameForm";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <EditFramePage
      params={params}
    />
  );
}