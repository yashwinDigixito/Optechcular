import FrameViewPage from "@/component/product-management/frames/EditFrameForm";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <FrameViewPage
      params={params}
    />
  );
}