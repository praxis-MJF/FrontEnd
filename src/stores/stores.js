import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('TodoStore', () => {
  const todolist = ref([]);

  function getTodos(){
    let todos = [];
    if (localStorage.getItem('todoList')) todos = JSON.parse(localStorage.getItem('todoList'));
    else localStorage.setItem('todoList', JSON.stringify([]));
    todolist.value = todos;
  };

  function save() {
    localStorage.setItem('todoList', JSON.stringify(todolist.value));
    getTodos();
  };
  
  function addTodo(task) {
    task.id = getId();
    todolist.value.push(task);
    save();
  };

  function removeTodo(id) {
    todolist.value.splice(todolist.value.findIndex(todo => todo.id === id), 1);
    save();
  };

  function updateTodo(todo) {
    todolist.value = todolist.value.map(item => item.id === todo.id ? todo : item);
    save();
  };
  
  function getId(){
    let id = localStorage.getItem('todoIdCounter') || 0;
    id++;
    localStorage.setItem('todoIdCounter', id);
    return id;
  };
  getTodos()
  return { addTodo, removeTodo, updateTodo, getTodos, todolist, save };
});