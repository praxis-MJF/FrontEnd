import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('TodoStore', () => {

  const storedTodos = localStorage.getItem('todoL');
  let todolist;
  
  if (storedTodos !== 'undefined') {
    try {
      todolist = ref(JSON.parse(storedTodos));
    } catch (error) {
      console.error('Error parsing stored todos:', error);
      todolist = ref([]);
    }
  } else {
    todolist = ref([]);
  }

  function save() {
    localStorage.setItem('todoL', JSON.stringify(todolist.value));
  }

  function addTodo(todo) {
    todolist.value.push(todo);
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
