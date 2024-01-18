import React from 'react'

export default function Todo({todo, trigger}) {
  function handleClick(){
    const id = todo.id;
    trigger(id);
  }  
  return (
    <div>
      <input type="checkbox" checked = {todo.completed} onClick={handleClick} />
      <label>{todo.name}
      </label>
      
    </div>

  )
}
