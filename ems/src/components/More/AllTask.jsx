import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  return (
    <div
      id="AllTask"
      className="bg-[#1c1c1c] p-5 mt-5 rounded"
    >
      <div className="border-2 border-gray-300 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className="text-xl w-1/5 font-semibold">Employee Name</h2>
            <h3 className="text-xl w-1/5 font-semibold">New Task</h3>
            <h5 className="text-xl w-1/5 font-semibold">Active Task</h5>
            <h5 className="text-xl w-1/5 font-semibold">Completed Task</h5>
            <h5 className="text-xl w-1/5 font-semibold">Failed Task</h5>
          </div>
      <div className="">
      {authData.employees.map(function(elem,idx) {
        return (
          <div key={idx} className="border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
            <h2 className=" text-lg w-1/5 font-medium">{elem.name}</h2>
            <h3 className=" text-lg w-1/5 text-purple-400">{elem.taskCount.newTask}</h3>
            <h5 className=" text-lg w-1/5 text-blue-400">{elem.taskCount.active}</h5>
            <h5 className=" text-lg w-1/5 text-green-400">{elem.taskCount.completed}</h5>
            <h5 className=" text-lg w-1/5 text-red-400">{elem.taskCount.failed}</h5>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default AllTask;
