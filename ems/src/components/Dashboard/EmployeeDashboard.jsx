// import React from 'react'

import Header from "../More/Header";
import TaskNumber from "../More/TaskNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () => {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen">
      <Header />
      <TaskNumber />
      <TaskList />
    </div>
  );
};

export default EmployeeDashboard;
