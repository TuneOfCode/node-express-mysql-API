const courseController = require("../controllers/course.controller");

const courseRouter = (app) => {
  const router = require("express").Router();
  router.post("/create", courseController.create);
  router.get("/", courseController.get);
  router.get("/:id", courseController.getACourse);
  router.put("/:id/edit", courseController.update);
  router.delete("/:id/destroy", courseController.destroy);

  app.use("/api/course", router);
};

module.exports = courseRouter;
