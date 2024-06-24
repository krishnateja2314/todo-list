import React from 'react'


function TodoCard(props) {
  const { handleEditTodo, handleDeleteTodo, children, index } = props
  return (
    <li className='todoItem'>
      {children}
      <div className='actionContainer'>
        <button onClick={() => {
          console.log(index)
          handleEditTodo(index);
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => handleDeleteTodo(index)}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}

export default TodoCard;
