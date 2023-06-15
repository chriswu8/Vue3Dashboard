<template>
  <div class="card">
    <img :src="image" alt="Card Image" class="card-image">
    <div class="card-content">
      <h4 class="card-title">{{ title }}</h4>
      <p class="card-description">{{ description }}</p>
      <div class="course-details">
        <div class="course-difficulty">
          <span class="difficulty-label">Difficulty:</span>
          <span class="difficulty-level">{{ difficulty }}</span>
        </div>
        <div class="course-duration">
          <span class="duration-label">Duration:</span>
          <span class="duration-hours">{{ duration }} hours</span>
        </div>
      </div>
      <div class="instructor">
        <img :src="instructorImage" alt="Instructor" class="instructor-image">
        <h4 class="instructor-name">{{ instructor }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    instructorImage: {
      type: String,
      required: true,
    },
    instructor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.card {
  width: 250px;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.card-content {
  padding: 1rem;
}

.card-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.card-description {
  font-size: 12px;
  color: #888888;
  margin-bottom: 1rem;
}

.course-details {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.difficulty-label,
.duration-label {
  font-size: 12px;
  font-weight: bold;
  margin-right: 0.5rem;
}

.difficulty-level,
.duration-hours {
  font-size: 12px;
  color: #888888;
}

.instructor {
  display: flex;
  align-items: center;
}

.instructor-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
}

.instructor-name {
  font-size: 12px;
  font-weight: bold;
}
</style>
