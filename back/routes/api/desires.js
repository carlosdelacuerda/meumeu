const { getAll, create, deleteById, updateById } = require('../../models/desires');
const router = require('express').Router();

// Recupera todos los clientes y devuelve JSON
router.get('/', async (req, res) => {

    // Id de usuario inyectado por el Middleware checkToken!
    console.log(req.userId);

    try {
        const desires = await getAll();
        res.json(desires);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// Crear un nuevo cliente
// Los datos para crear el cliente, me llegan a través del BODY
router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

// Borro un cliente
router.delete('/:iddesire', async (req, res) => {
    try {
        const result = await deleteById(req.params.iddesire);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

// Actualizo un cliente
router.put('/', async (req, res) => {
    try {
        const result = await updateById(req.body);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

module.exports = router;