<template>
  <div>
    <div class="quote-content">
      <p class="quote-text mt-4 italic">
        "Success is not final, failure is not fatal: It is the courage to continue that counts."
      </p>
      <div class="quote-author">- Winston Churchill</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.quote-content {
  margin-top: 88px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 10px;
  align-items: center;
}

.quote-text {
  color: white;
  grid-column: 3 / 9;
}

.quote-author {
  color: white;
  font-size: small;
  text-align: center;
  grid-column: 1 / 8;
  margin-left: auto;
}
</style>
