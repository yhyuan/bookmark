module.exports = {
  development: {
    url: "postgres://bookmark:bookmark@localhost:5432/bookmark",
    dialect: "postgres"
  },
  test: {
    url: process.env.DATABASE_URL || "postgres://bookmark:bookmark@localhost:5432/bookmark_test",
    dialect: "postgres"
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres"
  }
}
