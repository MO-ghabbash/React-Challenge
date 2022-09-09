import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [apis, setapis] = useState({});
  const [repos, setrepos] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/MO-ghabbash?client_id=85d9653422672a93a04a&client_secret=c6276cbdbfcffd164849fe91384cb57a8e71212a&sort=created"
      )
      .then((res) => {
        setapis(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/MO-ghabbash/repos")
      .then((repos) => setrepos(repos.data))
      .catch((err) => console.log(err));
  });

  return (
    <div className="App">
      <hr></hr>
      <img
        src="https://avatars.githubusercontent.com/u/107397974?v=4"
        id="photo"
      />
      <tabel>
        <tr>
          <td>
            <strong>Full Name </strong>: {apis.name}
          </td>
        </tr>
        <tr>
          <td>
            <strong>User Name</strong> : {apis.login}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Location</strong> : {apis.location}
          </td>
        </tr>
        <tr>
          <td>
            <strong>Email</strong> : {apis.email}
          </td>
        </tr>
      </tabel>
      <hr id="line"></hr>
      <h2>User Repos</h2>
      <ul>
        {repos.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
