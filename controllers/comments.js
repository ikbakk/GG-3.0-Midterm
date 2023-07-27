const {
  getCommentsById,
  createNewCommentInstances
} = require('../services/comments');
const { errorResponse } = require('../utils/responses');

const getComments = async (req, res, next) => {
  try {
    const { videoId } = req.body;
    const comments = await getCommentsById(videoId);
    res.status(200).json({ status: 'Success', data: comments });
  } catch (err) {
    errorResponse(err, res);
  }
};

const submitComment = async (req, res, next) => {
  try {
    const { videoId, username, comment } = req.body;
    await createNewCommentInstances(videoId, comment, username);
    res.status(201).json({ status: 'Success' });
  } catch (err) {
    errorResponse(err, res);
  }
};

module.exports = {
  getComments,
  submitComment
};
