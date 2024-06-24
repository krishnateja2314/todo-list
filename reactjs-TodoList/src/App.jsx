import { useState, useEffect } from "react"
import TodoInput from "./compents/TodoInput"
import TodoList from "./compents/TodoList"

function App() {
  const [todos, settodos] = useState([])
  const [input, setInput] = useState('')

  function persistData(List) {
    localStorage.setItem('todos', JSON.stringify({ todos: List }))
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    settodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex != index
    })
    persistData(newTodoList)
    settodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    console.log(valueToBeEdited)
    setInput(valueToBeEdited)
    handleDeleteTodo(index)
  }



  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    settodos(localTodos)
  }, [])

  return (
    <div className="div">
      <TodoInput input={input} setInput={setInput} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </div>
  )
}

export default App
