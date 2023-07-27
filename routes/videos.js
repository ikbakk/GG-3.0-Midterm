const videosRouter = require('express').Router();
const {
  getAllVideos,
  addVideo,
  searchVideos
} = require('../controllers/videos');

videosRouter.get('/', getAllVideos);
videosRouter.get('/search', searchVideos);
videosRouter.post('/', addVideo);

module.exports = videosRouter;
