const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const userSeeder = require('./userSeeder');
const teachersSeeder = require('./teachersSeeder');

const db = new sqlite3.Database(path.resolve(__dirname, '../db.sqlite'));

async function seedAndExit() {
  try {
    await userSeeder();
    await teachersSeeder();

    console.log('Data seeding completed.');

    process.exit(0);
  } catch (error) {
    console.error('Data seeding failed:', error);
    process.exit(1);
  }
}

seedAndExit();
