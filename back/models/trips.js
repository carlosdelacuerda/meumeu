const getAllTrips = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM trips', (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}


const createTrip = ({ country, from, to, notes, fk_user }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO trips (country, from, to, notes, fk_user) values (?, ?, ?, ?, ?)',
            [country, from, to, notes, fk_user],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const getByTripId = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM trips WHERE id = ?', [pId], (err, rows) => {
            if (err) return reject(err); 
            if (rows.length === 0) return resolve(null);
            resolve(rows[0]);
        });
    });
}

const getByCountry = (pCountry) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM trips WHERE country = ?', [pCountry], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}

const updateByTripId = ({ country, from, to, notes, fk_user }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update trips set country = ?, from = ?, to = ?, notes = ?, edad = ?, fk_id=? where id = ?',
            [country, from, to, notes, fk_user],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const deleteByTripId = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from trips where id = ?', [pId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

module.exports = {
    getAllTrips, createTrip, getByTripId, updateByTripId, deleteByTripId, getByCountry
}