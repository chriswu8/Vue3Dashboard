<template>
  <h2 class="headline">Timeline</h2><br>
  <div class="wrapper">
    <div class="center-line"></div>
    <div class="box left1">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="box right1">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="box left2">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="box right2">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="box left3">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="box right3">
      <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia
        enim pulvinar.</section>
    </div>
    <div class="node"></div>
    <div class="node"></div>
    <div class="node"></div>
    <div class="node"></div>
    <div class="node"></div>
    <div class="node"></div>
  </div>
</template>

<script>
export default {
  name: 'TimelineComponent',
};
</script>

<style scoped>
.wrapper {
  max-width: 1080px;
  margin: 50px auto;
  margin-top: 88px;
  padding: 0 50px;
  /* Added 50px margin on both sides */
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 2em;
}

.center-line {
  position: absolute;
  height: 188vh;
  width: 4px;
  background: #fff;
  left: 50%;
  top: -88px;
  transform: translateX(-50%);
}

.box {
  background: linear-gradient(to bottom, rgb(19, 60, 121), rgb(155, 190, 231));
  padding: 1em;
  border-radius: 18px;
}

section {
  color: white;
}

.left1 {
  grid-row: 1;
  grid-column: 1;
}

.right1 {
  grid-row: 2;
  grid-column: 4;
}

.left2 {
  grid-row: 3;
  grid-column: 1;
}

.right2 {
  grid-row: 4;
  grid-column: 4;
}

.left3 {
  grid-row: 5;
  grid-column: 1;
}

.right3 {
  grid-row: 6;
  grid-column: 4;
}

.node {
  grid-column: 2 / 4;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  margin-top: 0;
  justify-self: center;
}
</style>
