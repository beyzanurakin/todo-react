import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggle, removeTodo, selectTodos } from '../redux/todos/todosSlice'
let filtered = []
function TodoList() {
  const items = useSelector(selectTodos)
  const activeFilter = useSelector((state) => state.todos.activeFilter)

  const dispatch = useDispatch()

  const handleRemove = (id) => {
    if (window.confirm('Are You Sure About this action ?')) {
      dispatch(removeTodo({ id }))
    }
  }
  filtered = items
  if (activeFilter !== 'all') {
    filtered = items.filter((todo) =>
      activeFilter === 'active'
        ? todo.completed === false
        : todo.completed === true
    )
  }

  return (
    <ul className='todo-list'>
      {filtered.map((todo) => {
        return (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <div className='view'>
              <input
                className='toggle'
                type='checkbox'
                checked={todo.completed}
                onChange={() => {
                  dispatch(toggle({ id: todo.id }))
                }}
              />
              <label>{todo.title}</label>
              <button
                className='destroy'
                onClick={() => {
                  handleRemove(todo.id)
                }}
              ></button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoList
