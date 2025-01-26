import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Typography,Box,Container } from '@mui/material';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import TaskEditForm from './components/TaskEditForm';


const App = ()  =>{

  const [tasks,setTasks]=useState([]);
  const[editingTask,setEditingTask]=useState(null);

  useEffect(()=>{
    const storedTask = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTask);
  },[]);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);

  const addTask = (task)=>{
    setTasks([...tasks,task]);
  };

  const deleteTask = (taskId)=>{
    setTasks(tasks.filter((task)=>task.id!==taskId));
  }

  const completeTask=(taskId)=>{
    setTasks(tasks.map((task)=>
    task.id === taskId ? {...task,completed:!task.completed}:task
    ));
  };

  const editTask =(taskId,updatedTask)=>{
    setTasks(tasks.map((task)=>task.id===taskId?{...task,...updatedTask}:task
  ));
  setEditingTask(null);
  };


  return (
    <Container>
      <Box sx={{ textAlign:'center', mt:4 }}>
        <Typography variant='h4' sx={{mb:2}}>TaskFlow</Typography>
        {editingTask ?(<TaskEditForm task={editingTask} onEdit={editTask} onCancel={()=>setEditingTask(null)}/>
        ):(
          <>
        
        <AddTaskForm  onAdd={addTask} />
        <TaskList  tasks={tasks} onDelete={deleteTask} onComplete={completeTask} onEdit={setEditingTask} />
        </>
        )}
      </Box>
    </Container>
  );  
}

export default App;
