<script setup></script>

<template>
  <header>
    <nav>
      <RouterLink to="/todo">To do List</RouterLink>
      <RouterLink to="/kanban">Kanban</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 20px;
}
nav {
  display: flex;
  justify-content: center;
  gap: 25px;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  text-decoration: underline;
  color: dodgerblue;
}
</style>
