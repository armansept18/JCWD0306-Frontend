import "./App.css";
import Todo from "./pages/todo";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/login";
import { Register, RegisterFormik } from "./pages/register";
import Redirect from "./pages/redirect";
import { useDispatch, useSelector } from "react-redux";
import { types } from "./redux/types";
import Loading from "./components/loading";
import { EditPage } from "./pages/editpage";

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

  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("auth"));
    // setUsers(local ? JSON.parse(local) : users);

    if (local?.id) {
      console.log(local.id);

      dispatch({
        type: types.login,
        payload: { ...local },
      });
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // console.log(userSelector);
  }, []);

  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <Routes>
          <Route
            path="dashboard"
            element={
              <Todo tasks={[...tasks]} setTasks={setTasks} users={[...users]} />
            }
          />
          <Route path="edit-profile" element={<EditPage />} />

          <Route path="login" element={<Login users={[...users]} />} />
          <Route
            path="register"
            element={<Register users={[...users]} setUsers={setUsers} />}
          />
          <Route path="register2" element={<RegisterFormik />} />
          <Route path="*" element={<Redirect />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
