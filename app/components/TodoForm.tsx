"use client"
import axios from "axios";
import {useEffect, useState } from "react"
import TodoList from "./TodoList";
import { text } from "stream/consumers";

export default function TodoForm() {
const[task, setTask] = useState("")
const [tasks, setTasks] = useState<any[]>([])
const [editId , setEditId] = useState("")
const [isEditing , setIsEditing] = useState(false)

//POST
async function addTask(){
    if(task.trim() === ""){
        return
    }

    const response = await axios.post("/api/task",{
        text:task
    })

setTasks([...tasks , response.data])
setTask("")
}

//DELETE
async function deleteTask(id:string){

    await fetch("/api/task",{

        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify({ id })

    })

    const updatedTasks = tasks.filter(
        (item:any)=> item._id !== id
    )

    setTasks(updatedTasks)
}

//PATCH/EDIT
function editTask(task:any){
    setTask(task.text)
    setEditId(task._id)
    setIsEditing(true)
}

async function updateTask(){

    const response = await fetch("/api/task",{

        method:"PATCH",

        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            id:editId,
            text:task
        })

    })

    const updatedTask = await response.json()

    const updatedTasks = tasks.map((item:any)=>
        item._id === editId
        ? updatedTask
        : item
    )

    setTasks(updatedTasks)
    setTask("")
    setEditId("")
    setIsEditing(false)
}

//GET/FETCH
async function fetchTasks(){

    try {

        const response = await fetch("/api/task")

        const data = await response.json()

        console.log(data)

        if(Array.isArray(data)){
            setTasks(data)
        } else {
            setTasks([])
        }

    } catch(error){

        console.log(error)

        setTasks([])
    }
}

useEffect(()=>{
    fetchTasks()
},[])

    return(

        <div className="todo-container">
            <h1>Todo App</h1>

            <div className="input-section">
            <input
                type="text"
                placeholder="Enter Task..."
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />

            <button
            onClick={
                isEditing
                ? updateTask
                : addTask
            }
            >
                
                {
                    isEditing
                    ? "Update"
                    : "Add"
                }

            </button>

        </div>
        <TodoList
            tasks={tasks}
            deleteTask={deleteTask}
            editTask={editTask}
            />
            
    </div>

    )
}