import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import TopBar from "./TopBar.js"
import MoviesListPage from "./MoviesListPage.js"
import MovieShowPage from "./MovieShowPage.js"
import ActorShowPage from "./ActorShowPage.js"
import ActorsListPage from "./ActorsListPage.js"
import GenresListPage from "./GenresListPage.js"
import GenreShowPage from "./GenreShowPage.js"

import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {
  return (
    <BrowserRouter>
    <TopBar />
      <Switch>
        <Route exact path="/" component={GenresListPage} />
        <Route exact path="/genres" component={GenresListPage} />
        <Route exact path="/genres/:id" component={GenreShowPage} />
        <Route exact path="/actors" component={ActorsListPage} />
        <Route exact path="/actors/:id" component={ActorShowPage} />
        <Route exact path="/movies" component={MoviesListPage} />
        <Route exact path="/movies/:id" component={MovieShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
