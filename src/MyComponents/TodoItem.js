import React, { useState } from 'react'
import './TodoItem.css'

export const TodoItem = ({todo, onDelete}) => {
    const [done, setDone] = useState("");
    return (
        <div>
            <h4 className={`my-1 ${done === true && "struck"}`}>{todo.title}</h4>
            <p className={`my-1 ${done === true && "struck"}`}>{todo.desc}</p>
            <button onClick={()=>{
                onDelete(todo)
            }} className="btn btn-sm btn-danger my-3">Delete</button>
            <button onClick={()=>{
                setDone(true)
            }} className="btn mx-3 btn-sm btn-success my-3">Done</button>
            <button onClick={()=>{
                setDone(false)
            }} className="btn btn-sm btn-warning my-3">UnDo</button>
        </div>
    )
}
