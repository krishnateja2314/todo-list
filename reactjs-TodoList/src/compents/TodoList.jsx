import React from 'react'
import TodoCard from './TodoCard'

const TodoList = (props) => {
  const { handleEditTodo, handleDeleteTodo, todos } = props

  return (
    <ul className='main'>
      {todos.map((todo, index) => {
        return (
          <TodoCard handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} index={index} key={index}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList;
