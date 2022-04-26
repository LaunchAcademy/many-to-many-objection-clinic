/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"

import Movie from "../models/Movie.js"
import Actor from "../models/Actor.js"
import Casting from "../models/Casting.js"

class Seeder {
  static async seed() {
    console.log("seeding...")
    const faceOff = await Movie.query().insert({ title: "Face Off" })
    const pulpFiction = await Movie.query().insert({ title: "Pulp Fiction" })
    const avengers = await Movie.query().insert({ title: "The Avengers" })
    const manOnTheMoon = await Movie.query().insert({ title: "Man on the Moon" })
    const mask = await Movie.query().insert({ title: "The Mask" })

    const travolta = await Actor.query().insert({ firstName: "John", lastName: "Travolta" })
    const jackson = await Actor.query().insert({ firstName: "Samuel", lastName: "Jackson" })
    const carrey = await Actor.query().insert({ firstName: "Jim", lastName: "Carrey" })

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

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
