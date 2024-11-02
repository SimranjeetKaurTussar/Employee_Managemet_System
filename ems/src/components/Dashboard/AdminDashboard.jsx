import AllTask from "../More/AllTask";
import CreateTask from "../More/CreateTask";
import Header from "../More/Header";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
