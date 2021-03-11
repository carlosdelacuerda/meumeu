const router = require('express').Router();
const { checkToken } = require('./middlewares');

const usersApiRouter = require('./api/users');
const usuariosApiRouter = require('./api/usuarios');
const tripsApiRouter = require('./api/trips');
const desiresApiRouter = require('./api/desires');
const tripCountryApiRouter = require('./api/trips');

// router.use('/users', checkToken, usersApiRouter);
router.use('/users', usersApiRouter);
router.use('/usuarios', usuariosApiRouter);
router.use('/trips', tripsApiRouter);
router.use('/desires', desiresApiRouter);
router.use('/trypByCountry', tripCountryApiRouter);



module.exports = router;