const router = require("express").Router();
const {
  models: { UserBook },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const userBook = await UserBook.findAll();
    res.json(userBook);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const userBook = await UserBook.findByPk(req.params.id);
    res.json(userBook);
  } catch (err) {
    next(err);
  }
});
