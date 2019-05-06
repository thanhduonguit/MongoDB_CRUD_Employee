require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/employeeController')

const app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use('/employee', employeeController);

// View engine setup
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs())
app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3010
app.listen(PORT, () => console.log(`Server is starting on port ${PORT}`));