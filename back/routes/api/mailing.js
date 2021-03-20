const { getAll, create, deleteByTripId, updateByTripId, getByCountry, getRecibed } = require('../../models/mailing');
const router = require('express').Router();

// Recupera todos los viajes y devuelve JSON
router.get('/', async (req, res) => {

    try {
        const mails = await getAll();
        res.json(mails);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// msn recibidos

router.get('/:recibed', async (req, res) => {

    try {
        const messagesRecibed= await getRecibed(req.params.fk_user_r);
        res.json(messagesRecibed);
    } catch (error) {
        res.json({ error: error.message });
    }
});

// // Crear un nuevo viaje
// router.post('/', async (req, res) => {
//     console.log(req.userId);
//     try {
//         console.log(req.body)
//         const result = await create(req.body);
//         res.json(result);
//     } catch (error) {
//         res.status(422).json({ error: error.message });
//     }
// });

// // Borro un viaje
// router.delete('/:idTrip', async (req, res) => {
//     try {
//         const result = await deleteByTripId(req.params.idTrip);
//         res.json(result);
//     } catch (error) {
//         res.status(422).json({ error: error.message });
//     }
// });

// // Actualizar
// router.put('/', async (req, res) => {
//     try {
//         const result = await updateByTripId(req.body);
//         res.json(result);
//     } catch (error) {
//         res.status(422).json({ error: error.message });
//     }
// });

module.exports = router;