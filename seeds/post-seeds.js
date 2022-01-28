const { Post } = require('../models');

const postData = [{
    title: "Why MVC is so important",
    content: "MVC allows developers to maintain a true seperation of concerns, devving their code between the mode; layer for data, the view layer for design, and the controller layer for application logic",
    user_id: 1
},
{
    title: "Authenitcation vs. Authorization",
    content: "There is a differnece between authentication and authorization. Authentication means confiming your own identity, whereas authorization means being allowed access to the system",
    user_id: 2
},
{
    title: "Object-Relational Mapping",
    content: "I have really loved learning about ORMs. It's really simplified the way I create queries in SQL",
    user_id: 3
}
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;