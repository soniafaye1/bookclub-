const router = require("express").Router();
const {
  models: { Book },
} = require("../db");
module.exports = router;

//get all /api/books
router.get("/", async (req, res, next) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    next(err);
  }
});

//create a new book
router.post("/", async (res, req, next) => {
  try {
    res.status(201).send(await Book.create(req.body));
  } catch (err) {
    next(err);
  }
});

//find specific book
router.get("/:id", async (req, res, next) => {
  try {
    const book = await Book.findByPk(req.params.id);
    res.json(book);
  } catch (err) {
    next(err);
  }
});

//delete specific book
// router.delete("/:id", async (res, req, next) => {
//   try {
//     const book = await Book.findByPk(req.params.id);
//     await book.destroy();
//   } catch (err) {
//     next(err);
//   }
// });
