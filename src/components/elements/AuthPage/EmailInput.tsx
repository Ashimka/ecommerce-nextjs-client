import { IAuthPageInput } from "@/types/auth";
import React from "react";

import styles from "@/styles/auth/index.module.scss";

const EmailInput = ({ register, errors }: IAuthPageInput) => {
  return (
    <>
      <label className={styles.form_label} htmlFor="email">
        <input
          {...register("email", {
            required: "Введите Email!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Неправильный Email!",
            },
          })}
          className={styles.input}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <span className={styles.error_alert}>{errors.email?.message}</span>
        )}
      </label>
    </>
  );
};

export default EmailInput;
