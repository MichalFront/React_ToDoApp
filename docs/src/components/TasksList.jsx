import { useRef, useState } from "react";
// import { tasks as tasksData } from '../data/tasks';


export function TasksList(){
    const[tasks, setTasks] = useState([]);

    const titleRef = useRef(null);
    const descriptionRef = useRef(null);



    const handleAddTask = () => {
        const newTasks = [...tasks];
        newTasks.push({
            title: titleRef.current.value,
            description : descriptionRef.current.value,
            //description : 'siema',
            completed: false,
        });
        setTasks(newTasks);
    };

    const handleToggleTaskState = index => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);

    };


    return(
        <>
        <input type="text " id='title' ref={titleRef} placeholder="Tytuł"/><br />
        <input type="text " id='description' ref={descriptionRef} placeholder="Opis"/><br />
        <button onClick={handleAddTask}>Add new task</button><br /><br />
        {tasks.length == 0 ? (
        <div>Empty tasks list</div>
        ):(
            <ul>
            {tasks.map(({title, description,completed},index) => (
                <li key={index} style={{
                textDecoration: completed ? 'line-through' : 'none'
                }}>{title}<span> - </span>{description}<span> </span>
                <button onClick={() => handleToggleTaskState(index)}>{completed ? 'Undo' : 'Complete'}</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                </li>
            ))}
        </ul>
        )}

        </>

    );
}