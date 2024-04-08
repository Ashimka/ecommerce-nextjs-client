"use client";
import { MutableRefObject, useRef } from "react";

import SignUpForm from "../modules/AuthForm/SignUpForm";

import styles from "@/styles/auth/index.module.scss";
import SignInForm from "../modules/AuthForm/SingInForm";
const AuthPage = () => {
  const container = useRef() as MutableRefObject<HTMLDivElement>;

  const switchForm = () => {
    container.current.classList.toggle(styles.right_panel_active);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container} ref={container} id="container">
        <div className={`${styles.form_container} ${styles.sign_up_container}`}>
          <SignUpForm switchForm={switchForm} />
        </div>
        <div className={`${styles.form_container} ${styles.sign_in_container}`}>
          <SignInForm />
        </div>
        <div className={styles.overlay_container}>
          <div className={styles.overlay}>
            <div className={`${styles.overlay_panel} ${styles.overlay_left}`}>
              <h1 className={styles.h1}>Добро пожаловать!</h1>
              <p className={styles.p}>Зарегистрированны? Войдите</p>
              <button
                className={`${styles.button} ${styles.ghost}`}
                onClick={switchForm}
                id="signIn"
              >
                Вход
              </button>
            </div>
            <div className={`${styles.overlay_panel} ${styles.overlay_right}`}>
              <h1 className={styles.h1}>Привет!</h1>
              <p className={styles.p}>Зарегистрируйтесь на сайте</p>
              <button
                className={`${styles.button} ${styles.ghost}`}
                onClick={switchForm}
                id="signUp"
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthPage;
