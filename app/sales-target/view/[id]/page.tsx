import SalesTargetDetails from "@/component/sales-person-target/SalesTargetDetails";


export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <SalesTargetDetails
      params={params}
    />
  );
}