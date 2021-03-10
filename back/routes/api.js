const router = require('express').Router();
const { checkToken } = require('./middlewares');

const usersApiRouter = require('./api/users');
const usuariosApiRouter = require('./api/usuarios');
const tripsApiRouter = require('./api/trips');

// router.use('/users', checkToken, usersApiRouter);
router.use('/users', checkToken, usersApiRouter);
router.use('/usuarios', usuariosApiRouter);
router.use('/trips', tripsApiRouter);


module.exports = router;