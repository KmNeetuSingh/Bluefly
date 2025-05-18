const cors = require('cors');
const express = require('express');
require('dotenv').config();

const connection = require('./config/db');
const userRouter = require('./routes/user.routes');
const productRouter = require('./routes/product.routes');
const cartRouter = require('./routes/cart.routes');

const PORT = process.env.PORT || 3000
const server = express();

server.use(cors({
  origin: '*', // allow any origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
server.use(express.json());

server.use('/user', userRouter);
server.use('/product', productRouter);
server.use('/cart', cartRouter);

server.get('/health', (_, res) => {
  res.status(200).send('Health check done, Server is Running.');
});

async function startServer() {
  try {
    await connection;  // Make sure connection is a Promise or async function
    server.listen(PORT, () => {
      console.log(`Server is Running on port ${PORT} and DB is Connected.`);
    });
  } catch (error) {
    console.error('Failed to connect to DB:', error.message);
    process.exit(1); // Exit process if DB connection fails
  }
}

startServer();
