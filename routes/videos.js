const videosRouter = require('express').Router();
const {
  getAllVideos,
  addVideo,
  searchVideo
} = require('../controllers/videos');

videosRouter.get('/', getAllVideos);
videosRouter.get('/search', searchVideo);
videosRouter.post('/', addVideo);

module.exports = videosRouter;
