require('dotenv').config();

module.exports = {
  url: `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}${process.env.MONGODB_URI}`,
};
