const seedUsers = require('./user-seeds');
const seedTags = require('./tag-seeds');
const seedSleep = require('./sleep-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
    await seedTags();
    console.log('\n----- TAGS SEEDED -----\n');
    await seedSleep();
    console.log('\n----- SLEEP SEEDED -----\n');

    process.exit(0);
};

seedAll();