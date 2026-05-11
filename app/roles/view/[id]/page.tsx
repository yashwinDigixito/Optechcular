import RoleViewContent from "@/component/role-management/RoleViewContent";

export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  const { id } =
    await params;

  return (
    <RoleViewContent
      id={id}
    />
  );
}