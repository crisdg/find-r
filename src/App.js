import PageSearchResult from "./page-search-result.js";
import PageArtist from "./page-artist.js";
import PageHome from "./page-home.js";
import Layout from "./components/layout.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/busqueda" component={PageSearchResult} />
          <Route exact path="/artista" component={PageArtist} />
          <Route exact path="/" component={PageHome} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
