const courseModel = require("../models/course.model");
class CourseController {
  async create(req, res) {
    if (!req.body) return res.status(404).json({ message: "Course not found" });
    const newCourse = {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    };
    await courseModel.create(newCourse);
    return res.status(201).json({ message: "Course created successfully" });
  }

  async get(req, res) {
    const courses = await courseModel.read();
    return res.status(200).json({ message: "success", data: courses });
  }

  async getACourse(req, res) {
    // if (!req.params)
    //   return res.status(404).json({ message: "Course not found" });
    const courseId = req.params.id;
    const course = await courseModel.readARecord(courseId);
    return res.status(200).json({ message: "success", data: course });
  }

  async update(req, res) {
    if (!req.body || !req.params)
      return res.status(404).json({ message: "Course not found" });
    const newEditCourse = {
      name: req.body.name,
      quantity: req.body.quantity,
      price: req.body.price,
    };
    const courseId = req.params.id;
    await courseModel.update(newEditCourse, courseId);
    return res
      .status(200)
      .json({ message: `Course updated courses id ${courseId} successfully` });
  }

  async destroy(req, res) {
    if (!req.body || !req.params)
      return res.status(404).json({ message: "Course not found" });
    const courseId = req.params.id;
    await courseModel.destroy(courseId);
    return res.status(200).json({
      message: `Course destroyed courses id ${courseId} successfully`,
    });
  }
}

module.exports = new CourseController();
