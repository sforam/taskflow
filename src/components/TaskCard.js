import { Card, CardContent, Typography ,Button, FormControlLabel,Checkbox,Chip} from '@mui/material';
import React from 'react';

const getPriorityColor=(priority)=>{
    switch(priority){
        case 'High':return 'error';
        case 'Medium':return 'warning';
        case 'Low':return 'success';
        default: return'default';
    }
};

const TaskCard=({task,onDelete,onComplete,onEdit})=>(

    <Card sx={{marginBottom:2,borderLeft:`5px solid ${getPriorityColor(task.priority)}`}}>
        <CardContent>
           <FormControlLabel control={<Checkbox checked={task.completed} onChange={()=>onComplete(task.id)} />}
                label={<Typography variant={task.completed ? 'body2':'h6'} style={{textDecoration:task.completed ? 'line-through':'none' }}>{task.name}</Typography>}
           /> 
            
            <Typography>{task.Description}</Typography>
            <Chip label={task.priority} color={getPriorityColor(task.priority)} sx={{mt:1}} />
            <Button color="primary" onClick={()=>onEdit(task)} sx={{ml:1}}>Edit</Button>
            <Button color="error" onClick={()=>onDelete(task.id)} sx={{ml:1}}>Delete</Button>
            
        </CardContent>
    </Card>
);

export default TaskCard;    