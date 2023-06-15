<template>
  <div class="welcome">
    <h1>Welcome to Coinchain University</h1>
    <p>Unlock your potential with hands-on projects</p>
    <button>Get Started</button>
  </div>
</template>

<style>
.welcome {
  background-image: linear-gradient(to right, #434343 0%, black 100%);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  color: #fff;
}

.welcome h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.welcome p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.welcome button {
  background-color: #fff;
  color: #434343;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.welcome button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
