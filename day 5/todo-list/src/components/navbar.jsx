import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { types } from "../redux/types";

export const Navbar = () => {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("auth");
    // dispatch({
    //   type: types.logout,
    // });
    // nav("/login");
    window.location.reload();
  };
  return (
    <div
      style={{
        width: "100%",
        padding: "10px 0px",
        backgroundColor: "#CF7751",
        display: "flex",
        justifyContent: "end",
        borderBottom: "1px solid black",
        position: "sticky",
        top: 0,
      }}
    >
      <div style={{ padding: "0px 20px", color: "white" }}>
        <h1> welcome,{userSelector.fullname}</h1>
      </div>
      <div style={{ padding: "0px 20px", color: "white" }}>
        <a href="/edit-profile">
          <button style={{ height: "100%", borderRadius: "30px" }}>
            <h2> edit profile</h2>
          </button>
        </a>
      </div>
      <div style={{ padding: "0px 20px", color: "white" }}>
        <button
          style={{ height: "100%", borderRadius: "30px" }}
          onClick={logout}
        >
          <h2> log out</h2>
        </button>
      </div>
    </div>
  );
};
