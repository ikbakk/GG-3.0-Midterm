const { Comment } = require('../models');
const { BadRequestError } = require('../utils/customErrors');
const { validateVideoId } = require('../services/videos');

const getCommentsByVideoId = async videoID => {
  await validateVideoId(videoID);
  const comments = await Comment.find({ videoID });
  return comments;
};

const createNewComment = async ({ videoID, comment, username }) => {
  if (!videoID || !comment || !username) {
    throw new BadRequestError('Missing required attributes');
  }

  await validateVideoId(videoID);
  const newComment = new Comment({
    videoID,
    username,
    comment
  });
  await newComment.save();
};

module.exports = {
  getCommentsByVideoId,
  createNewComment
};
