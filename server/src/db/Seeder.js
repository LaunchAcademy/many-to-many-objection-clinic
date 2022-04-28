/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"

import { Movie, Actor, Genre } from "../models/index.js"

class Seeder {
  static async seed() {
    console.log("seeding...")

    const action = await Genre.query().insert({ name: "Action" })
    const drama = await Genre.query().insert({ name: "Drama" })
    const comedy = await Genre.query().insert({ name: "Comedy" })

    const faceOff = await Movie.query().insert({
      title: "Face Off",
      releaseYear: 1997,
      genreId: action.id
    })
    const pulpFiction = await Movie.query().insert({
      title: "Pulp Fiction",
      releaseYear: 1994,
      genreId: drama.id
    })
    const avengers = await Movie.query().insert({
      title: "The Avengers",
      releaseYear: 2012,
      genreId: action.id
    })
    const manOnTheMoon = await Movie.query().insert({
      title: "Man on the Moon",
      releaseYear: 1999,
      genreId: drama.id
    })
    const mask = await Movie.query().insert({
      title: "The Mask",
      releaseYear: 1994,
      genreId: comedy.id
    })
    const almostFamous = await Movie.query().insert({
      title: "Almost Famous",
      releaseYear: 2000,
      genreId: drama.id
    })
    const yesMan = await Movie.query().insert({
      title: "Yes Man",
      releaseYear: 2008,
      genreId: comedy.id
    })

    const travolta = await Actor.query().insert({ firstName: "John", lastName: "Travolta" })
    const jackson = await Actor.query().insert({ firstName: "Samuel", lastName: "Jackson" })
    const carrey = await Actor.query().insert({ firstName: "Jim", lastName: "Carrey" })
    const deschanel = await Actor.query().insert({ firstName: "Zooey", lastName: "Deschanel" })

    await faceOff.$relatedQuery("actors").insert({ firstName: "Nicolas", lastName: "Cage" })
    await faceOff.$relatedQuery("actors").relate(travolta)

    await pulpFiction.$relatedQuery("actors").insert({ firstName: "Uma", lastName: "Thurman" })
    await pulpFiction.$relatedQuery("actors").relate(jackson)
    await pulpFiction.$relatedQuery("actors").relate(travolta)

    await avengers.$relatedQuery("actors").insert({ firstName: "Chris", lastName: "Evans" })
    await avengers.$relatedQuery("actors").insert({ firstName: "Scarlett", lastName: "Johansson" })
    await avengers.$relatedQuery("actors").relate(jackson)

    await mask.$relatedQuery("actors").insert({ firstName: "Cameron", lastName: "Diaz" })
    await mask.$relatedQuery("actors").relate(carrey)

    await manOnTheMoon.$relatedQuery("actors").insert({ firstName: "Danny", lastName: "DeVito" })
    await manOnTheMoon.$relatedQuery("actors").insert({ firstName: "Courtney", lastName: "Love" })
    await manOnTheMoon.$relatedQuery("actors").relate(carrey)

    await almostFamous.$relatedQuery("actors").insert({ firstName: "Kate", lastName: "Hudson" })
    await almostFamous
      .$relatedQuery("actors")
      .insert({ firstName: "Frances", lastName: "McDormand" })
    await almostFamous.$relatedQuery("actors").relate(deschanel)

    await yesMan.$relatedQuery("actors").insert({ firstName: "Bradley", lastName: "Cooper" })
    await yesMan.$relatedQuery("actors").relate(carrey)
    await yesMan.$relatedQuery("actors").relate(deschanel)

    await pulpFiction.$relatedQuery("reviews").insert({ title: "Best movie ever!", rating: 5 })
    await faceOff
      .$relatedQuery("reviews")
      .insert({ title: "SO weird", content: "gotta love Nick Cage though", rating: 2 })
    await manOnTheMoon
      .$relatedQuery("reviews")
      .insert({ title: "Wow!", content: "Jim Carrey at his best", rating: 5 })
    await manOnTheMoon
      .$relatedQuery("reviews")
      .insert({ title: "Moving Movie", content: "See what I did there?", rating: 4 })
    await mask.$relatedQuery("reviews").insert({ title: "SMOKIN'", rating: 3 })

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
