"use strict";

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

  const [book1, book2, book3, book4, book5] = await Promise.all([
    Book.create({
      title: "Wuthering Heights",
      published_date: "1847",
      description:
        "Wuthering Heights is an 1847 novel by Emily Brontë, initially published under the pseudonym Ellis Bell. It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with Earnshaw's adopted son, Heathcliff. The novel was influenced by Romanticism and Gothic fiction.",
      contributer: "",
      author: "Emily Brontë",
      publisher: " Nelson Doubleday",
    }),
    Book.create({
      title: "Ethan Frome",
      published_date: "2015",
      description:
        "Ethan Frome toils at his New England farm while struggling to maintain a bearable existence with his sickly and judgemental wife, Zeena. He finds himself increasingly drawn to Mattie, Zeena's cousin, who helps around the house. Although she represents the possibility of happiness, they are trapped by their hopeless situation. And when Zeena becomes suspicious and arranges for Mattie to be sent away, events take a tragic turn. This heart-breaking portrait, from the author of The House of Mirth, is an intimate look at choices not made and lives not yet lived. First published in 1911 and adapted for film, Ethan Frome remains for many the most subtle and moving of Wharton's works.",
      contributer: "Edith Wharton",
      author: "Edith Wharton",
      publisher: "Collins Classics",
    }),
    Book.create({
      title: "Importance of Being Earnest",
      published_date: "1990",
      description:
        "Set in England during the late Victorian era, the play's humour derives in part from characters maintaining fictitious identities to escape unwelcome social obligations. It is replete with witty dialogue and satirises some of the foibles and hypocrisy of late Victorian society. It has proved Wilde's most enduringly popular play.",
      contributer: "Oscar Wilde",
      author: "Oscar Wilde",
      publisher: "Dover Publications",
    }),
    Book.create({
      title: "Anna Karénina",
      published_date: "1954",
      description:
        "Anna Karenina tells of the doomed love affair between the sensuous and rebellious Anna and the dashing officer, Count Vronsky. Tragedy unfolds as Anna rejects her passionless marriage and must endure the hypocrisies of society. Set against a vast and richly textured canvas of nineteenth-century Russia, the novel's seven major characters create a dynamic imbalance, playing out the contrasts of city and country life and all the variations on love and family happiness. While previous versions have softened the robust, and sometimes shocking, quality of Tolstoy's writing, Pevear and Volokhonsky have produced a translation true to his powerful voice. This award-winning team's authoritative edition also includes an illuminating introduction and explanatory notes. Beautiful, vigorous, and eminently readable, this Anna Karenina will be the definitive text for generations to come.",
      contributer: "Lev Nikolaevič Tolstoy",
      author: "Lev Nikolaevič Tolstoy",
      publisher: "Penguin Books",
    }),
    Book.create({
      title: "Cyrano de Bergerac",
      published_date: "",
      description:
        "Cyrano de Bergerac, verse drama in five acts by Edmond Rostand, performed in 1897 and published the following year. It was based only nominally on the 17th-century nobleman of the same name, known for his bold adventures and large nose.Set in 17th-century Paris, the action revolves around the emotional problems of the noble, swashbuckling Cyrano, who, despite his many gifts, feels that no woman can ever love him because he has an enormous nose. Secretly in love with the lovely Roxane, Cyrano agrees to help his inarticulate rival, Christian, win her heart by allowing him to present Cyrano’s love poems, speeches, and letters as his own work. Eventually Christian recognizes that Roxane loves him for Cyrano’s qualities, not his own, and he asks Cyrano to confess his identity to Roxane; Christian then goes off to a battle that proves fatal. Cyrano remains silent about his own part in Roxane’s courtship. As he is dying years later, he visits Roxane and recites one of the love letters. Roxane realizes that it is Cyrano she loves, and he dies content.",
      contributer: "",
      author: "Edmond Rostand",
      publisher: "Penguin Books",
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
