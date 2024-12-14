const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const path = require('path');

const corsOptions = {
  origin: ['https://protasker-server.vercel.app/'],
  methods: ['POST', 'GET'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public/browser')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/browser'));
});

const db = require('./app/models');

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

require('./app/routes/tasks.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
