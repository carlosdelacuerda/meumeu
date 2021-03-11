const getAllCaprices = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM desires', (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

const create = ({ country, from, to, notes, fk_user }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO desires (country, from, to, notes, fk_user) values (?, ?, ?, ?, ?)',
            [country, from, to, notes, fk_user],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM desires WHERE id = ?', [pId], (err, rows) => {
            if (err) return reject(err); // Excepción ERROR
            if (rows.length === 0) return resolve(null); // No se encuentra
            resolve(rows[0]);
        });
    });
}

const updateById = ({ country, from, to, notes, fk_user }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update desires set country = ?, from = ?, to = ?, notes = ?, edad = ?, fk_id=? where id = ?',
            [country, from, to, notes, fk_user],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from desires where id = ?', [pId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

module.exports = {
    getAllCaprices, create, getById, updateById, deleteById
}