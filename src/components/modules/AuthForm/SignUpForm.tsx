"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";

import EmailInput from "@/components/elements/AuthPage/EmailInput";
import PasswordInput from "@/components/elements/AuthPage/PasswordInput";
import PhoneInput from "@/components/elements/AuthPage/PhoneInput";

import { signUpFn } from "@/api/auth";
import { IInputs } from "@/types/auth";
import styles from "@/styles/auth/index.module.scss";
import PasswordRepeatInput from "@/components/elements/AuthPage/PasswordRepeatInput";
// import { toast } from "react-toastify";

const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<IInputs>();

  const onSubmit = async (data: IInputs) => {
    try {
      const userData = await signUpFn({
        url: "/auth/register",
        phone: data.phone,
        email: data.email,
        password: data.password,
        passwordRepeat: data.passwordRepeat,
      });
      console.log(userData);

      resetField("phone");
      resetField("email");
      resetField("password");

      switchForm();
    } catch (error) {
      // toast.error((error as Error).message);
    }
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
        <PasswordRepeatInput register={register} errors={errors} />
        <button className={styles.button}>Зарегистрировать</button>
      </form>
    </>
  );
};

export default SignUpForm;
