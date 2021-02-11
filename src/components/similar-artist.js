import React from "react";
import ArtistCard from "./artist-card.js";
import "../page-artist.css";
import { Fragment } from "react";

class SimilarArtist extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="row centrar top-50">
          <div className="col-md-12">
            <h5>Similar Artist</h5>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="artist" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="artist" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="artist" />
          </div>
          <div className="col-md-3">
            <ArtistCard img="http://placehold.it/350x350" titulo="artist" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SimilarArtist;
