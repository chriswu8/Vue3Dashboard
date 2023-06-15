<template>
  <div class="testimonials">
    <h2 class="headline">Testimonials</h2>
    <div class="testimonial-grid">
      <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial">
        <div class="testimonial-image">
          <img :src="require(`@/assets/customers/customer${testimonial.id}.png`)" :alt="testimonial.author" class="rounded-full">
        </div>
        <span class="author">{{ testimonial.author }}</span>
        <p>{{ testimonial.message }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia enim pulvinar.",
          author: "Kevin Liu"
        },
        {
          id: 2,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia enim pulvinar.",
          author: "Jabari Mwangi"
        },
        {
          id: 3,
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate felis ut nunc placerat, at lacinia enim pulvinar.",
          author: "Ava Anderson"
        }
      ]
    };
  }
};
</script>

<style>
.testimonials {
  margin-top: 188px;
  margin-bottom: 188px;
  margin-left: 25px;
  margin-right: 25px;
}

p {
  color: white;
  font-style: italic;
}

.author {
  color: white;
}

.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
}

.testimonial-image {
  margin-bottom: 10px;
}

.testimonial-image img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.testimonial p {
  margin-bottom: 10px;
}

.author {
  font-weight: bold;
}
</style>
