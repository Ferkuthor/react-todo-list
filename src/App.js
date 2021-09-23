import React, { useState } from 'react'

const App = () => {

    // Task
    const [_task, _setTask] = useState({});
    // Set
    const onChangeTask = ({ target }) => {
        const { name, value } = target;
        const time = new Date().toLocaleTimeString();
        _setTask((prev) => ({ ...prev, [name]: value, time: time}));
    };

    // List Tasks
    const [_listTasks, _setListTasks] = useState([])
    // Add
    const onAddTask = () => {
        if(_task.name){
            _setListTasks((prev) => ([...prev, _task]));
            _setTask({});
        }           
    }
    // Del
    const onDeleteTask = (delId) => {        
        _setListTasks((prev) => prev.filter((task, id) => delId !== id));
    };

    // Render
    return (
        <div>
            <h1> Mi Lista De Tareas </h1>
            <input type="text" placeholder="Nombre" onChange={onChangeTask} name="name" value={_task.name || ''} />
            <input type="text" placeholder="Descripción" onChange={onChangeTask} name="desc" value={_task.desc || ''} />
            &nbsp;

            {!_task.name ? null : (
                 <input type="submit" onClick={onAddTask} name="add" value="Agregar" />
            )}            
           
            <br /> <br />
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Nombre </th>
                        <th> Descripción </th>
                        <th> Hora </th>
                        <th> Opciones </th>
                    </tr>
                </thead>
                
                <tbody>
                    {_listTasks.map((task, id) => (
                        <tr key={id} >
                            <th> {id} </th>
                            <th>{task.name}</th>
                            <th>{task.desc}</th>
                            <th>{task.time}</th>
                            <th><button onClick={()=>onDeleteTask(id)}>Quitar</button></th>
                        </tr>
                    ))}
                 </tbody>
            </table>
            
        </div>
    )
}

export default App

