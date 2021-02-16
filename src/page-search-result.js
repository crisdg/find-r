import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Fragment } from "react";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
    artistId: "",
  };

  componentDidMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.setState({
      busqueda: search,
    });
  }

  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          onChange={this.handleChange}
          busqueda={this.state.busqueda}
        />
        <SearchResult
          busqueda={this.state.busqueda}
          artistId={this.state.artistId}
        />
      </Fragment>
    );
  }
}

export default PageSearchResult;
