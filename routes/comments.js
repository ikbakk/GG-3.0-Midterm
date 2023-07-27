const commentsRouter = require('express').Router();
const { submitComment, getComments } = require('../controllers/comments');

commentsRouter.get('/', getComments);
commentsRouter.post('/', submitComment);

module.exports = commentsRouter;
