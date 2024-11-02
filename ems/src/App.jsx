import { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  useEffect(() => {
    if(authData){
      const loggedInUser=localStorage.getItem("loggedInUser")
    }
  }, [authData])
  

  const handleLogin = (email, password) => {
    if (email == "admin@gmail.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}))
    } else if (authData && authData.employees.find((e)=>e.email == email && e.password==password)) {
      setUser("employees");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "employees"}))
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
