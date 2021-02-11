import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Fragment } from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.busqueda, "desde handle Searchbar");
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div className="row barra">
          <div className="col-md-2">
            <Link to="/">
              <img className="logo-barra" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-4">
            <form name="searchForm" onSubmit={this.handleSubmit}>
              <div className="busqueda">
                <input
                  className="input"
                  name="busqueda"
                  type="text"
                  id="buscar"
                  placeholder="Busca una banda"
                  value={this.props.busqueda}
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default SearchBar;
