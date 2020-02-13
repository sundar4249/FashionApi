const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const categoryRouter = require('./routes/category');
const userRouter = require('./routes/users');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const auth = require('./auth');
const bannerroute = require('./routes/bannerImages');
const cors = require('cors');
const item = require('./routes/items');
const shoes = require('./routes/Shoes');


const app = express();
app.use(morgan('tiny'));
app.use(express.json());
app.options('*', cors());
app.use(express.urlencoded({extended: true }));

app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
    .then((db) => {
        console.log("Successfully connected to MongodB server");
    }, (err) => console.log(err));

app.use('/users', userRouter);
app.use('/upload', uploadRouter);
app.use('/item',item);
app.use('/banner',bannerroute);
app.use('/shoes',shoes);
app.use(auth.verifyUser);
app.use('/categories', categoryRouter);


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.statusCode = 500;
    res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});
