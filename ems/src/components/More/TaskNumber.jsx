import React from "react";
const TaskNumber = ({data}) => {
  return (
    <div className="flex mt-10 justify-between gap-4 screen">
      <div className="rounded-xl p-10 w-[25%] bg-purple-400">
        <h2 className="text-2xl font-medium">{data.taskCounts.newTask}</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-green-400">
        <h2 className="text-2xl font-medium">{data.taskCounts.completed}</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-blue-400">
        <h2 className="text-2xl font-medium">{data.taskCounts.active}</h2>
        <h3 className="text-xl font-semibold">Accepted Task</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-red-400">
        <h2 className="text-2xl font-medium">{data.taskCounts.failed}</h2>
        <h3 className="text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskNumber;
