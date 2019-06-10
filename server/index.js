const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const mockDataService = require('./dataService/mockDataService');
const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');
const { resolve } = require('path');

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: { dataService: mockDataService },
  playground: {
    endpoint: `http://localhost:${port}/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
});

const app = express();
server.applyMiddleware({ app });

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
app.listen(port, host);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);
