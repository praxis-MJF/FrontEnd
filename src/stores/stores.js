import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', () => {

  const storedTodos = localStorage.getItem('todoList');
  const todolist = ref([{}]);
  
  if (storedTodos) {
    try {
      todolist.value = JSON.parse(storedTodos);
    } catch (error) {
      console.error('Error parsing stored todos:', error);
    }
  }

  function save() {
    localStorage.setItem('todoList', JSON.stringify(todolist.value));
  }

  function addTodo(task) {
    todolist.value.push(task);
    console.log(todolist)
    save();
  }

  function removeTodo(id) {
    todolist.value.splice(todolist.value.findIndex(todo => todo.id === id), 1);
    save();
  }

  function updateTodo(todo) {
    todolist.value = todolist.value.map(item => item.id === todo.id ? todo : item);
    save();
  }

  return { todolist, addTodo, removeTodo, updateTodo };
});
