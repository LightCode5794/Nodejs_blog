const app = require('express');
const router = app.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

module.exports = router;