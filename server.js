const express = require('express');
const mongoose = require('mongoose');

const TemperatureRouter = require('./route/Temperature');


var cors = require('cors')


const app = express();

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27017/express-mongoose-demo';
const port = process.env.PORT || 3000;


app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded());

//app.use(app.router);
//TemperatureRouter.initialize(app);

app.use('/Temperature',TemperatureRouter)

 
 mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
 .then(result => {
    console.log('Connected to MongoDB...')
    app.listen(port, () => console.log(`Server listens on port ${port}`));
 })
 .catch(err => {
   console.log(err);
 });