const router = require('express').Router();
const { getAll, create, getById, updateById, deleteById } = require('../models/cliente');

// /clientes
router.get('/', async (req, res) => {
    // getAll()
    //     .then((rows) => {
    //         res.json(rows);
    //     })
    //     .catch((err) => console.log(err));

    try {
        const rows = await getAll();
        res.render('clientes/lista', {
            arrClientes: rows
        });
    } catch (err) {
        console.log(err);
    }
});

// /clientes/new
router.get('/new', (req, res) => {
    // Renderizar una vista (formulario.pug) que reprensente cada uno de los campos necesarios para crear un cliente
    res.render('clientes/formulario');
});

// /clientes/create
router.post('/create', async (req, res) => {
    console.log(req.body);
    const result = await create(req.body);
    console.log(result);
    res.redirect('/clientes');
});

// /clientes/edit/7
router.get('/edit/:idCliente', async (req, res) => {
    const cliente = await getById(req.params.idCliente);
    res.render('clientes/formularioEdit', { cliente });
});

// /clientes/update
router.post('/update', async (req, res) => {
    const result = await updateById(req.body);
    res.redirect('/clientes');
});

router.get('/delete/:idCliente', async (req, res) => {
    await deleteById(req.params.idCliente);
    res.redirect('/clientes');
});

module.exports = router;    