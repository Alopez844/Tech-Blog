const { User } = require('../models');

const userData = [
{
    username = 'Alejandro',
    password = 'Alejandro123'
},
{
    username = 'Jasper',
    password = 'Jasper456'
},
{
    username = 'Chris',
    password = 'Chris789'
},
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true});

module.exports = seedUsers;