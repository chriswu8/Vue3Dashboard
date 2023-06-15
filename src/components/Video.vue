<template>
  <h2 class="headline">Sample Lessons</h2>
  <div>
    <div v-for="item in accordionItems" :key="item.id" class="accordion" :class="{ open: item.isOpen }">
      <div class="accordion-header" @click="toggleAccordion(item.id)">
        <div class="accordion-title">
          {{ item.title }} &nbsp; &nbsp;
        </div>
        <div class="accordion-icon">
          <i class="fas" :class="item.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
        </div>
      </div>
      <div class="accordion-content">
        <video :ref="`videoPlayer${item.id}`" controls>
          <source :src="item.videoPath" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionItems: [
        {
          id: 1,
          title: 'Video 1',
          videoPath: require('../assets/videos/vueTutorial.mp4'),
          isOpen: false
        },
        {
          id: 2,
          title: 'Video 2',
          videoPath: require('../assets/videos/vueTutorial2.mp4'),
          isOpen: false
        },
        {
          id: 3,
          title: 'Video 3',
          videoPath: require('../assets/videos/vueTutorial3.mp4'),
          isOpen: false
        }
      ]
    };
  },
  methods: {
    toggleAccordion(itemId) {
      this.accordionItems.forEach(item => {
        if (item.id === itemId) {
          item.isOpen = !item.isOpen;
          if (item.isOpen) {
            this.playVideo(item.id);
          } else {
            this.pauseVideo(item.id);
          }
        } else {
          item.isOpen = false;
          this.pauseVideo(item.id);
        }
      });
    },
    playVideo(itemId) {
      const videoPlayer = this.$refs[`videoPlayer${itemId}`][0];
      videoPlayer.play();
    },
    pauseVideo(itemId) {
      const videoPlayer = this.$refs[`videoPlayer${itemId}`][0];
      videoPlayer.pause();
    }
  }
}
</script>
<style>
.accordion {
  margin-bottom: 10px;
  background-color: #333333;
  color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
}

.accordion-header {
  display: flex;
  align-items: center;
  justify-content: center; 
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.accordion-header:hover {
  background-color: #444444;
}

.accordion-title {
  font-size: 18px;
  font-weight: bold;
}

.accordion-icon {
  font-size: 18px;
}

.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s;
}

.open .accordion-content {
  max-height: 500px;
}
</style>