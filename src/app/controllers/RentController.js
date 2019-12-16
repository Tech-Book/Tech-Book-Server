const Rent = require('../../models/Rent');
const Student = require('../../models/Student');
const Copy = require('../../models/BookCopy');

module.exports = {
  async index(req, res) {
    const rents = await Rent.findAll();
    return res.json(rents);
  },

  async show(req, res) {
    const { rent_id } = req.params;
    const rent = await Rent.findByPk(rent_id);
    if (!rent) {
      return res.json({ message: 'Rent not found' });
    }
    return res.json(rent);
  },

  async store(req, res) {
    const { copy_id, student_id, limit_date, withdrawn_date, price } = req.body;
    const copy = await Copy.findByPk(copy_id);
    if (!copy) {
      return res.status(400).json({ message: 'Invalid Book Copy Id' });
    }
    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(400).json({ message: 'Invalid Student Id' });
    }
    const rent = await Rent.create({
      copy_id,
      student_id,
      limit_date,
      withdrawn_date,
      price
    });
    res.json(rent);
  },

  async update(req, res) {
    const { copy_id, student_id, limit_date, withdrawn_date, price } = req.body;
    const { rent_id } = req.params;
    const copy = await Copy.findByPk(copy_id);
    if (!copy) {
      return res.status(400).json({ message: 'Invalid Book Copy Id' });
    }
    const student = await Student.findByPk(student_id);
    if (!student) {
      return res.status(400).json({ message: 'Invalid Student Id' });
    }
    await Rent.update(
      { copy_id, student_id, limit_date, withdrawn_date, price },
      {
        where: {
          id: rent_id
        }
      }
    );
    return res.send();
  },

  async destroy(req, res) {
    const { rent_id } = req.params;
    await Rent.destroy({
      where: {
        id: rent_id
      }
    });
    return res.send();
  }
};
