import React from "react";
import { Home } from "./Home";
import { Form } from "./Form";
import { Layout } from "./Layout";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Layout>
      <Router>
        <Link to="/Home"></Link>
        <Route path="/" exact component={Home} />
        <Link to="/Form"></Link>
        <Route path="/Form" exact component={Form} />
      </Router>
    </Layout>
  );
};
