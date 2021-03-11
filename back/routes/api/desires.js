const { getAllCaprices, create, deleteById, updateById } = require('../../models/desires');
const router = require('express').Router();

// Recupera todos los deseos y devuelve JSON
router.get('/', async (req, res) => {


    try {
        const desires = await getAllCaprices();
        res.json(desires);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// Crear un nuevo deseo
// Los datos para crear el deseo, llegan a través del BODY
router.post('/', async (req, res) => {
    try {
        const result = await create(req.body);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

// Borro un deseo
router.delete('/:idDesire', async (req, res) => {
    try {
        const result = await deleteById(req.params.idDesire);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

// Actualizo un deseo
router.put('/', async (req, res) => {
    try {
        const result = await updateById(req.body);
        res.json(result);
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

module.exports = router;