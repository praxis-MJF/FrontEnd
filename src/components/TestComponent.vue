<script setup>
import { useTodoStore } from '@/stores/stores.js'
import { ref } from 'vue';

const store = useTodoStore()

const list = ref(JSON.parse(localStorage.getItem('todoList')))
console.log(list)
const task = ref({
  id: 1,
  description: '',
})

</script>

<template>
<input type="text" v-model="task.description">

<button @click="store.addTodo(task)">Add Task</button>

<ul>
  <li v-for="(task, index) in list" :key="index">
   {{ index + 1 }} - {{task.description}}    
    <button @click="store.removeTodo(task.id)">X</button>
  </li>
</ul>
</template>

<style scoped>

</style>
