import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/router';

const app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'../src/views'));


mongoose.connect('mongodb://127.0.0.1:27017/CRUD-app').then(() => {
    console.log('mongoose connected');
}).catch(( error ) => console.log(error));


app.use(express.json());
app.use('/', router)

app.listen(7000,() => {
    console.log(`server is running http://localhost:7000`)
});