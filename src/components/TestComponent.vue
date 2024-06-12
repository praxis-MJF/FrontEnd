<script setup>
import { useTodoStore } from '@/stores/stores.js'
import { ref } from 'vue';

const store = useTodoStore()

const task = ref({
  title: '',
  description: '',
  completed: false,
  id: undefined
})


</script>

<template>

<input v-model="task.title">

<input v-model="task.description">

<button @click="store.addTodo(task)">Add Task</button>
<ul>
  <li v-for="todo in store.todolist" :key="todo.id">
    {{ todo.title }}
    {{ todo.id }}
    <button @click="store.removeTodo(todo.id)">Remove</button>
  </li>
</ul>
</template>

<style scoped>

</style>
