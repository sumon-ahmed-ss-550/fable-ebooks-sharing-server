require("dotenv").config();

const config = {
  app: { port: process.env.PORT || 8000 },
  db: { url: process.env.MONGODB_URI },
};
module.exports = config;
