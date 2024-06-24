import React, { useState } from 'react'
const TodoInput = (props) => {
    const { input, setInput, handleAddTodos } = props


    return (
        <>
            <div className='input'>
                <input value={input} type="text" placeholder='Enter todo...' onChange={(e) => setInput(e.target.value)} />
                <button onClick={(e) => {
                    handleAddTodos(input);
                    setInput('')
                }}>Add</button>
            </div>
        </>
    )
}

export default TodoInput;
