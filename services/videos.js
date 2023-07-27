const { Video } = require('../models');
const { BadRequestError, NotFoundError } = require('../utils/customErrors');

const findAllVideos = async () => {
  return await Video.find();
};

const validateVideoId = async videoID => {
  if (!videoID) {
    throw new BadRequestError('Video ID is required');
  }

  try {
    const video = await Video.findById(videoID);
    return video;
  } catch {
    throw new NotFoundError('Video not found');
  }
};

const createNewVideo = async (title, url) => {
  if (!title || !url) {
    throw new BadRequestError('Missing required attributes');
  }

  const video = new Video({
    title,
    url
  });
  await video.save();
};

const searchVideosByTitle = title => {
  if (!title) {
    throw new BadRequestError('Title is required');
  }

  const regex = new RegExp(title, 'i');
  const videos = Video.find({ title: { $regex: regex } });
  return videos;
};

module.exports = {
  findAllVideos,
  validateVideoId,
  createNewVideo,
  searchVideosByTitle
};
