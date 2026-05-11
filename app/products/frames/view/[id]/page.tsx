import FrameViewPage from "@/component/product-management/frames/FrameViewPage";

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