import React from "react";

export const RepoResults = (props) => {
  const { repos } = props;
  console.log(repos);
  if (repos !== undefined) {
    const listRepo = repos.map((item) => <li>{item.name}</li>);
    return <ul>{listRepo}</ul>;
  }
};
