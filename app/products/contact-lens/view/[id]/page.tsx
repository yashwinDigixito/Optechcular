import ContactLensViewPage from "@/component/product-management/contact-lens/ContactLensView";

export default async function Page({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <ContactLensViewPage
      params={params}
    />
  );
}