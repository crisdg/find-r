import React from "react";
import "./page-home.css";
import logo from "./logo.svg";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };

  onChange = (e) => {
    this.setState({ busqueda: e.target.value });
  };
  state = {
    busqueda: "",
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="logo" id="logo" />
            <form name="searchForm" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  className="input"
                  name="busqueda"
                  type="text"
                  id="buscar"
                  placeholder="Busca una banda"
                  value={this.props.busqueda}
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button type="submit" className="btng">
                  Search similar artist
                </button>
                <button className="btng">DevRock</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default PageHome;
