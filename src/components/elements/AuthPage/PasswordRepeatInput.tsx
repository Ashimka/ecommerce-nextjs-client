import { IAuthPageInput } from "@/types/auth";

import styles from "@/styles/auth/index.module.scss";

const PasswordRepeatInput = ({ register, errors }: IAuthPageInput) => {
  return (
    <label className={styles.form_label} htmlFor="password">
      <input
        {...register("passwordRepeat", {
          required: "Введите пароль!",
          minLength: 6,
          maxLength: 20,
        })}
        className={styles.input}
        type="password"
        placeholder="Повторите пароль"
        minLength={6}
      />
      {errors.passwordRepeat && (
        <span className={styles.error_alert}>
          {errors.passwordRepeat?.message}
        </span>
      )}
      {errors.passwordRepeat && errors.passwordRepeat.type === "minLength" && (
        <span className={styles.error_alert}>Минимум 6 символа!</span>
      )}
      {errors.passwordRepeat && errors.passwordRepeat.type === "maxLength" && (
        <span className={styles.error_alert}>Не более 20 символов!</span>
      )}
    </label>
  );
};

export default PasswordRepeatInput;
