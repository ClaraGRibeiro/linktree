import LinkTree from "../components/LinkTree";
import { users } from "../data/users";

import { notFound } from "next/navigation";

export default async function UserPage({
  params,
}: {
  params: Promise<{ user: string }>;
}) {
  const { user } = await params;

  const profile =
    users[user as keyof typeof users];

  if (!profile) {
    notFound();
  }

  return <LinkTree profile={profile} />;
}