import React, { Component } from "react";
import SearchBar from "./components/search-bar.js";
import SimilarArtist from "./components/similar-artist.js";
import "./page-artist.css";
import { Fragment } from "react";

class PageSearchResult extends Component {
  state = {
    busqueda: "",
  };

  changeHandle = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Fragment>
        <SearchBar
          onChange={this.changeHandle}
          busqueda={this.state.busqueda}
        />
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <img
                src="https://img.discogs.com/z_zXFVoCPUfIrLzvkCjue1mlPrk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-7880465-1450799081-1691.jpeg.jpg"
                alt=""
                className="pic-artist margin-50"
              />
              <h2>Gustavo Cerati</h2>
              <p>
                Gustavo Adrián Cerati (Buenos Aires, 11 de agosto de
                1959-ibidem, 4 de septiembre de 2014)3​4​5​ fue un músico,
                cantautor, compositor y productor discográfico argentino que
                obtuvo reconocimiento internacional por haber sido el líder de
                la banda de rock Soda Stereo. Es considerado uno de los músicos
                más importantes, populares e influyentes del rock
                latinoamericano.
              </p>
            </div>
          </div>
        </div>

        <SimilarArtist />
      </Fragment>
    );
  }
}

export default PageSearchResult;
