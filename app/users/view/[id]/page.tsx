

import UserDetails from "@/component/user-management/UserDetails";



export default async function ViewPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {

  return (
    <UserDetails
      params={params}
    />
  );
}