"use client";

import { createEffect } from "effector";
import axiosApi from "./axiosClient";
// import { toast } from "react-toastify";
import { ISignUpFn } from "@/types/auth";

export const signUpFn = createEffect(
  async ({ url, phone, email, password, passwordRepeat }: ISignUpFn) => {
    const { data } = await axiosApi.post(url, {
      phone,
      email,
      password,
      passwordRepeat,
    });

    if (data.warningMessage) {
      // toast.warning(data.warningMessage);
      return;
    }

    //  toast.success("Регистрация прощла успешно!");

    return data;
  }
);
