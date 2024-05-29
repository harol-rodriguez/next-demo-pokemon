import React from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";

import { PokeIcon } from "@/components/icons";

const PokemonCard: React.FC<{
  pokemon: any;
  noAdd?: boolean;
  onCapture: (pokemon: any) => void;
}> = ({ pokemon, noAdd, onCapture }) => {
  const router = useRouter();

  const handlePokemonClick = (pokemonId: string) => {
    router.push(`/${pokemonId}`); // Redirige al enlace del Pokémon
  };

  return (
    <div className="relative flex flex-col">
      {!noAdd ? (
        <Button onClick={() => onCapture(pokemon)}>
          <p>Capturar Pokemon</p>
          <div className="w-10">
            <PokeIcon />
          </div>
        </Button>
      ) : (
        <></>
      )}
      <Card
        isPressable
        className="p-4 h-full hover:bg-blue-600"
        onPress={() => handlePokemonClick(pokemon.id)}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <small className="text-default-500">12 Tracks</small>
          <h4 className="font-bold text-large">{pokemon.name.toUpperCase()}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt={pokemon.name.toUpperCase()}
            className="object-cover rounded-xl"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={270}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default PokemonCard;
