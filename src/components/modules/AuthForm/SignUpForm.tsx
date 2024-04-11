"use client";
import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

import EmailInput from "@/components/elements/AuthPage/EmailInput";
import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import PhoneInput from "@/components/elements/AuthPage/PhoneInput";
import PasswordRepeatInput from "@/components/elements/AuthPage/PasswordRepeatInput";

import { signUpFn } from "@/api/auth";
import { IInputs } from "@/types/auth";
import { showAuthError } from "@/utils/errors";

import styles from "@/styles/auth/index.module.scss";
import spinnerStyles from "@/styles/spinner/index.module.scss";

const SignUpForm = () => {
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

      await signUpFn({
        url: "/auth/register",
        phone: data.phone,
        email: data.email,
        password: data.password,
        passwordRepeat: data.passwordRepeat,
      });

      resetField("phone");
      resetField("email");
      resetField("password");
      resetField("passwordRepeat");
    } catch (error) {
      showAuthError(error);
    } finally {
      setSpinner(false);
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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

        <PhoneInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <PasswordRepeatInput register={register} errors={errors} />
        <button className={styles.button}>
          {spinner ? (
            <div className={spinnerStyles.spinner} />
          ) : (
            "Зарегистрировать"
          )}
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
