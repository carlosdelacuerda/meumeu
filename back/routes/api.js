const router = require('express').Router();
const { checkToken } = require('./middlewares');

const clientesApiRouter = require('./api/clientes');
const usuariosApiRouter = require('./api/usuarios');

router.use('/clientes', checkToken, clientesApiRouter);
router.use('/usuarios', usuariosApiRouter);

module.exports = router;