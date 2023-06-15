<template>
  <div class="headline">
    Featured Lessons
  </div>
  <div class="wrapper">
    <i id="left" class="fa-solid fa-angle-left" @click="scrollCarousel(-1)">
      <span class="material-symbols-outlined">arrow_back_ios_new</span>
    </i>
    <ul class="carousel" ref="carousel">
      <li class="card" v-for="(item, index) in carouselItems" :key="index">
        <div class="img"><img :src="require(`../assets/lessons/${item.image}`)" draggable="false"></div>
      </li>
    </ul>
    <i id="right" class="fa-solid fa-angle-right" @click="scrollCarousel(1)">
      <span class="material-symbols-outlined">arrow_forward_ios</span>
    </i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carouselItems: [
        { image: 'lesson1.png' },
        { image: 'lesson2.png' },
        { image: 'lesson3.png' },
        { image: 'lesson4.png' },
        { image: 'lesson5.png' },
        { image: 'lesson6.png' },
        { image: 'lesson7.png' }
      ],
      isDragging: false,
      startX: 0,
      startScrollLeft: 0,
      timeoutId: null,
      cardPerView: 0
    };
  },
  mounted() {
    this.initializeCarousel();
    this.autoPlay();
  },
  methods: {
    initializeCarousel() {
      const carousel = this.$refs.carousel;
      const firstCardWidth = carousel.querySelector('.card').offsetWidth;
      const carouselChildrens = Array.from(carousel.children);

      this.cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

      carouselChildrens.slice(-this.cardPerView).reverse().forEach((card) => {
        carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
      });

      carouselChildrens.slice(0, this.cardPerView).forEach((card) => {
        carousel.insertAdjacentHTML('beforeend', card.outerHTML);
      });

      carousel.classList.add('no-transition');
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove('no-transition');
    },
    scrollCarousel(direction) {
      const carousel = this.$refs.carousel;
      const firstCardWidth = carousel.querySelector('.card').offsetWidth;
      carousel.scrollLeft += direction * firstCardWidth;
    },
    dragStart(e) {
      this.isDragging = true;
      this.startX = e.pageX;
      this.startScrollLeft = this.$refs.carousel.scrollLeft;
      this.$refs.carousel.classList.add('dragging');
    },
    dragging(e) {
      if (!this.isDragging) return;
      this.$refs.carousel.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
    },
    dragStop() {
      this.isDragging = false;
      this.$refs.carousel.classList.remove('dragging');
    },
    infiniteScroll() {
      const carousel = this.$refs.carousel;

      if (carousel.scrollLeft === 0) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add('no-transition');
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove('no-transition');
      }

      clearTimeout(this.timeoutId);
      if (!this.$el.matches(':hover')) {
        this.autoPlay();
      }
    },
    autoPlay() {
      if (window.innerWidth < 800 || !this.isAutoPlay) return;
      this.timeoutId = setTimeout(() => {
        const carousel = this.$refs.carousel;
        const firstCardWidth = carousel.querySelector('.card').offsetWidth;
        carousel.scrollLeft += firstCardWidth;
      }, 2500);
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  padding: 0 35px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom, rgb(19, 60, 121), rgb(155, 190, 231));
}

/* .wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
} */

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  /* Add this line to center the wrapper horizontally */
  display: flex;
  justify-content: center;
  /* Add this line to center the wrapper horizontally */
  align-items: center;
  /* Add this line to center the wrapper vertically */
}


.wrapper i {
  top: 50%;
  height: 50px;
  width: 50px;
  cursor: pointer;
  font-size: 1.25rem;
  position: absolute;
  text-align: center;
  line-height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translateY(-50%);
  transition: transform 0.1s linear;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 4) - 12px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel .card {
  scroll-snap-align: start;
  height: 322px;
  list-style: none;
  background: #fff;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 10px;
}

.carousel .card .img {
  background: white;
  height: 100%;
  border-radius: 10px;
}


.card .img img {
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border: 4px solid #fff;
  border-radius: 10px;
}


@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2) - 9px);
  }
}

@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 100%;
  }
}

.headline {
  font-size: 24px;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 0 0 3px #fff;
  margin-top: 88px;
  padding: 20px;

}


</style>