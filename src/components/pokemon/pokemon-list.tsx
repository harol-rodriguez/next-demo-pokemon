"use client";
import React, { useEffect } from "react";

import PokemonCard from "./pokemon-card";

import { usePokemonStore } from "@/store/pokemonStore";
import { useMyPokemonsStore } from "@/store/myPokemonsStore";

const PokemonList: React.FC = () => {
  const { pokemons, fetchPokemons } = usePokemonStore();
  const addPokemon = useMyPokemonsStore((state) => state.addPokemon);

  useEffect(() => {
    fetchPokemons(1);
  }, []);

  const handleAddPokemon = (pokemon: any) => {
    // eslint-disable-next-line no-console
    console.log(pokemon.name.toUpperCase());

    try {
      addPokemon(pokemon);
    } catch (error: any) {
      // eslint-disable-next-line no-console
      console.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemons.map((pokemon: any, i: number) => (
        <PokemonCard key={i} pokemon={pokemon} onCapture={handleAddPokemon} />
      ))}
    </div>
  );
};

export default PokemonList;
