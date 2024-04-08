"use client";

import { createEffect } from "effector";
import axiosApi from "./axiosClient";
import { toast } from "react-toastify";
import { ISignInFn, ISignUpFn } from "@/types/auth";

export const signUpFn = createEffect(
  async ({ url, phone, email, password, passwordRepeat }: ISignUpFn) => {
    const { data } = await axiosApi.post(url, {
      phone,
      email,
      password,
      passwordRepeat,
    });

    toast.success("Регистрация прощла успешно!");

    return data;
  }
);
export const signInFn = createEffect(
  async ({ url, phone, password }: ISignInFn) => {
    const { data } = await axiosApi.post(url, {
      phone,
      password,
    });

    toast.success("Вход выполнен успешно!");

    return data;
  }
);
