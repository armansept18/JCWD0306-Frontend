import { useNavigate } from "react-router-dom";
import { ReactComponent as Shape } from "../assets/brown-shape.svg";
import { useEffect, useState } from "react";

const Register = ({ users = [], setUsers }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const InputHandler = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  const register = () => {
    let check = users.find(({ email }) => email == user.email);

    if (!check && user.confirmPassword == user.password) {
      const tmp = { ...user };
      delete tmp.confirmPassword;
      users.push(tmp);
      localStorage.setItem("users", JSON.stringify(users));
      setUsers(users);
      alert("berhasil mendaftar");
      nav("/login");
    } else {
      alert("email sudah terdaftar");
    }
  };

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user]);

  return (
    <>
      <div className="bg" style={{ height: 0 }}>
        <Shape className="shape" fill="#FF9162" />
      </div>
      <div className="center">
        <div className="container">
          <div className="container2 col gap-15 center">
            <div style={{ marginBottom: "45px" }}>
              <div className="center full semibold header">
                Welcome onboard!
              </div>
              <div className="center">Let’s help you meet your tasks</div>
            </div>

            <input
              className="input"
              placeholder="Enter your full name"
              onChange={(e) => InputHandler("fullname", e.target.value)}
            />

            <input
              className="input"
              placeholder="Enter your email"
              type="email"
              onChange={(e) => InputHandler("email", e.target.value)}
            />
            <input
              className="input"
              placeholder="Enter your password"
              type="password"
              onChange={(e) => InputHandler("password", e.target.value)}
            />

            <input
              className="input"
              placeholder="Conform passwords"
              type="password"
              onChange={(e) => InputHandler("confirmPassword", e.target.value)}
            />

            <button onClick={register}>Register</button>

            <div className="center ">
              Already have an account ?&nbsp;
              <a href="/login">
                <span className="bold-orange semibold"> Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
