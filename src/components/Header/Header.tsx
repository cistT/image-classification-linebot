import { Typography } from "@mui/material";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles["header"]}>
      <Typography variant="h1" component="h2" className={styles["app-name"]}>
        ビンゴアプリ
      </Typography>
    </header>
  );
};

export default Header;
