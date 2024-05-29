"use client";
import React, { useEffect, useState } from "react";
import { Input, Button, Card, Spacer } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { login } from "@/util/auth";

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getCookieValue = (name: any) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) return parts?.pop()?.split(";").shift();
    };

    const session = getCookieValue("authToken");

    if (!!session) {
      router.push("/");
    }
  }, [router]);

  const handleLogin = async () => {
    try {
      await login({ username, password });
      setError(null);
      // Redirigir o realizar alguna acción después de un inicio de sesión exitoso
      // eslint-disable-next-line no-console
      console.log("Inicio de sesión exitoso");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card className="w-96" shadow="lg">
      <div className="p-6">
        <div className="flex flex-col items-center justify-center">
          <img
            alt="pokeapi"
            src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
            width="150"
          />
          <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        </div>

        <Input
          label="Usuario"
          placeholder="Ingresa tu usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Spacer y={1} />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Spacer y={2} />
        {error && <p className="text-red-500">{error}</p>}
        <Button fullWidth onClick={handleLogin}>
          Ingresar
        </Button>
      </div>
      <div className="bg-gradient-to-r from-primary to-secondary p-4 text-center">
        <p color="white">¿Olvidaste tu contraseña?</p>
      </div>
    </Card>
  );
};

export default LoginPage;
