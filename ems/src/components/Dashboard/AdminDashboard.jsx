import AllTask from "../More/AllTask";
import CreateTask from "../More/CreateTask";
import Header from "../More/Header";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header changeUser = {props.changeUser}/>
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
