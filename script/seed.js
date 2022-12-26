"use strict";

const { default: axios } = require("axios");
const {
  db,
  models: { User, Book, Review, UserBook },
} = require("../server/db");
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const [user1, user2] = await Promise.all([
    User.create({
      name: "Cody",
      username: "codysaurous",
      password: "123",
      email: "cody@mail.com",
      bio: "im cody lol",
    }),
    User.create({
      name: "Murphy",
      username: "murph",
      password: "123",
      email: "murph@mail.com",
      bio: "pssy slay queen",
    }),
  ]);

  async function fetchBooks() {
    const { data } = await axios.get(
      "https://api.nytimes.com/svc/books/v3//lists/full-overview.json?api-key=dwKZYZeeJYARrB1wCSRakHZOy5w1lnS9"
    );
    return data;
  }

  async function mapBooks() {
    const bookArray = await fetchBooks();
    let bookList = bookArray.results.lists;

    for (let i = 0; i < 5; i++) {
      let newBookList = bookList[i].books;
      await Promise.all([
        Book.create({
          title: newBookList[i]["title"],
          author: newBookList[i]["author"],
          description: newBookList[i]["description"],
          imageUrl: newBookList[i]["book_image"],
        }),
      ]);
    }
  }

  await mapBooks();

  const [book1, book2, book3, book4, book5] = await Promise.all([
    Book.create({
      title: "Wuthering Heights",
      description: "Wuthering Heights is an 1847 novel by Emily Brontë.",
      author: "Emily Brontë",
    }),
    Book.create({
      title: "Ethan Frome",
      description:
        "Ethan Frome toils at his New England farm while struggling to maintain a bearable existence.",
      author: "Edith Wharton",
    }),
    Book.create({
      title: "Importance of Being Earnest",
      description:
        "Set in England during the late Victorian era, the play's humour derives in part from characters maintaining fictitious identities.",
      author: "Oscar Wilde",
    }),
    Book.create({
      title: "Anna Karénina",
      description:
        "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky.",
      author: "Lev Nikolaevič Tolstoy",
    }),
    Book.create({
      title: "Cyrano de Bergerac",
      description:
        "Cyrano de Bergerac, verse drama in five acts by Edmond Rostand.",
      author: "Edmond Rostand",
    }),
  ]);

  const userBooks = await Promise.all([
    UserBook.create({
      userId: 1,
      bookId: 1,
      favorite: false,
    }),
    UserBook.create({
      userId: 1,
      bookId: 2,
      favorite: true,
    }),
    UserBook.create({
      userId: 2,
      bookId: 3,
      favorite: false,
    }),
    UserBook.create({
      userId: 2,
      bookId: 4,
      favorite: true,
    }),
  ]);

  const reviews = await Promise.all([
    Review.create({
      title: "This was Ok",
      content: "dont remember, dont care",
      rating: 3.0,
      userId: user1.id,
      bookId: book1.id,
    }),
    Review.create({
      title: "Ethan Frown",
      content: "lmao no idea",
      rating: 2.5,
      userId: user1.id,
      bookId: book2.id,
    }),
    Review.create({
      title: "",
      content: "yada yada yada",
      rating: 2.0,
      userId: user2.id,
      bookId: book3.id,
    }),
    Review.create({
      title: "Anna Can Get It",
      content: "pretty good",
      rating: 4.5,
      userId: user2.id,
      bookId: book4.id,
    }),
    Review.create({
      title: "Great Book",
      content: "Love me some cyrano. a classic",
      rating: 5.0,
      userId: user1.id,
      bookId: book5.id,
    }),
  ]);

  console.log(`seeded successfully`);
  // return {
  //   users: {
  //     cody: users[0],
  //     murphy: users[1],
  //   },
  //   books: {
  //     "Wuthering Heights": books[0],
  //     "Ethan Frome": books[1],
  //     "Importance of Being Earnest": books[2],
  //     "Anna Karenina": books[3],
  //     "Cyrano de Bergerac": books[4],
  //   },
  // };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
