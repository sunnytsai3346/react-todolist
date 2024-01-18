import React , {useState,useRef,useEffect} from 'react' 
import TodoList from './TodoList';
// add uuid
import {v4 as uuidv4} from 'uuid'; // here is a fix how to import uuid/v4

const LOCAL_STORAGE_KEY ='todoApp.todos' ; // LOCAL_STORAGE_KEY
function App() {
  const [todos , setTodos] = useState([
   
  ])
  const todoNameRef = useRef();

  useEffect =( ()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos)  setTodos(storageTodos);

  },[]); // parameter is [] , means only call once

  useEffect =( ()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos))
    console.log('call localstorage save');


  },[todos]);

  function handleAdd(e){
    const name = todoNameRef.current.value;
    if (name ==='') return ;
    console.log(name);
    setTodos(prevTodos =>{
      return [...prevTodos ,{id:uuidv4(), name:name , completed:false}]
    })
    todoNameRef.current.value='';
  }

  function handleTrigger(id){
    const newtodos = [...todos]; // always clone todos
    const todo = newtodos.find(todo => todo.id === id);
    todo.completed = !todo.completed;
    setTodos( newtodos);
  }

  function handleClear(){
    const newtodos = todos.filter(todo => !todo.completed);
    setTodos(newtodos);
  }


  return (
    <>
    <TodoList todos = {todos} trigger={handleTrigger} />
    
    <div><input type="text" ref={todoNameRef}></input>
    <button onClick={handleAdd}> Add Todo Item </button>
    <button onClick={handleClear}> Clear Completed Items</button>
    </div>
    <div>{todos.filter(todo =>!todo.completed).length} item todo</div>
    </>
  );
}

export default App;
