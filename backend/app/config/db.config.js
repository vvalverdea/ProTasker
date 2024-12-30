require('dotenv').config();

module.exports = {
  url: `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@cluster0.sm2cp.mongodb.net/protasker?retryWrites=true&w=majority&appName=Cluster0`,
};
