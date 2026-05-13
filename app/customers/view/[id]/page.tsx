import CustomerViewPage from "@/component/customer-management/CustomerDetails";


export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <CustomerViewPage
      params={params}
    />
  );
}