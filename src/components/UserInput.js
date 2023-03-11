import { useState } from "react";

export const UserInput = () => {
  const [userName, setUserName] = useState();
  return (
    <>
      <h1>Enter the username to get the respositories</h1>
      <label>UserName</label>
      <input
        type="text"
        placeholder="Enter the username"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <button>Search</button>
    </>
  );
};
