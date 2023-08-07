import "../css/style.css";

import { ReactComponent as Shape } from "../assets/shape.svg";
import { ReactComponent as Elipse } from "../assets/Ellipse 11.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { Task } from "../components/task";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../components/loading";
import { api } from "../api/axios";
import { useSelector } from "react-redux";
import { Navbar } from "../components/navbar";

const Todo = () => {
  const now = new Date();
  const [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    task: "",
    hour: now.getHours() + ":" + now.getMinutes(),
  });
  const nav = useNavigate();

  const userSelector = useSelector((state) => state.auth);

  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  // const submit = () => {
  //   if (data.idx > -1) {
  //     const tmp = [...tasks];
  //     tmp[data.idx] = data;
  //     setTasks([...tmp]);
  //   } else {
  //     setTasks([...tasks, data]);
  //   }

  //   clear();

  //   return alert("berhasil ditambahkan");
  // };

  // const del = (idx) => {
  //   const msg = "Are your sure you want to delete this?";
  //   if (window.confirm(msg)) {
  //     const tmp = [...tasks];
  //     tmp.splice(idx, 1);
  //     setTasks(tmp);
  //     clear();
  //   }
  // };

  const del = async (id) => {
    const msg = "Are your sure you want to delete this?";
    if (window.confirm(msg)) {
      await api.delete(`/todos/${id}`);
      fetchTasks(user.id);
    }
  };

  const submit = async () => {
    const tmp = { ...data };
    if (data.id) {
      console.log(data);
      await api.patch(`/todos/${data.id}`, tmp);
    } else {
      tmp.userid = user.id;
      await api.post("/todos", tmp);
    }
    await fetchTasks(user.id);

    clear();
  };

  const update = async (id) => {
    const res = await api.get(`/todos/${id}`);
    setData({
      ...res.data,
    });
  };

  const clear = () => {
    setData({
      title: "",
      hour: now.getHours() + ":" + now.getMinutes(),
    });
  };
  // useEffect(() => {
  //   console.log(userSelector);
  // }, [userSelector]);

  // useEffect(() => {
  //   const qmail = searchParams.get("email"); //test3@mail.com
  //   const checkUser = users.find(({ email }) => email == qmail);
  //   if (checkUser) setUser(checkUser);

  // }, [users]);

  // const fetchUser = async (id) => {
  //   const res = await api.get(`/users/${id}`);
  //   setUser(res.data);
  // };

  const fetchTasks = async (userid) => {
    const res = await api.get("/todos", {
      params: {
        userid,
      },
    });
    console.log(res);
    setTasks([...res.data]);
  };

  useEffect(() => {
    // const { id } = JSON.parse(localStorage.getItem("auth"));
    // fetchUser(id);
    if (!userSelector.id) {
      nav("/login");
    }

    fetchTasks(userSelector?.id);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <div className="bg">
            <Shape className="shape" />
            <div className="center full col gap-10">
              <Elipse />
              <div className="semibold white">
                Welcome {userSelector.fullname}
              </div>
            </div>
          </div>
          <div className="center">
            <div className="container">
              <div className="container2 col gap-15 center">
                <div className="end semibold full">Good Morning</div>
                <div className="center">
                  <Clock />
                </div>
                <div className="center full">
                  {/* //component task */}
                  <Task tasks={tasks} del={del} update={update} />
                </div>

                <input
                  className="input"
                  value={data.task}
                  onChange={(e) => setData({ ...data, task: e.target.value })}
                  placeholder="Task Title"
                />
                <input
                  className="input"
                  value={data.hour}
                  onChange={(e) => setData({ ...data, hour: e.target.value })}
                  type="time"
                  placeholder="Task Title"
                />
                <button onClick={clear}>CLEAR</button>

                <button onClick={submit}>SUBMIT</button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Todo;
