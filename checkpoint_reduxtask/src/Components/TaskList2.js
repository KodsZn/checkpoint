import React, { useState } from 'react'
import './Task.css'
import TaskCard from './TaskCard'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from '../JS/Actions/TaskAction'

const TaskList2 = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    const [Name,setName]=useState("")
    const handleClose = () => setShow(false);
    const dispatch=useDispatch();

    const Tasks=useSelector((state)=>state.TaskReducer.Tasks)

  return (
    <div>
        <section class="container" show={show} >
  <div class="heading">
    <img class="heading__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg" />
    <h1 class="heading__title">To-Do List</h1>
  </div>
  <form class="form">
    <div>
      <label class="form__label" for="todo">~ Today I need to ~</label>
      <input class="form__input"
           type="text" 
           id="todo" 
           name="to-do"
           size="30" onChange={(e)=>setName(e.target.value)}></input>
      <button class="button" onClick={()=>(dispatch(addtask({id:Math.random(),name:Name,IsDone:false})),handleClose())}><span>Submit</span></button>
    </div>
  </form>
  <div>
    <ul class="toDoList" onClick={handleShow}>
    {Tasks.map(task =><TaskCard task={task} key={task.id} />)}

    </ul>
  </div>
</section>

    </div>
  )
}

export default TaskList2