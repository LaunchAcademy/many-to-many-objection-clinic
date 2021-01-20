const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development:
        "postgres://postgres:postgres@localhost:5432/many_to_many_objection_clinic_development",
      test: "postgres://postgres:postgres@localhost:5432/many_to_many_objection_clinic_test"
    }[nodeEnv] || process.env.DATABASE_URL
  )
}

module.exports = getDatabaseUrl
