import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import styles from "./SearchBar.module.css";

function SearchPage({ setTitle, title }) {
  return (
    <div className={styles.header__search}>
      <FindInPageIcon></FindInPageIcon>
      <input
        placeholder="Type your keyword here "
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-16"
        disableUnderline
        fullWidth
      />
    </div>
  );
}
