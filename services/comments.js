const { Comment } = require('../models');
const { BadRequestError } = require('../utils/customErrors');
const { validateVideoId } = require('../services/videos');

const getCommentsById = async videoId => {
  await validateVideoId(videoId);
  const comments = await Comment.find({ videoId });
  return comments;
};

const createNewCommentInstances = async (videoId, comment, username) => {
  if (!videoId || !comment || !username) {
    throw new BadRequestError('Missing required attributes');
  }

  await validateVideoId(videoId);
  const newComment = new Comment({
    videoId,
    username,
    comment
  });
  await newComment.save();
};

module.exports = {
  getCommentsById,
  createNewCommentInstances
};
