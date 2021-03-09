const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users', (err, rows) => {
            if (err) {
                return reject(err);
            }
            resolve(rows);
        });
    });
}

const create = ({ nombre, direccion, apellidos, email, edad, sexo, cuota, dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO clientes (nombre, direccion, apellidos, email, edad, sexo, cuota, dni) values (?, ?, ?, ?, ?, ?, ?, ?)',
            [nombre, direccion, apellidos, email, edad, sexo, cuota, dni],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const getById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM clientes WHERE id = ?', [pId], (err, rows) => {
            if (err) return reject(err); // Excepción ERROR
            if (rows.length === 0) return resolve(null); // No se encuentra
            resolve(rows[0]);
        });
    });
}

const updateById = ({ id, nombre, apellidos, direccion, email, edad, sexo, cuota, dni }) => {
    return new Promise((resolve, reject) => {
        db.query(
            'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, cuota = ?, dni = ? where id = ?',
            [nombre, apellidos, direccion, email, edad, sexo, cuota, dni, id],
            (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
    });
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.query('delete from clientes where id = ?', [pId], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        })
    });
}

module.exports = {
    getAll, create, getById, updateById, deleteById
}