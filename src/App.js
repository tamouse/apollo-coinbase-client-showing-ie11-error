import React from "react"
import ApolloClient from "apollo-boost"
import { ApolloProvider, Query } from "react-apollo"
import gql from "graphql-tag"

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>
        My first Apollo app{" "}
        <span role="img" aria-label="emoji rocket ship, UTF8 character ROCKET">
          🚀
        </span>
      </h1>
      <ExchangeRates />
    </div>
  </ApolloProvider>
)
export default App

const ExchangeRates = () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error :(</p>

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))
    }}
  </Query>
)
