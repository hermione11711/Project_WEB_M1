<template>
    <div class="video-section">
      <div class="video-container">
        <div class="video-items">
          <div v-for="(video, index) in videos" :key="index" class="video-item">
            <!-- Titre retiré -->
            <iframe :src="'https://www.youtube.com/embed/' + video.id" frameborder="0" allowfullscreen class="iframe-video"></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        videos: [],
      };
    },
    async mounted() {
      const playlistId = 'PLmF_l6pwZMjwHVpKi0Xre9627UcGt2VQj';
      const apiKey = 'AIzaSyD3PoL-gf5a5SXfB_y5kH0wypTTEe27-l8';
      const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        this.videos = data.items.map(item => ({
          id: item.snippet.resourceId.videoId,
          title: item.snippet.title
        }));
      }
    },
  };
  </script>
  
  <style scoped>
  .video-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: #131722;
  }
  
  .video-container {
    width: 100%;
    overflow-x: auto;
    border: 2px solid #1e222d;
    border-radius: 10px;
    padding: 10px;
  }
  
  .video-items {
    display: flex;
    gap: 20px;
  }
  
  .video-item {
    flex: 0 0 auto;
  }
  
  .iframe-video {
    width: 480px;
    height: 270px;
  }
  </style>
  