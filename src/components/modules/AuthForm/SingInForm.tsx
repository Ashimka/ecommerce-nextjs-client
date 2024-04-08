"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import PhoneInput from "@/components/elements/AuthPage/PhoneInput";

import { signInFn } from "@/api/auth";
import { showAuthError } from "@/utils/errors";
import { IInputs } from "@/types/auth";

import styles from "@/styles/auth/index.module.scss";
import spinnerStyles from "@/styles/spinner/index.module.scss";

const SignInForm = () => {
  const [spinner, setSpinner] = React.useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const onSubmit = async (data: IInputs) => {
    try {
      setSpinner(true);

      await signInFn({
        url: "/auth/login",
        phone: data.phone,
        password: data.password,
      });

      resetField("phone");
      resetField("password");
    } catch (error) {
      showAuthError(error);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.h1}>Вход</h1>
        <div className={styles.social_container}>
          <a href="#" className={styles.social}>
            <Image
              src="img/vk.svg"
              alt="Логотип в контакте"
              width={24}
              height={24}
            />
          </a>
          <a href="#" className={styles.social}>
            <Image
              src="img/ya.svg"
              alt="Логотип яндекс"
              width={24}
              height={24}
            />
          </a>
        </div>
        <span className={styles.span}>или используйте свою учетную запись</span>
        <PhoneInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button className={styles.button}>
          {spinner ? <div className={spinnerStyles.spinner} /> : "Войти"}
        </button>
      </form>
    </>
  );
};

export default SignInForm;
