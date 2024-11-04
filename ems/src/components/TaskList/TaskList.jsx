import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="flex overflow-x-auto items-center gap-1 flex-nowrap mt-10 h-[50%] py-5 w-full rounded-xl "
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} />;
        }
        if (elem.newTask) {
          return <NewTask key={idx} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} />;
        }
      })}
    </div>
  );
};

export default TaskList;
