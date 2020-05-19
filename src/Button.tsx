import React from "react";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import save from "./save.png";

interface ButtonProps {
  className?: string;
}

const useStyles = makeStyles({
  button: {
    outline: "none;",
    border: "none;",
    background: "#e6e6e6",
    marginTop: "40px",
    marginBottom: "60px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55);",
    borderRadius: "100px",
    "&:active": {
      outline: "none;",
      border: "none;",
      boxShadow:
        "inset 6px 6px 10px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0.5);",
    },
    "&:hover": {},
  },
});

export const Button = ({ className }: ButtonProps) => {
  const classes = useStyles();
  return (
    <>
      <button className={cn(classes.button, className)}>
        <img src={save} alt="save" />
      </button>
    </>
  );
};
