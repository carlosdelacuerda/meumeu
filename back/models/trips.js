const getAllTrips = () => {
    return new Promise((resolve, reject) => {
        db.query('select t.*, u.username, u.picture from meumeu.users u inner join meumeu.trips t on t.user_id = u.id', (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}


const getByCountry = (pCountry) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT TRIPS.*, USERS.* FROM TRIPS , USERS WHERE USERS.ID = TRIPS.USER_ID AND COUNTRY = ?',
        [pCountry], (err, rows) => {
            if (err) return reject(err);
            resolve(rows);
        });
    });
}


const create = ({ country, begining, ending, notes, user_id }) => {
    return new Promise((resolve, reject) => {
        db.query(
            "INSERT INTO trips (country, begining, ending, notes, user_id) values (?, ?, ?, ?, ?)",
            [country, begining, ending, notes, user_id], (err, result) => {
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
    getAllTrips, create, getByTripId, updateByTripId, deleteByTripId, getByCountry
}