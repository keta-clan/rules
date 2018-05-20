<template>
    <div class="youtube-video">
        <iframe width="640" height="360" :src="'https://www.youtube.com/embed/' + video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>  
</template>

<script>
export default {
  props: ['videoId'],
  data() {
    return {
      video: this.videoId
    }
  }
}
</script>

<style>
.youtube-video {
    float: none;
    clear: both;
    width: 100%;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 25px;
    height: 0;
}
.youtube-video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
