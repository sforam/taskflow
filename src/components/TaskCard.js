import { Card, CardContent, Typography ,Button, FormControlLabel,Checkbox} from '@mui/material';
import React from 'react';


const TaskCard=({task,onDelete,onComplete,onEdit})=>(

    <Card sx={{marginBottom:2}}>
        <CardContent>
           <FormControlLabel control={<Checkbox checked={task.completed} onChange={()=>onComplete(task.id)} />}
                label={<Typography variant={task.completed ? 'body2':'h6'} style={{textDecoration:task.completed ? 'line-through':'none' }}>{task.name}</Typography>}
           /> 
            
            <Typography>{task.Description}</Typography>
            <Button color="primary" onClick={()=>onEdit(task)}>Edit</Button>
            <Button color="error" onClick={()=>onDelete(task.id)}>Delete</Button>
            
        </CardContent>
    </Card>
);

export default TaskCard;    