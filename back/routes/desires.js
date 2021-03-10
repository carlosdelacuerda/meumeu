const router = require('express').Router();
const { getAll, create, getById, updateById, deleteById } = require('../models/desires');

// /users
router.get('/', async (req, res) => {
    // getAll()
    //     .then((rows) => {
    //         res.json(rows);
    //     })
    //     .catch((err) => console.log(err));

    try {
        const rows = await getAll();
        res.render('desires/list', {
            arrUsers: rows
        });
    } catch (err) {
        console.log(err);
    }
});

// /users/new
router.get('/new', (req, res) => {
    // Renderizar una vista (formulario.pug) que reprensente cada uno de los campos necesarios para crear un user
    res.render('desires/form');
});

// /users/create
router.post('/create', async (req, res) => {
    const result = await create(req.body);
    res.redirect('/users');
});

// /users/edit/7
router.get('/edit/:idUser', async (req, res) => {
    const user = await getById(req.params.idUser);
    res.render('users/formularioEdit', { user });
});

// /users/update
router.post('/update', async (req, res) => {
    const result = await updateById(req.body);
    res.redirect('/users');
});

router.get('/delete/:idUser', async (req, res) => {
    await deleteById(req.params.idUser);
    res.redirect('/users');
});

module.exports = router;    