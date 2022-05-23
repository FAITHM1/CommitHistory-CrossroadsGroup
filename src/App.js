import { useState, useEffect } from "react";

function App() {
  //holds the state of the commits
  const [commits, setCommits] = useState([]);
  //API url- going to hide the api url in a dotenv file
  const url =
    "https://api.github.com/repos/FAITHM1/CommitHistory-CrossroadsGroup/commits";

  const getCommits = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCommits(data);
  };

  // recursive function
  const comments = [];
  const recursive = (num) => {
    if (num > 0) {
      comments.push(commits[num-1].commit.message);
      recursive(num - 1);
    }
  };

  useEffect(() => {
    getCommits();
  }, []);
  
  recursive(commits.length);
  console.log(comments);
  return <div className="App"></div>;
}

export default App;
