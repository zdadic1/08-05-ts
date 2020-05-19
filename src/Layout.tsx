import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
/* import tile from "./tile.png";
 */
interface LayoutProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    /*     backgroundImage: `url(${tile})`,
    backgroundRepeat: "repeat", */
    backgroundColor: "#e6e6e6",
  },
});

export const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles();
  return (
    <div className={cn(classes.layout)}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
