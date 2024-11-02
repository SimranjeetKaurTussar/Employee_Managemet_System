const TaskNumber = () => {
  return (
    <div className="flex mt-10 justify-between gap-4 screen">
      <div className="rounded-xl p-10 w-[25%] bg-purple-400">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">New Task</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-blue-400">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-green-400">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">Accepted</h3>
      </div>
      <div className="rounded-xl p-10 w-[25%] bg-yellow-400">
        <h2 className="text-2xl font-medium">0</h2>
        <h3 className="text-xl font-semibold">Failed</h3>
      </div>
    </div>
  );
};

export default TaskNumber;