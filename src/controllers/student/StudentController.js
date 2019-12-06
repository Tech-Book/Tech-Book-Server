const Student = require('../../models/Student');

module.exports = {
    async index(req, res) {
        try {
            const students = await Student.findAll();
            return res.json(students);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async show(req, res) {
        try {
            const { student_id } = req.params;
            const student = await Student.findByPk(student_id);
            if (!student) {
                return res.json({ message: 'Student not found' });
            }
            return res.json(student);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async store(req, res) {
        try {
            const { login, password, name, phone } = req.body;
            const student = await Student.create({ login, password, name, phone });
            res.json(student);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async update(req, res) {
        try {
            const { student_id } = req.params;
            const { login, password, name, phone } = req.body;
            await Student.update({ login, password, name, phone }, {
                where: {
                    id: student_id,
                }
            });
            return res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async destroy(req, res) {
        try {
            const { student_id } = req.params;
            await Student.destroy({
                where: {
                    id: student_id,
                }
            });
            return res.send();
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },
}