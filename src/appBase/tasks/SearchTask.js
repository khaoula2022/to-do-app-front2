import React, { useState } from "react";

import FindInPageIcon from "@material-ui/icons/FindInPage";
import styles from "./SearchBar.module.css";

function SearchTask({ setTitle, title }) {
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

export default SearchTask;
