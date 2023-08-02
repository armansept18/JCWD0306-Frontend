import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:2000/users");
      //axios mengirim request get ke url http://localhost:2000/users
      //hasil return dari axios ditampung oleh variable res
      console.log(res);

      setUsers([...res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  //pada saat component dirender maka panggil function fetchUser

  const [newData, setNewData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    setNewData({ ...newData, [e.target.id]: e.target.value });
    console.log(newData);
  };
  const submit = async () => {
    console.log(newData);
    if (newData.id)
      return await axios.patch(
        `http://localhost:2000/users/${newData.id}`,
        newData
      );

    await axios.post("http://localhost:2000/users", newData);
  };

  return (
    <center>
      <h1>Table Users</h1>
      <form onSubmit={submit}>
        <table style={{ minWidth: "500px" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <Tr {...user} setNewData={setNewData} fetchUser={fetchUser} />
            ))}
            <tr style={{ border: "1px solid black", textAlign: "center" }}>
              <td></td>
              <td>
                <input
                  placeholder="fullname"
                  type="text"
                  required
                  id="fullname"
                  value={newData.fullname}
                  onChange={inputHandler}
                />
              </td>
              <td>
                <input
                  placeholder="email"
                  type="email"
                  required
                  id="email"
                  value={newData.email}
                  onChange={inputHandler}
                />
              </td>
              <td>
                <input
                  placeholder="password"
                  type="password"
                  required
                  id="password"
                  value={newData.password}
                  onChange={inputHandler}
                />
              </td>
              <td colSpan={"2"}>
                <button type="submit">submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </center>
  );
}

const Tr = (props) => {
  const [see, setSee] = useState(false);

  const del = async (id) => {
    // window.location.reload();
    if (window.confirm("are you sure you want to delete this data?")) {
      await axios.delete(`http://localhost:2000/users/${id}`);
      props.fetchUser();
    }
  };

  const edit = () =>
    props.setNewData({
      id: props.id,
      email: props.email,
      password: props.password,
      fullname: props.fullname,
    });
  return (
    <tr style={{ border: "1px solid black", textAlign: "center" }}>
      <td>{props.id}</td>
      <td>{props.fullname}</td>
      <td>{props.email}</td>
      <td>
        {see ? (
          <span style={{ width: "100%" }}>
            {props.password}
            <label
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => setSee(!see)}
            >
              hide
            </label>
          </span>
        ) : (
          <span>
            **********
            <label
              style={{ float: "right", cursor: "pointer" }}
              onClick={() => setSee(!see)}
            >
              show
            </label>
          </span>
        )}
      </td>
      <td>
        <button type="button" onClick={edit}>
          edit
        </button>
      </td>
      <td>
        <button type="button" onClick={() => del(props.id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default App;
