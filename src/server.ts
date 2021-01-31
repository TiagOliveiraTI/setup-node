import express from 'express';
import '@controllers/UsersController';

const app = express();

app.get('/', (req, res) => {
  return res.json({message: 'Hello World!!!'})
});

app.listen(process.env.PORT || 3000);
