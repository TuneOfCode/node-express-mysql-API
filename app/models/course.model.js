const connect = require("./db");

class CourseModel {
  constructor(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

  async create(newCourse) {
    try {
      return await connect.query(`INSERT INTO course SET ?`, newCourse);
    } catch (error) {
      console.log("[ERROR] create a course: ", error);
      return;
    }
  }

  async read() {
    try {
      const [courses, fields] = await connect.execute("SELECT * FROM course");
      return courses;
    } catch (error) {
      console.log("[ERROR] find all course: ", error);
      return null;
    }
  }

  async readARecord(courseId) {
    try {
      const [courseItem, fields] = await connect.query(
        "SELECT * FROM course WHERE id = ?",
        courseId
      );
      return courseItem;
    } catch (error) {
      console.log("[ERROR] find a course: ", error);
      return null;
    }
  }

  async update(newEditCourse, courseId) {
    try {
      return await connect.query(`UPDATE course SET ? WHERE id = ?`, [
        newEditCourse,
        courseId,
      ]);
    } catch (error) {
      console.log("[ERROR] update a course: ", error);
      return;
    }
  }

  async destroy(courseId) {
    try {
      return await connect.query(`DELETE FROM course WHERE id = ?`, courseId);
    } catch (error) {
      console.log("[ERROR] destroy a course: ", error);
      return;
    }
  }
}

module.exports = new CourseModel();
