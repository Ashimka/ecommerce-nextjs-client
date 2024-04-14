"use client";
import React, { MutableRefObject, useRef } from "react";
import SignInForm from "@/components/modules/AuthForm/SingInForm";
import SignUpForm from "@/components/modules/AuthForm/SignUpForm";

import styles from "@/styles/auth/index.module.scss";

const AuthPage = () => {
  const [switchForm, setSwitchForm] = React.useState("login");
  const login = useRef() as MutableRefObject<HTMLDivElement>;
  const register = useRef() as MutableRefObject<HTMLDivElement>;

  const switchFormLogin = () => {
    if (switchForm === "login") {
      return;
    }
    setSwitchForm((prev) => (prev = "login"));

    register.current.classList.toggle(styles.inactive);
    login.current.classList.toggle(styles.inactive);
  };

  const switchFormRegister = () => {
    if (switchForm === "register") {
      return;
    }

    setSwitchForm((prev) => (prev = "register"));

    register.current.classList.toggle(styles.inactive);
    login.current.classList.toggle(styles.inactive);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.form_container}>
          <div className={styles.form_header}>
            <div className={styles.item} ref={login} onClick={switchFormLogin}>
              Вход
            </div>
            <div
              className={`${styles.item} ${styles.inactive}`}
              ref={register}
              onClick={switchFormRegister}
            >
              Регистрация
            </div>
          </div>
          {switchForm === "login" && <SignInForm />}
          {switchForm === "register" && <SignUpForm />}
        </div>
      </div>
    </>
  );
};

export default AuthPage;
