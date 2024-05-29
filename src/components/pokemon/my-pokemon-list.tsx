"use client";
import React, { useEffect } from "react";

import PokemonCard from "./pokemon-card";

import { useMyPokemonsStore } from "@/store/myPokemonsStore"; // Importa useMyPokemonsStore


const MyPokemonList: React.FC = () => {
  const myPokemons = useMyPokemonsStore((state) => state.myPokemons); // Usa myPokemons desde useMyPokemonsStore
  // const addPokemon = useMyPokemonsStore((state) => state.addPokemon);

  const handleAddPokemon = (pokemon: any) => {
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {myPokemons.map((pokemon: any, i: number) => (
        <PokemonCard
          key={i}
          noAdd={true}
          pokemon={pokemon}
          onCapture={handleAddPokemon}
        />
      ))}
    </div>
  );
};

export default MyPokemonList;
