import React, { useState } from "react";
import { API_URL } from "../config";
import { UserInput } from "./UserInput";
import CommitResults from "./CommitResults";

export const RepoResults = (props) => {
  const [userRepo, setUserRepo] = useState();
  const [commit, setCommits] = useState();

  function handleUserClick() {
    fetch(`${API_URL}/repos/${props.user}/${userRepo}/commits`)
      .then(function (res) {
        return res.json();
      })
      .then(function (result) {
        setCommits(result);
      });
  }

  if (props.repos !== undefined) {
    const listRepo = props.repos.map((item) => (
      <li key={item.id}>{item.name}</li>
    ));
    return (
      <>
        <ul>{listRepo}</ul>
        <h2>Enter the repository name to find the commits</h2>
        <label>Repository</label>
        <input
          type="text"
          placeholder="Enter the repository"
          value={userRepo}
          onChange={(e) => {
            setUserRepo(e.target.value);
          }}
        />
        <button onClick={handleUserClick}>Search Commits</button>
        <CommitResults comm={commit} />
      </>
    );
  }
};
