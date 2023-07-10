const { faker } = require('@faker-js/faker');
const {
  runQuery,
  getRandomAndRemove,
  getRandomNumber
} = require('./utils.js');

const reviewSeeder = async () => {
  const teachers = await runQuery('select id from teachers');
  const users = await runQuery('select id from users where id != 1');
  await runQuery(`delete from reviews`);
  await runQuery(`UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='reviews'`);

  for (let i = 0; i < teachers.length; i++) {
    const teacher = getRandomAndRemove(teachers);
    const snapshotUsers = [...users];
    for (let j = 0; j < 5; j++) {
      const user = getRandomAndRemove(snapshotUsers);
      const review = {
        user_id: user.id,
        teacher_id: teacher.id,
        content: faker.lorem.paragraph(getRandomNumber(1, 3)),
        rating: getRandomNumber(1, 5),
        created_at: faker.date.recent({ days: 1 }),
      };
      await runQuery(`INSERT INTO reviews (user_id, teacher_id, content, rating, created_at)
              VALUES ('${review.user_id}', '${review.teacher_id}', '${review.content}', '${review.rating}', '${review.created_at}')`);
    }
  }
};

module.exports = reviewSeeder;
