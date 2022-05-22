import { useState, useEffect } from "react";

function App() {
  const [commits, setCommits] = useState([]);
  const url =
    "https://api.github.com/repos/FAITHM1/CommitHistory-CrossroadsGroup/commits/";
  const getCommits = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCommits(data);
  };
  useEffect(() => {
    getCommits();
  }, []);

  return <div className="App"></div>;
}

export default App;
