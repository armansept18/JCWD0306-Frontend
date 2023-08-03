import "./App.css";
import Todo from "./pages/todo";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/login";
import { Register, RegisterFormik } from "./pages/register";
import Redirect from "./pages/redirect";

function App() {
  const [tasks, setTasks] = useState([
    {
      title: "Learn Programming ",
      hour: "12:00",
    },
  ]);

  const [users, setUsers] = useState([
    {
      email: "superadmin@mail.com",
      password: "abc123",
      fullname: "superadmin",
    },
  ]);

  useEffect(() => {
    const local = localStorage.getItem("users");
    setUsers(local ? JSON.parse(local) : users);
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="dashboard"
          element={
            <Todo tasks={[...tasks]} setTasks={setTasks} users={[...users]} />
          }
        />
        <Route path="login" element={<Login users={[...users]} />} />
        <Route
          path="register"
          element={<Register users={[...users]} setUsers={setUsers} />}
        />
        <Route path="register2" element={<RegisterFormik />} />
        <Route path="*" element={<Redirect />}></Route>
      </Routes>
    </>
  );
}

export default App;
