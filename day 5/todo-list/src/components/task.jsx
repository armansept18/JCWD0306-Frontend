import { ReactComponent as Plus } from "../assets/plus-circle.svg";

const Task = ({ tasks = [], del, update }) => {
  return (
    <div className="task-list">
      <div className="semibold space-between mb-10">
        <div>Daily Task</div>
        <Plus />
      </div>
      {tasks.map((task, idx) => (
        <Point
          {...task}
          del={del}
          key={"point_" + idx}
          idx={idx}
          update={update}
        />
      ))}
    </div>
  );
};

const Point = ({ task, hour, id, del, update }) => {
  return (
    <div className="list mb-10 ">
      <div className="center">
        <div className="point" onClick={() => del(id)} />
      </div>
      <div
        className="semibold pointer"
        onClick={() => {
          alert(id);
          update(id);
        }}
      >
        {task + " " + hour}
      </div>
    </div>
  );
};

export { Task };
