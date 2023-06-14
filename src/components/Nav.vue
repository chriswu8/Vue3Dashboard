<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">About</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Services</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Contact</a>
      </li>
    </ul>
  </nav>
</template>

<style>
.nav {
  margin-top: 2rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 1rem;
}

.nav-link {
  display: block;
  padding: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
}
</style>
