const Rent = require('../../models/Rent');
const Student = require('../../models/Student');
const Copy = require('../../models/BookCopy');

module.exports = {
    async index(req, res) {
        try {
            const rents = await Rent.findAll();
            return res.json(rents);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async show(req, res) {
        try {
            const { rent_id } = req.params;
            if (!rent_id) {
                return res.status(400).json({ message: 'Invalid Rent Id' });
            }
            const rent = await Rent.findByPk(rent_id);
            if (!rent) {
                return res.json({ message: 'Rent not found' });
            }
            return res.json(rent);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async store(req, res) {
        try {
            const { copy_id, student_id, limit_date, withdrawn_date, price } = req.body;
            if (!limit_date) {
                return res.status(400).json({ message: 'Invalid Limit Date' });
            }
            if (!withdrawn_date) {
                return res.status(400).json({ message: 'Invalid Withdrawn Date' });
            }
            if (!price) {
                return res.status(400).json({ message: 'Invalid Price' });
            }
            const copy = await Copy.findByPk(copy_id);
            if (!copy) {
                return res.status(400).json({ message: 'Invalid Book Copy Id' });
            }
            const student = await Student.findByPk(student_id);
            if (!student) {
                return res.status(400).json({ message: 'Invalid Student Id' });
            }
            const rent = await Rent.create({ copy_id, student_id, limit_date, withdrawn_date, price });
            res.json(rent);
        } catch (error) {
            res.status(500).json({
                message: 'Internal Server Error',
                error,
            });
        }
    },

    async update(req, res) {
        try {
            const { copy_id, student_id, limit_date, withdrawn_date, price } = req.body;
            const { rent_id } = req.params;
            if (copy_id) {
                const copy = await Copy.findByPk(copy_id);
                if (!copy) {
                    return res.status(400).json({ message: 'Invalid Book Copy Id' });
                }
            }
            if (student_id) {
                const student = await Student.findByPk(student_id);
                if (!student) {
                    return res.status(400).json({ message: 'Invalid Student Id' });
                }
            }
            await Rent.update({ copy_id, student_id, limit_date, withdrawn_date, price }, {
                where: {
                    id: rent_id,
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
            const { rent_id } = req.params;
            if (!rent_id) {
                return res.status(400).json({ message: 'Invalid Rent Id' });
            }
            await Rent.destroy({
                where: {
                    id: rent_id,
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