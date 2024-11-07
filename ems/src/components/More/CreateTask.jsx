import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");

  const [category, setCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submithandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      assignTo,
      category,
      newTask: true,
      active: false,
      completed: false,
      failed: false,
    });

    const data = userData
    

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.taskCounts.push(newTask);
        // elem.taskCounts.newTask = elem.taskCounts.newTask + 1
      }
    })
    setUserData(data)
    console.log(data);

    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };
  return (
    <div>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-wrap w-full items-center justify-between"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                required
                type="text"
                placeholder="Make a UI design..."
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
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
                onChange={(e) => {
                  setAssignTo(e.target.value);
                }}
                required
                type="text"
                placeholder="Employee Name"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
                type="text"
                placeholder="Web Development"
                className="text-gray-300 text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]"
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              required
              name="text"
              cols="20"
              rows="5"
              placeholder="Write Description here..."
              className="text-gray-300 h-34 text-sm py-2 px-4 w-full rounded outline-none bg-transparent border-[1px]"
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
