import React, { useState } from "react";
const CreateTask = () => {

  const [taskTitle, setTaskTitle] = useState("");
  const [dueDate, setDueDate] = useState("")
  const [assignTo, setAssignTo] = useState("")
  const [priority, setPriority] = useState("")
  const [category, setCategory] = useState("")
  const [taskDescription, setTaskDescription] = useState("")


  const submithandler = (e)=>{
    e.preventDefault()
    console.table([taskTitle,taskDescription,dueDate,assignTo,priority,category])
    setTaskTitle('')
    setDueDate('')
    setAssignTo('')
    setPriority('')
    setCategory('')
    setTaskDescription('')
  }

  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form onSubmit={(e)=>{submithandler(e)} } className="flex flex-wrap w-full items-center justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
              value={taskTitle}
              onChange={(e)=>{
                setTaskTitle(e.target.value)
              }}
                required
                type="text"
                placeholder="Make a UI design..."
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Due Date</h3>
              <input
              value={dueDate}
              onChange={(e)=>{
                setDueDate(e.target.value)
              }}
                required
                type="date"
                placeholder="DD/MM/YYYY"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
              value={assignTo}
              onChange={(e=>{
                setAssignTo(e.target.value)
              })}
                required
                type="text"
                placeholder="Employee Name"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Priority</h3>
              <input
              value={priority}
              onChange={(e)=>{
                setPriority(e.target.value)
              }}
                required
                type="text"
                placeholder="High"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
              value={category}
              onChange={(e)=>{
                setCategory(e.target.value)
              }}
                required
                type="text"
                placeholder="Web Development"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            {/* <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Attachment</h3>
              <input
                
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] cursor-pointer"
                type="file"
              />
            </div> */}
          </div>

          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
            value={taskDescription}
            onChange={(e)=>{
              setTaskDescription(e.target.value)
            }}
              required
              name="text"
              id=""
              cols="30"
              rows="15"
              placeholder="Write Description here..."
              className="text-gray-300 h-44 text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px]"
            ></textarea>
            <button className="bg-blue-900 hover:bg-blue-600 px-5 py-2 rounded mt-4 text-sm w-full">
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTask;
