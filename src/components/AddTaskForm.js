import { Description } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react"

const AddTaskForm =({onAdd})=>{
    const [taskName,setTaskName]=useState('');
    const [taskDescription,setTaskDescription]=useState('');


    const handleAddTask=()=>{
        if(taskName.trim() && taskDescription.trim()){
            onAdd({id:Date.now(),name:taskName,Description:taskDescription});
            setTaskName('');
            setTaskDescription('');
        }
    }


return (
    <Box sx={{marginBottom:2}}>
        <TextField label="Task Name" fullWidth value={taskName} onChange={(e)=>setTaskName(e.target.value)}></TextField>
        <TextField label="Description" fullWidth value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} sx={{mt:2}}></TextField>
        <Button variant="contained" color="primary" onClick={handleAddTask} sx={{mt:2}}>Add Task</Button>
    </Box>

)
};

export default AddTaskForm;