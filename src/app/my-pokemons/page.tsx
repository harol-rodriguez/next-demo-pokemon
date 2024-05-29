// import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";
import MyPokemonList from "@/components/pokemon/my-pokemon-list";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start gap-2">
      <div className="inline-block max-w-lg text-center justify-start">
        <h1 className={title()}>My&nbsp;</h1>
        <h1 className={title({ color: "yellow" })}>Pokemons&nbsp;</h1>
      </div>

      <div className="mt-8">
        <MyPokemonList />
      </div>
    </section>
  );
}
