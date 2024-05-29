import { Image } from "@nextui-org/image";

import { title } from "@/components/primitives";
import PokemonDetail from "@/components/pokemon/pokemon-detail";

export default function PokemonDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      <Image
        alt={params.id}
        className="object-cover rounded-xl"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${params.id}.svg`}
      />

      <div className="mt-10 w-80">
        <PokemonDetail id={params.id} />
      </div>
    </div>
  );
}
