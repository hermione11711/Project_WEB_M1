<template>
    <div class="video-container" v-if="videoId">
      <h1 class="video-title">{{ videoTitle }}</h1>
      <iframe :src="'https://www.youtube.com/embed/' + videoId" frameborder="0" allowfullscreen width="800" height="450"></iframe>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      videoId: null,
      videoTitle: null,  
    };
  },
  async mounted() {
    const playlistId = 'PLK1gGcriy4E6C1JaVYIE6TPYw9F2Otofd';
    const apiKey = 'AIzaSyD3PoL-gf5a5SXfB_y5kH0wypTTEe27-l8';
    const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${apiKey}`);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
      this.videoId = data.items[0].snippet.resourceId.videoId;
      this.videoTitle = data.items[0].snippet.title;  
    }
  },
};
</script>

<style scoped>


.iframe-video {

  width: 100%;
  height: 600px;
}

.video-title {
  margin-top: -70px;
  color: white;
  text-align: center;
  margin-bottom: 10px;
}
</style>