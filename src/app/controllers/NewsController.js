class NewsController {

    index(red, res) {

        //[GET] / news;
        res.render('news');

    };

    show(red, res) {
        res.send('new details');
    };

}

module.exports = new NewsController;