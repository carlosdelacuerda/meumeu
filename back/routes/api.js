const router = require('express').Router();
const { checkToken } = require('./middlewares');

const usersApiRouter = require('./api/users');
const tripsApiRouter = require('./api/trips');
const desiresApiRouter = require('./api/desires');
const tripCountryApiRouter = require('./api/trips');
const mailingApiRouter = require('./api/mailing');
const messageRecibedApiRouter = require('./api/mailing');

// router.use('/mailing', checkToken, mailingApiRouter);
router.use('/mailing', mailingApiRouter);
router.use('/users', usersApiRouter);
router.use('/trips', tripsApiRouter);
router.use('/desires', desiresApiRouter);
router.use('/trypByCountry', tripCountryApiRouter);
router.use('/messageRecibed', messageRecibedApiRouter);



module.exports = router;