function changeVideo(videoId) {
  videoLive = document.getElementById("video-live");
  videoChat = document.getElementById("video-live-chat");


  videoLive.src = `https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`;
  videoChat.src = `https://www.youtube.com/live_chat?v=${videoId}&embed_domain=${window.location.hostname}`;
}
