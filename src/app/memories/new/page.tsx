import NewMemoryForm from "./NewMemoryForm";

export default async function NewMemoryPage({
  searchParams,
}: {
  searchParams: Promise<{ lovedOneId?: string }>;
}) {
  const params = await searchParams;

  return <NewMemoryForm initialLovedOneId={params.lovedOneId || ""} />;
}
