import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import MoviesListPage from "./MoviesListPage.js"
import MovieShowPage from "./MovieShowPage.js"
import ActorShowPage from "./ActorShowPage.js"
import ActorsListPage from "./ActorsListPage.js"

import { hot } from "react-hot-loader/root"

import "../assets/scss/main.scss"

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MoviesListPage} />
        <Route exact path="/actors" component={ActorsListPage} />
        <Route exact path="/actors/:id" component={ActorShowPage} />
        <Route exact path="/movies" component={MoviesListPage} />
        <Route exact path="/movies/:id" component={MovieShowPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default hot(App)
