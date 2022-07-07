import { createSlice } from '@reduxjs/toolkit'

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [
      {
        id: 1,
        title: 'Learn Redux',
        completed: true,
      },
      {
        id: 2,
        title: 'Learn redux-toolkit',
        completed: false,
      },
    ],
    activeFilter: 'all',
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    },
    toggle: (state, action) => {
      const { id } = action.payload
      const item = state.items.find((item) => item.id === id)
      item.completed = !item.completed
    },
    removeTodo: (state, action) => {
      const { id } = action.payload
      const filtered = state.items.filter((item) => item.id !== id)
      state.items = filtered
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload
    },
    clearCompleted: (state, action) => {
      const filtered = state.items.filter((item) => item.completed === false)
      state.items = filtered
    },
  },
})
export const selectTodos = (state) => state.todos.items

export const {
  addTodo,
  toggle,
  removeTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions
export default todosSlice.reducer
