const { Comment } = require('../models');

const commentData = [{
    comment_text: "quis nostrud exercitation ullamco laboris nisi ut aliquip ex",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Sapien pellentesque habitant morbi tristique. Risus quis varius quam quisque id diam vel. Morbi tristique senectus",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;