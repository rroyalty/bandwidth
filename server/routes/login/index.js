const router = require('express').Router();
const userLoginRoutes = require('./userLoginRoutes');

router.use('/user', userLoginRoutes);

module.exports = router;
