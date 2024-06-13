<script setup>
import { useTodoStore } from '@/stores/stores.js'
import { ref } from 'vue'

const store = useTodoStore()

const task = ref({
  title: '',
  description: '',
  completed: false,
  id: undefined
})
</script>
<template>
  <h1>To Do List</h1>
  <div class="inputs-todo">
    <input v-model="task.title" class="todo" placeholder="Título" />
    <input v-model="task.description" class="todo" placeholder="Descrição" />
  </div>
  <button @click="store.addTodo(task)" class="add" >Add Task</button>
  <ul class="list">
    <li v-for="(item, index) in store.todolist" :key="index" class="task">
      {{ index + 1 }} - {{ item.title }}
      <div class="interactions">
        <input type="checkbox" class="box" /> 
        <button @click="store.removeTodo(item.id)" class="remove">X</button>
      </div>
    </li>
  </ul>
</template>
<style scoped>
h1{
  text-align: center;
  margin: 10px;
}
.inputs-todo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
}
.todo {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
}
.add {
  display: flex;
  margin: 5px auto;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}
.add:hover {
  background-color: #e0e0e0;
}
.list {
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto 0;
  padding: 20px 0;
  border-radius: 15px;
  box-shadow: 5px 7px 15px black;
  background-color: #e0e0e0;
}
.task {
  width: 35vw;
  display: grid;
  grid-template-columns: 2fr 0.5fr 0.5fr;
  align-items: center;
  margin: 5px;
  padding: 10px;
  gap: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}
.task:hover {
  background-color: #f0f0f0;
}
.interactions {
  background-color: red;
  display: flex;
  justify-content: center;
  margin-left: 150%;
  gap: 10px;
  align-items: center;
}
.box {
  width: 20px;
  height: 20px;
}
.remove {
  width: 25px;
  height: 25px;
  padding: 5px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
  
}
.remove:hover {
  background-color: #e0e0e0;
}

</style>
