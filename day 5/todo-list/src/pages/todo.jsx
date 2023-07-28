import "../css/style.css";

import { ReactComponent as Shape } from "../assets/shape.svg";
import { ReactComponent as Elipse } from "../assets/Ellipse 11.svg";
import { ReactComponent as Clock } from "../assets/clock.svg";
import { Task } from "../components/task";
import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Learn Programming ",
      hour: "12:00",
    },
  ]);

  const now = new Date();

  const [data, setData] = useState({
    title: "",
    hour: now.getHours() + ":" + now.getMinutes(),
  });

  const submit = () => {
    alert(data.idx);
    if (data.idx > -1) {
      const tmp = [...tasks];
      tmp[data.idx] = data;
      setTasks([...tmp]);
    } else {
      setTasks([...tasks, data]);
    }

    clear();

    return alert("berhasil ditambahkan");
  };

  const del = (idx) => {
    const msg = "Are your sure you want to delete this?";
    if (window.confirm(msg)) {
      const tmp = [...tasks];
      tmp.splice(idx, 1);
      setTasks(tmp);
      clear();
    }
  };

  const update = (idx) => {
    const tmp = tasks[idx];
    setData({
      ...tmp,
      idx,
    });
  };

  const clear = () => {
    setData({
      title: "",
      hour: now.getHours() + ":" + now.getMinutes(),
    });
  };

  return (
    <>
      <div className="bg">
        <Shape className="shape" />
        <div className="center full col gap-10">
          <Elipse />
          <div className="semibold white">Welcome Olivia Grace</div>
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
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
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
  );
};

export default Todo;
