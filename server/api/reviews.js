const router = require("express").Router();
const {
  models: { Review },
} = require("../db");
module.exports = router;

//get all /reviews
router.get("/", async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (err) {
    next(err);
  }
});

//update review by id
router.put("/", async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    res.send(await review.update(req.body));
  } catch (err) {
    next(err);
  }
});

//new review
router.post("/", async (req, res, next) => {
  try {
    res.status(201).send(await Review.create(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    await review.destroy();
    res.json(review);
  } catch (err) {
    next(err);
  }
});
