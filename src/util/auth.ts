"use server";

import { cookies } from "next/headers";

type LoginCredentials = {
  username: string;
  password: string;
};

export const login = async ({
  username,
  password,
}: LoginCredentials): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "user" && password === "password") {
        cookies().set("authToken", "token_user", {
          httpOnly: false,
          secure: process.env.NODE_ENV === "production",
          maxAge: 60 * 60 * 24 * 7,
          path: "/",
        });
        resolve();
      } else {
        reject(new Error("Usuario o contraseña incorrectos"));
      }
    }, 1000);
  });
};

export const isAuthenticated = (): boolean => {
  return !!cookies().get("authToken")?.value;
};

export const logout = (): void => {
  cookies().set("authToken", "", {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // Esto elimina la cookie
    path: "/",
  });
};
