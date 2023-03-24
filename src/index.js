const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

//Middleware
app.use(
    express.urlencoded({
        // Xử lý post dữ liệu từ form
        extended: true,
    }),
);
app.use(express.json()); // Xử lý post dữ liệu từ các thằng như XMLHttpRequest, fetch, axios,

// template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('vie            w engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//routes i  nit
routes(         app);

                app.listen(port, () => {
                    console.log(`               Example app listening on port ${port}`);
                });
