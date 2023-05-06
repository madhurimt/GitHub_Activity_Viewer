import { useEffect, useState } from "react";
import { API_URL } from "../config";
import { RepoResults } from "./RepoResults";

export const UserInput = () => {
  const [userName, setUserName] = useState("");
  const [userInput, setUserInput] = useState(userName);
  const [repos, setRepo] = useState();

  function handleClick() {
    setUserInput(userName);
  }

  useEffect(() => {
    if (!userInput) return;
    getData();
  }, [userInput]);

  function getData() {
    fetch(`${API_URL}/users/${userInput}/repos`)
      .then(function (res) {
        return res.json();
      })
      .then(function (info) {
        setRepo(info);
      });
  }
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
      <button onClick={handleClick}>Search</button>
      <RepoResults repos={repos} user={userInput} />
    </>
  );
};
