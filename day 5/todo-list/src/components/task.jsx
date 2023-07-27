import { ReactComponent as Plus } from "../assets/plus-circle.svg";

const Task = ({ tasks = [] }) => {
  return (
    <div className="task-list">
      <div className="semibold space-between mb-10">
        <div>Daily Task</div>
        <Plus />
      </div>
      {tasks.map((task) => (
        <Point {...task} />
      ))}
    </div>
  );
};

const Point = ({ title, hour }) => {
  return (
    <div className="list mb-10 ">
      <div className="center">
        <div className="point" />
      </div>
      <div className="semibold">{title + " " + hour}</div>
    </div>
  );
};

export { Task };
