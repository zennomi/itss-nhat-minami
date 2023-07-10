const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.resolve(__dirname, '../db.sqlite'));

const runQuery = (query, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(query, params, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const getRandomAndRemove = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const randomElement = array[randomIndex];
  array.splice(randomIndex, 1);
  return randomElement;
};

module.exports = {
  runQuery,
  getRandomElement,
  getRandomAndRemove,
};
