import { React, Fragment } from "react";
import "./loading.css";

function Error(props) {
  return (
    <Fragment>
      <div className="upp">
        <div className="col-md-12 centrar">
          <h3>Error...{props.errorMensaje}</h3>
        </div>
      </div>
    </Fragment>
  );
}

export default Error;
