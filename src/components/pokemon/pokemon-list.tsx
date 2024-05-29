"use client";
import React, { useEffect, useState } from "react";
import { Pagination } from "@nextui-org/react"; // Importa el componente de paginación de NextUI

import PokemonCard from "./pokemon-card";

import { usePokemonStore } from "@/store/pokemonStore";
import { useMyPokemonsStore } from "@/store/myPokemonsStore";

const PokemonList: React.FC = () => {
  const { pokemons, fetchPokemons } = usePokemonStore();
  const addPokemon = useMyPokemonsStore((state) => state.addPokemon);

  const [currentPage, setCurrentPage] = useState(1); // Estado para la página actual
  const [totalPages, setTotalPages] = useState(10); // Estado para el total de páginas (esto puede ser dinámico según tu API)

  useEffect(() => {
    fetchPokemons(currentPage);
  }, [currentPage]);

  const handleAddPokemon = (pokemon: any) => {
    console.log(pokemon.name.toUpperCase());

    try {
      addPokemon(pokemon);
    } catch (error: any) {
      // console.error(error.message);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pokemons.map((pokemon: any, i: number) => (
          <PokemonCard key={i} pokemon={pokemon} onCapture={handleAddPokemon} />
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          initialPage={currentPage}
          total={totalPages} // Número total de páginas
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PokemonList;
