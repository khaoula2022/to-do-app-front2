import React from "react";
import styles from "./home.module.css";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function HomePage() {
  const history = useHistory();

  const useStyles = makeStyles((theme) => ({
    "@global": {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: "none",
      },
    },

    toolbar: {
      flexWrap: "wrap",
    },
    toolbarTitle: {
      flexGrow: 1,
    },
  }));
  return (
    <div className={styles.LandingPage}>
      <div className={styles.nav}>
        <div>
          <>
            <button
              className={styles.signupButton}
              onClick={() => history.push("/signup")}
            >
              Sign Up
            </button>
            or
            <button
              className={styles.signinButton}
              onClick={() => history.push("/signin")}
            >
              Sign in
            </button>
          </>
          <></>
        </div>
      </div>
      <p> welcome</p>
    </div>
  );
}

export default HomePage;
