"use client";
import Image from "next/image";
import { MutableRefObject, useRef } from "react";

import SignUpForm from "../modules/AuthForm/SignUpForm";

import styles from "@/styles/auth/index.module.scss";
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
          <form className={styles.form}>
            <h1 className={styles.h1}>Войти</h1>
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
              или используйте свою учетную запись
            </span>
            <input className={styles.input} type="text" placeholder="Телефон" />
            <input
              className={styles.input}
              type="password"
              placeholder="Пароль"
            />
            <a href="#">Забыли пароль?</a>
            <button className={styles.button}>Войти</button>
          </form>
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
