const resolvers = {
  Query: {
    hello: () => "Hello world!",
    // user: () => {
    //   return {
    //     id: 1,
    //     name: "John Doe",
    //     email: "email@test.com",
    //   }
    // },
  },
}

module.exports = { resolvers }
