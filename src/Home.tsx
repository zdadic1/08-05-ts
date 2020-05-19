import React from "react";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

interface HomeProps {
  className?: string;
}

const useStyles = makeStyles({
  main: {
    padding: 150,
    background: "#e6e6e6",
  },
});

export const Home = ({ className }: HomeProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={cn(classes.main, className)}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h3" gutterBottom>
            Create CV / Export *.pdf
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            {
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
            }
          </Typography>
          <Typography variant="body1">
            Something little extra for you to look at.
          </Typography>
        </Container>
      </div>
    </>
  );
};
