import ExpenseDetailsPage from "@/component/expense-management/ExpenseDetails";


export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <ExpenseDetailsPage
      params={params}
    />
  );
}