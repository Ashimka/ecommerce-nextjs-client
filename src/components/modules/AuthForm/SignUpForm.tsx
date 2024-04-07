import React from "react";
import Image from "next/image";

import EmailInput from "@/components/elements/AuthPage/EmailInput";
import { useForm } from "react-hook-form";
import { IInputs } from "@/types/auth";

import styles from "@/styles/auth/index.module.scss";
import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import PhoneInput from "@/components/elements/AuthPage/PhoneInput";

const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const onSubmit = (data: IInputs) => {
    console.log(data);
    resetField("phone");
    resetField("email");
    resetField("password");

    switchForm();
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.h1}>Создать аккаунт</h1>
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
        <span className={styles.span}>
          или используйте свой email для регистрации
        </span>
        <PhoneInput register={register} errors={errors} />
        <EmailInput register={register} errors={errors} />
        <PasswordInput register={register} errors={errors} />
        <button className={styles.button}>Зарегистрировать</button>
      </form>
    </>
  );
};

export default SignUpForm;
