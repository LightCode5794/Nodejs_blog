const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function routes(app) {
    // app.get('/', (req, res) => {
    //     res.render('home');
    // });

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);

    app.use('/news', newsRouter);
    // app.get('/news', (req, res) => {
    //     res.render('news');

    // })

    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send('');
    // });
}

module.exports = routes;
