import { Box, Button, FormControl, MenuItem, TextField,InputLabel,Select} from "@mui/material";
import { useState } from "react"

const AddTaskForm =({onAdd})=>{
    const [taskName,setTaskName]=useState('');
    const [taskDescription,setTaskDescription]=useState('');
    const [taskPriority,setTaskPriority]=useState('Medium')

    const handleAddTask=()=>{
        if(taskName.trim() && taskDescription.trim()){
            onAdd({id:Date.now(),name:taskName,Description:taskDescription,priority:taskPriority,completed:false});
            setTaskName('');
            setTaskDescription('');
            setTaskPriority('Medium');//Reset to default
        }
    };

return (
    <Box sx={{marginBottom:2}}>
        <TextField label="Task Name" fullWidth value={taskName} onChange={(e)=>setTaskName(e.target.value)}></TextField>
        <TextField label="Description" fullWidth value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} sx={{mt:2}}></TextField>
        
        <FormControl fullWidth sx={{mt:2}}>
            <InputLabel>Priority</InputLabel>
            
            <Select value={taskPriority} onChange={(e)=> setTaskPriority(e.target.value)} label="Priority">
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
            </Select>
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleAddTask} sx={{mt:2}}>Add Task</Button>
    </Box>

)
};

export default AddTaskForm;