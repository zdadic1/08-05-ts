import React from "react";
import { makeStyles } from "@material-ui/styles";
import cn from "classnames";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TextField } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Button } from "./Button";

interface FormProps {
  className?: string;
}

const useStyles = makeStyles({
  main: {
    background: "#e6e6e6",
    padding: "50px",
    display: "flex",
  },
  card: {
    background: "#e6e6e6",
    marginTop: "40px",
    marginBottom: "60px",
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "6px 6px 14px 0 rgba(0, 0, 0, 0.2), -8px -8px 18px 0 rgba(255, 255, 255, 0.55);",
    borderRadius: "40px",
    transition: "all .25s ease-in-out",
    "&:hover": {
      transform: "scale(1.008)",
    },
  },

  root: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  text: {
    width: "30%",
    margin: "10px",
  },
  divider: {
    marginBottom: "15px",
  },
  btncontainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  button: {
    justifyContent: "flex-end",
    marginLeft: "10px",
  },
  email: {
    width: "40%",
    margin: "10px",
  },
  address: {
    width: "50%",
    margin: "10px",
  },
  summary: {
    width: "60%",
    margin: "10px",
  },
});

export const Form = ({ className }: FormProps) => {
  const classes = useStyles();
  return (
    <>
      <div className={cn(classes.main, className)}>
        <Container maxWidth="md">
          <Typography variant="h3" component="h3" gutterBottom>
            Input CV info
          </Typography>

          {/*           <Divider className={cn(classes.divider, className)} />
           */}
          <div className={cn(classes.card, className)}>
            <Typography variant="h5" component="h2" gutterBottom>
              Basic info
            </Typography>
            <Divider className={cn(classes.divider, className)} />

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
              />
              <>
                <TextField
                  className={cn(classes.email, className)}
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                />
                <TextField
                  className={cn(classes.address, className)}
                  id="outlined-basic"
                  label="Current Address"
                  variant="outlined"
                />
              </>
              <TextField
                className={cn(classes.summary, className)}
                id="outlined-basic"
                label="Summary"
                variant="outlined"
                multiline
              />
            </form>
          </div>

          <div className={cn(classes.card, className)}>
            <Typography variant="h5" component="h2" gutterBottom>
              Experience
            </Typography>
            <Divider className={cn(classes.divider, className)} />

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Current Address"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Summary"
                variant="outlined"
              />
            </form>
          </div>
          <div className={cn(classes.card, className)}>
            <Typography variant="h5" component="h2" gutterBottom>
              Experience
            </Typography>
            <Divider className={cn(classes.divider, className)} />

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Current Address"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Summary"
                variant="outlined"
              />
            </form>
          </div>
          <div className={cn(classes.card, className)}>
            <Typography variant="h5" component="h2" gutterBottom>
              Experience
            </Typography>
            <Divider className={cn(classes.divider, className)} />

            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                type="number"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Current Address"
                variant="outlined"
              />
              <TextField
                className={cn(classes.text, className)}
                id="outlined-basic"
                label="Summary"
                variant="outlined"
              />
            </form>
          </div>

          <div className={cn(classes.btncontainer, className)}>
            <Button />
          </div>
        </Container>
      </div>
    </>
  );
};