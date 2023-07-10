const { faker } = require('@faker-js/faker');
const { runQuery, getRandomAndRemove } = require('./utils.js');

const bookmarkSeeder = async () => {
  const teachers = await runQuery('select id from teachers');
  const users = await runQuery('select id from users where id != 1');
  await runQuery(`delete from bookmarks`);
  await runQuery(`UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='bookmarks'`);

  for (let i = 0; i < teachers.length; i++) {
    const teacher = getRandomAndRemove(teachers);
    const snapshotUsers = [...users];
    for (let j = 0; j < 5; j++) {
      const user = getRandomAndRemove(snapshotUsers);
      const bookmark = {
        user_id: user.id,
        teacher_id: teacher.id,
        created_at: faker.date.recent({ days: 1 }),
      };
      await runQuery(`INSERT INTO bookmarks (user_id, teacher_id, created_at)
              VALUES ('${bookmark.user_id}', '${bookmark.teacher_id}', '${bookmark.created_at}')`);
    }
  }
};

module.exports = bookmarkSeeder;
