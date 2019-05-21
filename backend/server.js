const http = require('http');

const mongoose = require('mongoose');

const { PORT, NODE_ENV } = process.env;

mongoose.connect(process.env.MONGO_DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.Promise = global.Promise;

mongoose.connection.on('error', err => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

const app = require('./app');

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Node App running → PORT ${PORT} in ${NODE_ENV}!`);
});
