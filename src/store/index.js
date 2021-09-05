import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    tasks:[]
  },
  getters:{
    allTasks: (state) => state.tasks
  },
  mutations: {
    getTasks:(state, tasks) => (state.tasks = tasks),
    newTasks:(state, newTask) => state.tasks.unshift(newTask),
    removeTask:(state, id) => state.tasks = state.tasks.filter(task => task.id !== id),
    toggleReminder:(state, id) => state.tasks = state.tasks.map( task =>{
      if(task.id === id) task.reminder = !task.reminder
      return task
    })
  },
  actions: {
    async fetchTasks({commit}){
      const response = await axios.get('http://localhost:5000/tasks')
      commit('getTasks', response.data)
    },
    async addTask({commit}, newTask){
      const response = await axios.post('http://localhost:5000/tasks', newTask)
      commit('newTasks', response.data)
    },
    async deleteTask ({commit},id){
      await axios.delete(`http://localhost:5000/tasks/${id}`)
      commit('removeTask', id)
    },
    async toggleReminder({commit}, id){
      const response = await axios.get(`http://localhost:5000/tasks/${id}`) 
      const newReminder = {...response.data, reminder:!response.data.reminder}
      // console.log(newReminder)
      await axios.patch(`http://localhost:5000/tasks/${id}`, newReminder)
      commit('toggleReminder',id)
    }
  },
  modules: {
  }
})
