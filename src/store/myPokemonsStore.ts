import { create } from "zustand";

type Pokemon = {
  id: number;
  name: string;
};

type MyPokemonsStore = {
  myPokemons: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
};

export const useMyPokemonsStore = create<MyPokemonsStore>((set) => ({
  myPokemons: [],
  addPokemon: (pokemon) => {
    if (!pokemon) {
      console.error("El objeto 'pokemon' es undefined.");

      return;
    }

    set((state) => {
      if (!state) {
        console.error("El objeto 'state' es undefined.");

        return { myPokemons: [pokemon] };
      }

      const existingPokemon = state.myPokemons.find(
        (p: any) => p.id === pokemon.id,
      );

      if (!existingPokemon) {
        return { myPokemons: [...state.myPokemons, pokemon] };
      } else {
        console.log("¡Este Pokémon ya está en tu lista!");

        return state;
      }
    });
  },
}));
