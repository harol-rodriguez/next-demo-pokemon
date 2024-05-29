// import { Link } from "@nextui-org/link";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { title } from "@/components/primitives";
import MyPokemonList from "@/components/pokemon/my-pokemon-list";

export default function Home() {
  // console.log(isAuthenticated())
  const cookieStore = cookies();
  const isAuthenticated = cookieStore.get("authToken");

  if (!isAuthenticated) {
    redirect("/login");
  }

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
