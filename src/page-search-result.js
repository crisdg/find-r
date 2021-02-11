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

  componentWillMount() {
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", " ");

    this.fetchDataArtist(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + search
    );

    this.setState({
      busqueda: search,
    });

    console.log(search, "search desde willMounr PSR");
    console.log(this.state.busqueda, "desde willmount PSR");
  }

  fetchDataArtist = (url) => {
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c5bec6501cmsh6f87851df3a24d1p10fb49jsnb908329e649b",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ artistId: data.data[0].artist["id"] });
      })

      .catch((err) => {
        console.error(err);
      });
  };
  handleChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
    console.log(this.state.busqueda, "desde page-search result handliChange");
    console.log(e.target.value, "desde handleChange psr");
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
