const { faker } = require('@faker-js/faker');
const bcrypt = require('bcryptjs');
const { runQuery, getRandomElement } = require('./utils.js');

const userSeeder = async () => {
  const adminPassword = await bcrypt.hash('admin', 10);
  const defaultPassword = await bcrypt.hash('12345678', 10);
  const sex = ['男性', '女性'];
  
  const numberUser = 20;

  await runQuery(`delete from users`);
  await runQuery(`UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='users'`);
  const admin = {
    username: 'admin',
    hash_password: adminPassword,
    role: 2,
    name: 'Admin',
    date_of_birth: `${faker.number.int({ min: 10, max: 30 })}/${faker.number.int(
      { min: 10, max: 12 }
    )}/${faker.number.int({ min: 1970, max: 2000 })}`,
  };

  await runQuery(`INSERT INTO users (username, hash_password, role, name, date_of_birth)
      VALUES ('${admin.username}', '${admin.hash_password}', '${admin.role}', '${admin.name}', '${admin.date_of_birth}')`);

  for (let i = 0; i < numberUser; i++) {
    const user = {
      username: faker.internet.userName(),
      hash_password: defaultPassword,
      role: 0,
      name: faker.person.fullName(),
      gender: getRandomElement(sex),
      date_of_birth: `${faker.number.int({
        min: 10,
        max: 30,
      })}/${faker.number.int({ min: 10, max: 12 })}/${faker.number.int({
        min: 1970,
        max: 2000,
      })}`,
    };
    await runQuery(`INSERT INTO users (username, hash_password, role, name, gender, date_of_birth)
            VALUES ('${user.username}', '${user.hash_password}', '${user.role}', '${user.name}', '${user.gender}','${user.date_of_birth}')`);
  }
};

module.exports = userSeeder;
