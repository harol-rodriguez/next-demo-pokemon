"use client";
import React from "react";
import { Input, Button, Card, Spacer } from "@nextui-org/react";

const LoginPage: React.FC = () => {
  const handleLogin = () => {
    // Lógica de autenticación aquí
  };

  return (
    <Card className="w-96" shadow="lg">
      <div className="p-6">
        <img
          alt="pokeapi"
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          width="150"
        />
        <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
        <Input label="Usuario" placeholder="Ingresa tu usuario" />
        <Spacer y={1} />
        <Input
          label="Contraseña"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
        <Spacer y={2} />
        <Button fullWidth onClick={() => handleLogin}>
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
