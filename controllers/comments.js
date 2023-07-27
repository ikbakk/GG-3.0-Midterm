const {
  getCommentsByVideoId,
  createNewComment
} = require('../services/comments');
const { errorResponse } = require('../utils/responses');

const getComments = async (req, res) => {
  try {
    const { videoID } = req.body;
    const comments = await getCommentsByVideoId(videoID);
    res.status(200).json({ status: 'Success', data: comments });
  } catch (err) {
    errorResponse(err, res);
  }
};

const submitComment = async (req, res) => {
  try {
    const { videoID, username, comment } = req.body;
    const requiredAttributes = {
      videoID,
      username,
      comment
    };
    await createNewComment({ ...requiredAttributes });
    res.status(201).json({ status: 'Success' });
  } catch (err) {
    errorResponse(err, res);
  }
};

module.exports = {
  getComments,
  submitComment
};
