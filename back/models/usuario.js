const create = ({ username, email, password }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'insert into usuarios (username, email, password, role, fecha_registro) values (?, ?, ?, ?, ?)',
            [username, email, password, 'REGULAR', new Date()],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            }
        )
    });
}

const getByEmail = (email) => {
    return new Promise((resolve, reject) => {

        //db.query('QUERY', [], (err, result) => { });

        db.query(
            'select * from usuarios where email = ?',
            [email],
            (err, rows) => {
                if (err) return reject(err);
                if (rows.length === 0) return resolve(null);
                resolve(rows[0]);
            });
    });
}

module.exports = {
    create, getByEmail
}
