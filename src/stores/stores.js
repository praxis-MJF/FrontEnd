import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('ToDo', () => {
  const todolist = reactive({
    title: '',
    description: '',
    date: '',
    time: '',
    priority: '',
    status: ''
  })

  return { todolist }
})
