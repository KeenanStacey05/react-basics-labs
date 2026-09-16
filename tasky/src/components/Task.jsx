const Task = (props) => {
    
        return (
        <div className="card">
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p>{props.description}</p>
            <p className="priority">Priority: {props.priority}</p>
        </div>
    )

}


export default Task;
