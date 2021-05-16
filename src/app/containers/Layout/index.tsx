import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "../Counter";
import TableList from "../TableList";
import withLayout from "./components/withLayout";

interface IProps {}

const Layout = (props: IProps) => {
  return (
    <Router>
      <Route
        exact
        path="/"
        component={(props: any) => withLayout(<Counter />, "counter")}
      />
      <Route
        path="/list"
        component={(props: any) => withLayout(<TableList />, "list")}
      />
    </Router>
  );
};

export default Layout;
