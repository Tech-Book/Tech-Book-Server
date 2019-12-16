const Student = require('../../models/Student');

module.exports = {
    async index(req, res) {
        const students = await Student.findAll();
        return res.json(students);
    },

    async show(req, res) {
        const { student_id } = req.params;
        const student = await Student.findByPk(student_id);
        if (!student) {
            return res.json({ message: 'Student not found' });
        }
        return res.json(student);
    },

    async store(req, res) {
        const { login, password, name, phone } = req.body;
        const student = await Student.create({ login, password, name, phone });
        res.json(student);
    },

    async update(req, res) {
        const { student_id } = req.params;
        const { login, password, name, phone } = req.body;
        await Student.update({ login, password, name, phone }, {
            where: {
                id: student_id,
            }
        });
        return res.send();
    },

    async destroy(req, res) {
        const { student_id } = req.params;
        await Student.destroy({
            where: {
                id: student_id,
            }
        });
        return res.send();
    },
}