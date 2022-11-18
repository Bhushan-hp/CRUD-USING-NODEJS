const connection = require('../database/db.connection');

module.exports = {
    allStudents: (req, res) => {

        connection.query("SELECT * FROM students", (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });
            } {
                res.send({ error: false, data: result })
            }
        });

    },

    admitStudents: (req, res) => {
        const { name, mobile, address } = req.body;
        connection.query(`INSERT INTO students(id, name , mobile , address) VALUES (0,'${name}','${mobile}','${address}')`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });
            } else {
                if (result.affectedRows >
                    0) {
                    res.send({ error: false, message: "New user created with Id " + result.insertId })
                } else {
                    res.send({ error: false, message: "New user not created" })
                }

            }
        })

    },

    updateStudent: (req, res) => {
        let id = req.params.id;
        let mobile = req.body.mobile;

        connection.query(`UPDATE students SET mobile = '${mobile}' WHERE id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });

            } else {
                if (result.affectedRows > 0) {
                    res.send({ error: false, message: "Mobile number Updated" })
                } else {
                    res.send({ error: false, message: "Mobile number Updated" })
                }

            }
        })
    },

    deletestudent: (req, res) => {
        let id = req.params.id;
        connection.query(`DELETE FROM students WHERE id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });
            } else {
                if (result.affectedRows > 0) {
                    res.send({ error: false, message: "student id removed" })
                } else {
                    res.send({ error: false, message: "student removed" })
                }

            }
        })
    },

    findstudent: (req, res) => {
        let id = req.params.id;
        connection.query(`SELECT * FROM students where id=${id}`, (err, result) => {
            if (err) {
                res.send({ error: true, message: err.message });
            } else {
                res.send({ error: false, data: result })
            }
        })
    }
}