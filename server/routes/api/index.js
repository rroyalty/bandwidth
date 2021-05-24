const router = require('express').Router();
const userRoutes = require('./userRoutes');
const genreRoutes = require('./genreRoutes');
const instrumentRoutes = require('./instrumentRoutes');

router.use('/users', userRoutes);
router.use('/genres', genreRoutes);
router.use('/instruments', instrumentRoutes);

module.exports = router;
