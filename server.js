require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person.routes');
const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());


app.use('/person', personRoutes)

app.get('/', (req, res) => {
    res.json({message: 'Oi Express!'});
})

const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

mongoose.connect(
    `mongodb+srv://${user}:${password}@cluster0.q4fgupv.mongodb.net/?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectamos ao MongoDB!');
    app.listen(3000);
})
.catch((err) => console.log(err))