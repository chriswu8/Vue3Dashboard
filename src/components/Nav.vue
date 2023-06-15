<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-icons">home</span>Home</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">laptop_chromebook</span>Courses</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">cast_for_education</span>Tutorials</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">rocket_launch</span>Projects</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">library_books</span>Resources</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">rss_feed</span>Blog</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">event</span>Events</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">forum</span>Community</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">contact_support</span>FAQ</a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">phone_in_talk</span>Contact</a>
      </li>
      <div class="separator"></div>
      <hr>
      <li class="nav-item">
        <a href="#" class="nav-link"><span class="material-symbols-outlined">settings</span>Settings</a>
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
  display: flex;
  align-items: center;
  padding: 0.5rem;
  color: #ffffff;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
}

.nav-link .material-icons,
.nav-link .material-symbols-outlined {
  margin-right: 0.5rem;
}

.separator {
  flex-grow: 1;
  border: none;
  height: 1px;
  background-color: #ffffff;
  margin: 0.5rem 0;
}

@media (max-width: 768px) {
  .separator {
    height: 0.5px;
    /* Adjust the height for smaller screens */
  }
}
</style>