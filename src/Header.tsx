import React from "react";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import logo from "./logo.png";

interface HeaderProps {
  className?: string;
}

const useStyles = makeStyles({
  header: {
    /*     background: "linear-gradient(135deg, #1e5799 0%,#2989d8 0%,#7db9e8 90%);",
     */
    background: "#e6e6e6",
    padding: "12px",
    paddingLeft: "35px",
    paddingRight: "24px",
    display: "flex",
    alignItems: "center",
    boxShadow:
      "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55);",
  },
  branding: {
    display: "flex",
    textDecoration: "none",
    alignItems: "center",
  },
  items: {
    color: " #ff9800",
    paddingRight: "24px",
    textDecoration: "none",
  },
  logo: {
    background: "#e6e6e6",
    height: "35px",
  },
  vita: {
    color: " #ff9800",
    marginLeft: 5,
    fontSize: "40px",
  },

  filler: {
    flexGrow: 1,
  },
});

export const Header = ({ className }: HeaderProps) => {
  const classes = useStyles();

  return (
    <>
      <div className={cn(classes.header, className)}>
        <a href="/" className={classes.branding}>
          <img className={classes.logo} src={logo} alt="my-logo" />
          <div className={classes.vita}>VITA</div>
        </a>
        <div className={classes.filler} />
        <a href="/" className={classes.items}>
          Home
        </a>
        <a href="/Form" className={classes.items}>
          New CV
        </a>
        <a href="/" className={classes.items}>
          All CVs
        </a>
      </div>
    </>
  );
};
