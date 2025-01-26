import { Button, TextField,Box } from "@mui/material";
import React from 'react';
import { useState } from 'react';

const TaskEditForm=({task,onEdit,onCancel})=>{
    const [taskName,setTaskName]=useState(task.name);
    const [taskDescription,setTaskDescription]=useState(task.description);

    const handleEditTask=()=>{
        onEdit(task.id,{name:taskName,description:taskDescription});
    }

    return(
        <Box sx={{marginBottom:2}}>
            <TextField label="Task Name" fullWidth value={taskName} onChange={(e)=>setTaskName(e.target.value)} sx={{mt:2}}/>
            <TextField label="Description" fullWidth value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} sx={{mt:2}} />
            <Button variant="conatined" color="primary" onClick={handleEditTask} sx={{mt:2}}>Save Changes </Button>
            <Button variant="outlined" color="secondary" onClick={onCancel} sx={{mt:2,ml:1}}>Cancel</Button>
        </Box>
    )
}

export default TaskEditForm;