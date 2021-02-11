import { React, Fragment } from "react";
import Footer from "./footer.js";

function Layout(props) {
  const childrens = props.children;
  return (
    <Fragment>
      {childrens}
      <Footer />
    </Fragment>
  );
}

export default Layout;
