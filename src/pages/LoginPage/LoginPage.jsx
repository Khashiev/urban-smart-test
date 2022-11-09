import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOGIN, PASSWORD } from "../../constants/constants";
import { login, password } from "../../store/auth/actions";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const state = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handlerLogin = (event) => {
    dispatch(login(LOGIN, event.target.value));
  };

  const handlerPassword = (event) => {
    dispatch(password(PASSWORD, event.target.value));
  };

  return (
    <form className={styles.root}>
      <h1>Авторизация</h1>
      <input
        onChange={handlerLogin}
        className={styles.input}
        type="text"
        placeholder="логин"
      />
      <input
        onChange={handlerPassword}
        className={styles.input}
        type="password"
        placeholder="пароль"
      />
      <Link
        className={
          state.login === "developer21" && state.password === "123456"
            ? styles.btn
            : `${styles.btn_disabled} ${styles.btn}` 
        }
        to="/profile">
        Войти
      </Link>
    </form>
  );
};

export default LoginPage;
