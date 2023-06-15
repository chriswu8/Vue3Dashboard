<template>
  <span class="cards-container">
    <Card v-for="card in cards" :key="card.id" :data="card" class="card-item" />
  </span>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', description: 'Description of Card 1' },
        { id: 2, title: 'Card 2', description: 'Description of Card 2' },
        { id: 3, title: 'Card 3', description: 'Description of Card 3' },
      ],
    };
  },
};
</script>

<style>
.cards-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 70px;
  /* Adjust the right margin as needed */
  margin-top: 70px;
  /* Adjust the bottom margin as needed */
}

.card-item {
  margin-right: 25px;
}
</style>
