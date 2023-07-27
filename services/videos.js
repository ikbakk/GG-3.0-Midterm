const { Video } = require('../models');
const { BadRequestError, NotFoundError } = require('../utils/customErrors');

const allVideos = async () => {
  return await Video.find();
};

const validateVideoId = async videoId => {
  if (!videoId) {
    throw new BadRequestError('Video ID is required');
  }

  try {
    const video = await Video.findById(videoId);
    return video;
  } catch {
    throw new NotFoundError('Video not found');
  }
};

const createNewVideoInstance = async (title, url) => {
  if (!title || !url) {
    throw new BadRequestError('Missing required attributes');
  }

  const video = new Video({
    title,
    url
  });
  await video.save();
};

const searchVideoByTitle = title => {
  if (!title) {
    throw new BadRequestError('Title is required');
  }

  const regex = new RegExp(title, 'i');
  const videos = Video.find({ title: { $regex: regex } });
  return videos;
};

module.exports = {
  allVideos,
  validateVideoId,
  createNewVideoInstance,
  searchVideoByTitle
};
