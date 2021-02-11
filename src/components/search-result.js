import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import Loading from "./loading.js";
import Error from "./error.js";
import { Fragment } from "react";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    errorMensaje: {
      error: {},
    },
    data: {
      data: [],
    },

    dataArtist: {
      data: [],
    },
  };

  componentWillReceiveProps = (e) => {
    let artistId = e.artistId;

    this.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/artist/" + artistId + "/related"
    );
  };

  fetchData = (url) => {
    this.setState({
      loading: true,
    });
    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "c5bec6501cmsh6f87851df3a24d1p10fb49jsnb908329e649b",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          this.setState({
            loading: false,
            error: true,
            errorMensaje: data.error.message,
          });
        } else {
          this.setState({
            loading: false,
            data: data,
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    return (
      <Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row">
            {this.state.data.data.map((artist, i) => {
              return (
                <ArtistCard
                  img={artist.picture_medium}
                  titulo={artist.name}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SearchResult;
