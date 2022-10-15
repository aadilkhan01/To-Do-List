import './App.css';
import React, { useState } from 'react';


let global=1;

function App() {

  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])
  function CreateToDo(event) {
    event.preventDefault()

    setTodos(oldTodos => {
      setTask("")

      return [...oldTodos,{todo:task,id:global++}]
    })
  }
  function tryToCheckenterKey(e) {
    if (e.keyCode === 13) {
      CreateToDo()
    }


  }
  function deleteitem(itemID){
    setTodos(oldTodos=>oldTodos.filter(item=>item.id !==itemID))
  }



  return (
    <div className='parent'>
      <div className='child'>
    <h1>"To  Do  List  App"
    </h1>
      <form onSubmit={CreateToDo}>
        <input
          onKeyDown={tryToCheckenterKey}
          type="text"
          value={task}
          onChange={event => {
            setTask(event.target.value)
          }}
          placeholder='Write your text ....' />
        <button type='submit' onClick={CreateToDo} > Create List</button>
      </form>
      <ul>
        {todos.map((item,index)=>{

          return <li className='list'>{item.todo}<button className='button' onClick={()=>deleteitem(item.id)}> Delete</button>     </li>



        })}




      </ul>




    </div>
    </div>
  )
}

export default App;
