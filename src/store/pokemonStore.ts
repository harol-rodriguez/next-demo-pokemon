import { create } from "zustand";

interface IPokemonState {
  pokemons: any[];
  fetchPokemons: (offset: number) => Promise<void>;
}

export const usePokemonStore = create<IPokemonState>((set) => ({
  pokemons: [],
  fetchPokemons: async (offset) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`,
      );
      const data = await response.json();

      set({
        pokemons: data.results.map((d: any) => {
          const parts = d.url.split("/");
          const id = parts[parts.length - 2];

          return { ...d, id: id };
        }),
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error fetching Pokémon:", error);
    }
  },
}));
