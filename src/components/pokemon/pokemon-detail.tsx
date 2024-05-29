"use client";
import { useEffect, useState } from "react";

const PokemonDetail = ({ id }: { id: string }) => {
  const [pokemonData, setPokemonData] = useState<any>(null);

  useEffect(() => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al obtener datos del Pokémon: ${response.status}`,
          );
        }

        return response.json();
      })
      .then((data) => {
        setPokemonData(data);
      })
      .catch((error) => {
        console.error("Error al obtener datos del Pokémon:", error);
      });
  }, [id]);

  if (!pokemonData) {
    return <p>Cargando datos del Pokémon...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold">{pokemonData.name}</h1>
      <p className="text-gray-400">{pokemonData.species.name}</p>

      <div className="mt-4 w-full">
        <div className="grid grid-cols-1 gap-2">
          {pokemonData.stats.map((stat: any) => (
            <div key={stat.stat.name} className="flex justify-between bg-gray-800 p-2 rounded-md">
              <span className="text-gray-400">{stat.stat.name}</span>
              <span className="text-gray-100">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
