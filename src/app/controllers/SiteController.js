const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class Sitecontroller {
    //[GET] / home;
    index(req, res, next) {
        // res.send('ccc');
        Course.find({})
            .then(
                (courses) => res.json(courses),
                // res.render('home', {
                //     courses: multipleMongooseToObject(courses),
                // }),
            )
            .catch(next);
    }
    //[GET] / search;
    search(req, res) {
        res.render('search');
    }
}
module.exports = new Sitecontroller();
