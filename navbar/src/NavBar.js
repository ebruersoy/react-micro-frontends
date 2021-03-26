import React from "react";
import { BrowserRouter, Link, Switch, Route, Redirect } from "react-router-dom";
const EpisodesPage = React.lazy(() => import("episode/EpisodesPage"));
const LocationsPage = React.lazy(() => import("location/LocationsPage"));
import "./index.css";

export default function NavBar(props) {
  return (
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/episode" className="link">
            By Episode
          </Link>
          <Link to="/location" className="link">
            By Location
          </Link>
        </nav>
        <Switch>
          <Route path="/episode">
            <EpisodesPage />{" "}
          </Route>
          <Route path="/location">
            <LocationsPage />{" "}
          </Route>
          <Redirect from="/" to="/episode" />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
}
