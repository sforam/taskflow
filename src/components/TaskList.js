import TaskCard from "./TaskCard";

const priorityOrder ={'High':1,'Medium':2,'Low':3};

const TaskList = ({tasks,onDelete,onComplete,onEdit})=>{
    const storedTask =[...tasks].sort((a,b)=>priorityOrder[a.priority]-priorityOrder[b.priority])

    return(
    <div>
        {tasks.length>0 ?tasks.map((task)=>(
            <TaskCard key={task.id} task={task} onDelete={onDelete}   onComplete={onComplete} onEdit={onEdit} />
        )):<p>No Tasks available.</p>}
    </div>
    );
};

export default TaskList;