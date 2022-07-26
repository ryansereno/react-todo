
import React from 'react'

export default function Todo({task,toggleTask}){
    function handleTaskClick(){
        toggleTask(task.id)
    }
    return(
        <div>
        <label for="">
            <input type="checkbox" checked={task.complete} onChange={handleTaskClick}/>
        {task.name}
        </label>
        </div>
    )
}
