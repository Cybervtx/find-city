const express = require('express');
const mongoose = require('mongoose');
const cityRoutes = require('./src/routes/cityRoutes');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/cities', cityRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});