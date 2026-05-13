import InvoiceDetails from "@/component/invoice-management/InvoiceDetails";






export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <InvoiceDetails
      params={params}
    />
  );
}