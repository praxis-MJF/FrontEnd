import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTodoStore = defineStore('TodoStore', () => {
  const todolist = ref([])
  function getTodos(){
    let todos;
    if (localStorage.getItem('todoList') !== undefined && localStorage.getItem('todoList') !== null){
      todos = ref(JSON.parse(localStorage.getItem('todoList')))
    }
    else{
      localStorage.setItem('todoList', JSON.stringify([]));
      getTodos();
    }
    todolist.value = todos.value
    return todos
  }

  function save() {
    localStorage.setItem('todoList', JSON.stringify(todolist.value));
    getTodos()
  }

  function addTodo(task) {
    task.id = getId();
    todolist.value.push(task);
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
  function getId(){
    const list = getTodos().value
    return list.length + 1 
  }

  return { addTodo, removeTodo, updateTodo, getTodos, todolist };
});
