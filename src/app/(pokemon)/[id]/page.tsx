import { title } from "@/components/primitives";

export default function BlogPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className={title()}>{params.id}</h1>
    </div>
  );
}
