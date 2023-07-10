const { faker } = require('@faker-js/faker');
const functionDB = require('../index.js');
const bcrypt = require('bcryptjs');
const { runQuery, getRandomElement, getRandomAndRemove } = require('./utils.js');

const teachersSeeder = async () => {
  const numberTeachers = 10;
  const countryDummy = ['日本', 'ベトナム', '中国', '韓国', 'フランス'];
  const langDummy = ['日本語', 'ベトナム語', '中国語', '韓国語', 'フランス語'];
  const purposesDummy = ['試験', '会話', 'ビジネス']
  const photo_url = [
    'https://img.freepik.com/premium-photo/beautiful-young-woman-white-blouse-black-skirt-standing-near-whiteboard_338491-2143.jpg?w=900',
    'https://img.freepik.com/premium-photo/beautiful-young-sexy-teacher-resting-classes_79762-3382.jpg?w=900',
    'https://img.freepik.com/free-photo/beauty-business-woman-dress-eyeglasses-holding-documents_171337-2830.jpg?w=900',
    'https://img.freepik.com/premium-photo/beautiful-young-sexy-teacher-resting-classes_79762-3382.jpg?w=900',
    'https://img.freepik.com/premium-photo/beautiful-young-sexy-teacher-posing-table_79762-3417.jpg?w=900',
    'https://img.freepik.com/free-photo/young-woman-wearing-formal-clothes_273609-11148.jpg?w=900',
  ];
  
  const users = await runQuery('select id from users where id != 1');
  await runQuery(`delete from teachers`);
  await runQuery(`UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='teachers'`);
  
  
  for (let i = 0; i < numberTeachers; i++) {
    const country_of_birth = getRandomElement(countryDummy);
    const teacher = {
      user_id: getRandomAndRemove(users).id,
      price: faker.commerce.price({ min: 1000, max: 5000, dec: 0 }),
      resume_url: `https://www.${faker.company.buzzNoun()}.com`,
      country_of_birth: country_of_birth,
      phone_number: faker.phone.number('0##########'),
      facebook_url: `https://www.facebook.com/${faker.company.buzzNoun()}`,
      twitter_url: `https://twitter.com/${faker.company.buzzNoun()}}`,
      website_url: faker.internet.url(),
      photo_url: getRandomElement(photo_url),
      remote: faker.datatype.boolean(),
      latitude: faker.location.latitude({ min: 21.0013862, max: 23.3933954 }),
      longitude: faker.location.longitude({
        min: 105.6367188,
        max: 109.9511719,
      }),
      lang_study: getRandomElement(langDummy),
      lang_teach: `${country_of_birth}語`,
      linkedin_url: `https://www.linkedin.com/in/${faker.company.buzzNoun()}`,
      instagram_url: `https://www.instagram.com/${faker.company.buzzNoun()}`,
      background_image_url: '',
      purpose: getRandomElement(purposesDummy),
      gmail: faker.internet.email(),
      description: '',
      address: faker.location.streetAddress(),
    };
    await runQuery(`INSERT INTO teachers (user_id, price, resume_url, country_of_birth, phone_number, facebook_url, twitter_url, website_url, photo_url, remote, latitude, longitude, lang_study, lang_teach, linkedin_url, instagram_url, background_image_url, purpose, gmail, description, address)
            VALUES ('${teacher.user_id}', '${teacher.price}', '${teacher.resume_url}', '${teacher.country_of_birth}', '${teacher.phone_number}', '${teacher.facebook_url}', '${teacher.twitter_url}', '${teacher.website_url}', '${teacher.photo_url}', '${teacher.remote}', '${teacher.latitude}', '${teacher.longitude}', '${teacher.lang_study}', '${teacher.lang_teach}', '${teacher.linkedin_url}', '${teacher.instagram_url}', '${teacher.background_image_url}', '${teacher.purpose}', '${teacher.gmail}', '${teacher.description}', '${teacher.address}}')`);
  }
};

module.exports = teachersSeeder;
