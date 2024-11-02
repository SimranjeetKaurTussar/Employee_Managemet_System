// Have to create employee management system login page
import { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded border-gray-400 p-10">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-gray-300 outline-none bg-transparent border-2 border-gray-400 py-4 px-5 mt-2 rounded placeholder:text-gray"
            type="email"
            placeholder="Enter your email..."
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-gray-300 outline-none bg-transparent border-2 border-gray-400 py-4 px-5 mt-2 rounded placeholder:text-gray"
            type="password"
            placeholder="Enter your password..."
          />
          <button
            className="border-none outline-none py-4 px-8 mt-3 rounded bg-blue-900 hover:bg-blue-600 text-gray"
            type="submit"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
