const Student = require('../models/Student');

class StudentController {
  async index(ctx, next) {
    const students = await Student.findAll();
    ctx.response.body = students;
    await next();
  }

  async show(ctx, next) {
    const { studentId } = ctx.params;
    const student = await Student.findByPk(studentId);
    ctx.response.body = student;
    await next();
  }

  async store(ctx, next) {
    const { login, password, name, phone } = ctx.request.body;
    const student = await Student.create({ login, password, name, phone });
    ctx.status = 201;
    ctx.response.body = student;
    await next();
  }

  async update(ctx, next) {
    const { studentId } = ctx.params;
    const student = await Student.findByPk(studentId);
    const { login, password, name, phone } = ctx.request.body;
    await student.update({ login, password, name, phone });
    ctx.response.body = student;
    await next();
  }

  async destroy(ctx, next) {
    const { studentId } = ctx.params;
    await Student.destroy({
      where: {
        id: studentId
      }
    });
    ctx.status = 204;
    await next();
  }
}

module.exports = new StudentController();
