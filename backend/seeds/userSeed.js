const { User } = require('../models');

const userseed = [
{
    "user_id": 1,
    "username": "Benhwaet",
    "profile_picture": "../../frontend/src/images/profile/IMG_0936.jpeg",
    "email": "benhwaet@gmail.com",
    "password": "Qwerty40",
    "created_on": "2023-08-10"
},
{
    "user_id": 2,
    "username": "*anirvan*",
    "profile_picture": "../../frontend/src/images/profile/Anirvan.png",
    "email": "anirvan@gaol.com",
    "password": "Qwerty43",
    "created_on": "2023-08-10"
},
{
    "user_id": 3,
    "username": "Folkor",
    "profile_picture": "../../frontend/src/images/profile/Folkor.png",
    "email": "folkor@gaol.com",
    "password": "QwertyWHAAT",
    "created_on": "2023-08-10"
},
{
    "user_id": 4,
    "username": "Koala",
    "profile_picture": " ",
    "email": "koala@gaol.com",
    "password": "Qwerty50",
    "created_on": "2023-08-10"
},
{
    "user_id": 5,
    "username": "badgeridoo",
    "profile_picture": " ",
    "email": "badger@gaol.com",
    "password": "Qwerty60",
    "created_on": "2023-08-10"
},
{
    "user_id": 6,
    "username": "Crisanthemum",
    "profile_picture": " ",
    "email": "crisant@gaol.com",
    "password": "Qwerty70",
    "created_on": "2023-08-10"
},
];

const seedUser = () => User.bulkCreate(userseed);

module.exports = seedUser;