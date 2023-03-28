const Course = require('../models/Course');
const { singleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: singleMongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[GET] /courses/create;
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /courses/store
    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/maxresdefault.jpg`;
        const newCourse = Course(formData);
        newCourse
            .save()
            .then(() => res.redirect(`/`))
            .catch((err) => {});
    }
}

module.exports = new CoursesController();
