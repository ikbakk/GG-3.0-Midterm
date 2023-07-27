const { Video } = require('../models');
const {
  allVideos,
  createNewVideoInstance,
  searchVideoByTitle
} = require('../services/videos');
const { errorResponse } = require('../utils/responses');

const getAllVideos = async (req, res) => {
  try {
    const videos = await allVideos();
    res.status(200).json({ status: 'Success', data: videos });
  } catch (err) {
    errorResponse(err, res);
  }
};

const addVideo = async (req, res) => {
  try {
    const { title, url } = req.body;
    await createNewVideoInstance(title, url);
    res.status(201).json({ status: 'success' });
  } catch (err) {
    errorResponse(err, res);
  }
};

const searchVideo = async (req, res) => {
  try {
    const { title } = req.query;
    const videos = await searchVideoByTitle(title);
    res.status(200).json({ status: 'Success', data: videos });
  } catch (err) {
    errorResponse(err, res);
  }
};

module.exports = {
  getAllVideos,
  addVideo,
  searchVideo
};
