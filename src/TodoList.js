import React from 'react'
import Todo from './Todo'

export default function TodoList({taskList, toggleTask}){
    return(
        taskList.map(task =>{

            return <Todo task={task} key={task.id} toggleTask={toggleTask}/>
        })
    )
}
