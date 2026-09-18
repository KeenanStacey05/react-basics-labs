const Task = (props) => {
    
    const priorityColor = () => {
        switch(props.priority) {
            case "Low":
                return "green";
            case "Medium":
                return "yellow";
            case "High":
                return "red";
            default:
                return "lightgrey";
        }
    };

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p className="priority" style={{color: priorityColor()}}>
                Priority: {props.priority}
            </p>
            <button onClick={props.markDone}className="doneButton">
                Done
            </button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )};



export default Task;
