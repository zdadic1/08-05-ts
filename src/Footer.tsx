import React from "react";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";

interface FooterProps {
  className?: string;
}

const useStyles = makeStyles({
  footer: {
    textAlign: "center",
    marginTop: "auto",
    paddingBottom: "14px",
    backgroundColor: "#e6e6e6",
    color: " #ff9800",
  },
  a: {
    textDecoration: "none",
    color: " #ff9800",
  },
});

export const Footer = ({ className }: FooterProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={cn(classes.footer, className)}>
        Copyright &copy;{" "}
        <a href="/" className={classes.a}>
          Testis d.o.o.{" "}
        </a>
        All rights reserved
      </div>
    </>
  );
};
