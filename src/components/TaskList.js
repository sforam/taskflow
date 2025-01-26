import TaskCard from "./TaskCard";

const TaskList = ({tasks,onDelete,onComplete,onEdit})=>(
    <div>
        {tasks.length>0 ?tasks.map((task)=>(
            <TaskCard key={task.id} task={task} onDelete={onDelete}   onComplete={onComplete} onEdit={onEdit} />
        )):<p>No Tasks available.</p>}
    </div>
);

export default TaskList;