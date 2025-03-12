import { useState } from "react";

const toDoListItems = [
    "Thành Viên",
    "Bác Sĩ",
    "Admin",
]
const ToDoListTrigger = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="cell">
            <button onClick={() => setIsActive(!isActive)}>▼</button>
            <div className="dropDown">
                {isActive && (
                    toDoListItems.map((items) => (<div className="todolistItems" >{items}</div>))
                )}
            </div>
        </div>
    );
}


export default ToDoListTrigger;