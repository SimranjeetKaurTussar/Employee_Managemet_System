import React from 'react'

import Header from "../More/Header";
import TaskNumber from "../More/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header data={data} />
      <TaskNumber data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
