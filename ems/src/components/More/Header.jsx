// import React from 'react'

const Header = () => {
  return (
    <div>
      <div className="flex p-5 items-end justify-between">
        <h1 className="text-2xl font-medium">
          Hello <br />
          <span className="text-3xl text-blue-600 font-semibold">Simran</span>
        </h1>
        <button className="border-2 px-2 bg-rose-700 text-lg font-medium rounded-md">Log Out</button>
      </div>
    </div>
  );
};

export default Header;
