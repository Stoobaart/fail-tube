var videos = require("../models/video");

function indexVideos(req, res) {
  res.render("videos/index", { videos: videos });
}

function showVideos(req, res) {
  res.render("videos/show", { video: videos[req.params.id]});
}

function newVideos(req, res) {
  var newVideo = {
      id: "",
      title: "",
      description: "",
      url: "",
      failLevel: "",
      nsfw: ""
  };
  res.render("videos/new", { video: newVideo });
}

function createVideos(req, res) {
  var video = req.body;
  video.id = videos.length;
  videos.push(video);
  res.redirect("/");
}

function editVideos(req, res) {
  res.render("videos/edit", { video: videos[req.params.id]});
}

function updateVideos(req, res) {
  var video = req.body;
  video.id = req.params.id;
  videos[video.id] = video;
  res.redirect("/");
}

function deleteVideos(req, res) {
  videos.splice(req.params.id, 1);
  for (var i = 0; i < videos.length; i++) {
    videos[i].id = i;
  }
  res.redirect("/");
}

module.exports = {
  index: indexVideos,
  show: showVideos,
  new: newVideos,
  create: createVideos,
  edit: editVideos,
  update: updateVideos,
  delete: deleteVideos
}
