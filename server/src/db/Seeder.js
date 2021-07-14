/* eslint-disable no-console */
import { connection } from "../boot.js"
import configuration from "../config.js"

import Movie from "../models/Movie.js"
import Actor from "../models/Actor.js"
import Casting from "../models/Casting.js"

class Seeder {
  static async seed() {
    console.log("seeding...")
    const faceOff = await Movie.query().insertAndFetch({ title: "Face / Off" })
    const pulpFiction = await Movie.query().insertAndFetch({ title: "Pulp Fiction" })
    const avengers = await Movie.query().insertAndFetch({ title: "The Avengers" })

    const travolta = await Actor.query().insertAndFetch({ firstName: "John", lastName: "Travolta" })
    const jackson = await Actor.query().insertAndFetch({ firstName: "Samuel", lastName: "Jackson" })

    await faceOff.$relatedQuery("actors").insert({ firstName: "Nicolas", lastName: "Cage" })
    await faceOff.$relatedQuery("actors").relate(travolta)

    await pulpFiction.$relatedQuery("actors").insert({ firstName: "Uma", lastName: "Thurman" })
    await pulpFiction.$relatedQuery("actors").relate(jackson)
    await pulpFiction.$relatedQuery("actors").relate(travolta)

    await avengers.$relatedQuery("actors").insert({ firstName: "Chris", lastName: "Evans" })
    await avengers.$relatedQuery("actors").insert({ firstName: "Scarlett", lastName: "Johansson" })
    await avengers.$relatedQuery("actors").relate(jackson)

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
