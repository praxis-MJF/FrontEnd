<script setup>
import { useTodoStore } from '@/stores/stores.js'
import { reactive } from 'vue';

const store = useTodoStore()
console.log(store)
const x = reactive({
  id: '',
  title: '',
  description: '',
  date: '',
  time: '',
  priority: '',
  status: ''
})

</script>

<template>
<input type="number" v-model="x.id">
<input type="text" v-model="x.title">
<input type="text" v-model="x.description">
<input type="text" v-model="x.date">
<input type="text" v-model="x.time">
<input type="text" v-model="x.priority">
<input type="text" v-model="x.status">

<button @click="store.addTodo(x)">Add Task</button>

<ul>
  <li v-for="todo in store.todolist">
    {{todo.id}}
    {{todo.title}}
    {{todo.description}}
    {{todo.date}}
    {{todo.time}}
    {{todo.priority}}
    {{todo.status}}
    <button @click="store.removeTodo(todo.id)">Remove Task</button>

  </li>
</ul>
</template>

<style scoped>

</style>
