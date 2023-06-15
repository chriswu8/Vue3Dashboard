<template>
  <h1 class="headline">Follow Us On Social Media</h1>
  <div class="wrapper">
    <div class="icon facebook" @mouseover="showTooltip('Facebook')" @mouseout="hideTooltip">
      <div class="tooltip" :class="{ active: tooltip === 'Facebook' }">
        Facebook
      </div>
      <span><i class="fab fa-facebook-f"></i></span>
    </div>
    <div class="icon twitter" @mouseover="showTooltip('Twitter')" @mouseout="hideTooltip">
      <div class="tooltip" :class="{ active: tooltip === 'Twitter' }">
        Twitter
      </div>
      <span><i class="fab fa-twitter"></i></span>
    </div>
    <div class="icon instagram" @mouseover="showTooltip('Instagram')" @mouseout="hideTooltip">
      <div class="tooltip" :class="{ active: tooltip === 'Instagram' }">
        Instagram
      </div>
      <span><i class="fab fa-instagram"></i></span>
    </div>
    <div class="icon github" @mouseover="showTooltip('Github')" @mouseout="hideTooltip">
      <div class="tooltip" :class="{ active: tooltip === 'Github' }">
        Github
      </div>
      <span><i class="fab fa-github"></i></span>
    </div>
    <div class="icon youtube" @mouseover="showTooltip('YouTube')" @mouseout="hideTooltip">
      <div class="tooltip" :class="{ active: tooltip === 'YouTube' }">
        YouTube
      </div>
      <span><i class="fab fa-youtube"></i></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tooltip: null,
    };
  },
  methods: {
    showTooltip(name) {
      this.tooltip = name;
    },
    hideTooltip() {
      this.tooltip = null;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html,
body {
  display: grid;
  height: 100%;
  width: 100%;
  place-items: center;
  background: linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%);
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  margin: 0 20px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  background:  rgb(155, 190, 231);
  border-radius: 50%;
  position: relative;
  z-index: 2;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon span i {
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.wrapper .icon .tooltip {
  position: absolute;
  top: 0;
  z-index: 1;
  background: #fff;
  color: #fff;
  padding: 10px 18px;
  font-size: 20px;
  font-weight: 500;
  border-radius: 25px;
  opacity: 0;
  pointer-events: none;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  margin-top: 88px;
}

.wrapper .icon:hover .tooltip {
  top: -70px;
  opacity: 1;
  pointer-events: auto;
}

.icon .tooltip:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  background: #fff;
  left: 50%;
  bottom: -6px;
  transform: translateX(-50%) rotate(45deg);
  transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
}

.wrapper .facebook:hover span,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip:before {
  background: #3B5999;
}

.wrapper .twitter:hover span,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip:before {
  background: #46C1F6;
}

.wrapper .instagram:hover span,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip:before {
  background: #f69e56;
}

.wrapper .github:hover span,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip:before {
  background: #888;
}

.wrapper .youtube:hover span,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip:before {
  background: #DE463B;
}

h1 {
  margin-top: 188px;
}

span {
  height: 60px;
  width: 60px;
  font-size: 20px;
  margin-top: 88px;
  margin-bottom: 88px;
}
</style>
