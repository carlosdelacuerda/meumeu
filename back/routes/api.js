const router = require('express').Router();
const { checkToken } = require('./middlewares');

const clientesApiRouter = require('./api/clientes');
const usuariosApiRouter = require('./api/usuarios');
const tripsApiRouter = require('./api/trips');

// router.use('/clientes', checkToken, clientesApiRouter);
router.use('/clientes', checkToken, clientesApiRouter);
router.use('/usuarios', usuariosApiRouter);
router.use('/trips', tripsApiRouter);

router.use('/trips', tripsApiRouter);

module.exports = router;