# Learning Goals

- Create the necessary migrations for a many-to-many association
- Discover how to configure a many-to-many association on the model level in order to more easily query related records
- Examine how we can query effectively once the appropriate associations have been setup

## Getting Setup

```no-highlight
yarn install
createdb many_to_many_objection_clinic_development
yarn run dev
```

For this exercise, the React files and code have already been created for you. Navigating to <http://localhost:3000> should show you the text "Feature Films".

## Instructions

1. Create a migration for a `movies` table. A movie should have a required `title` (string). Ensure you can create a movie.

2. Create a migration for an `actors` table. Each actor is required to have a `firstName` (string) and a `lastName` (string). Ensure you can create an actor.

3. Now it's time to make sure we can associate an actor to the many movies they star in and a movie with the many actors who make up its cast. This calls for a join table! Let's create and run a migration for a `castings` table.

4. Update the models so we can query the associations correctly. After they have been updated let's test it out in the console and add some more movies and actors!

5. Lastly, both of the `/api/v1`routers will need to have their show endpoints updated. Currently, they are returning an object in the correct format, but we will actually want to query the database and return the correct record with any relevant associations.
