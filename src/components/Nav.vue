<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Courses</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Tutorials</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Projects</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Resources</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Blog</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Events</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Community</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">FAQ</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Contact</a>
      </li>
      <div class="separator"></div>
      <hr>
      <li class="nav-item">
        <a href="#" class="nav-link">Settings</a>
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

.separator {
  flex-grow: 1;
  height: 100px;
  /* Adjust the height as per your needs */
}

@media (max-width: 768px) {
  .separator {
    height: 50px;
    /* Adjust the height for smaller screens */
  }
}
</style>
