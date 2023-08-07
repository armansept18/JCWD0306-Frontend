import { useNavigate } from "react-router-dom";
import { ReactComponent as Shape } from "../assets/brown-shape.svg";
import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import { useDispatch, useSelector } from "react-redux";
export const Register = ({ users = [], setUsers }) => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    fullname: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  const userSelector = useSelector((state) => state.auth);
  useEffect(() => {
    if (userSelector.id) nav("/dashboard");
  }, []);
  const InputHandler = (key, value) => {
    setUser({ ...user, [key]: value });
  };

  // const register = () => {
  //   let check = users.find(({ email }) => email == user.email);

  //   if (!check && user.confirmPassword == user.password) {
  //     const tmp = { ...user };
  //     delete tmp.confirmPassword;
  //     users.push(tmp);
  //     localStorage.setItem("users", JSON.stringify(users));
  //     setUsers(users);
  //     alert("berhasil mendaftar");
  //     nav("/login");
  //   } else {
  //     alert("email sudah terdaftar");
  //   }
  // };

  //   useEffect(() => {
  //     console.log(user);
  //   }, [user]);

  const register = async (e) => {
    e.preventDefault();
    console.log(user);

    const check = await api.get("/users", {
      params: {
        email: user.email,
      },
    });

    if (check.data.length) return alert("email sudah terdaftar");

    if (user.confirmPassword == user.password) {
      const tmp = { ...user };
      console.log(tmp);

      delete tmp.confirmPassword;
      await api.post("/users", tmp);
      // alert("berhasil register");
      nav("/login");
    } else {
      alert("password dan confirm password tidak sesuai");
    }
  };
  return (
    <>
      <div className="bg" style={{ height: 0 }}>
        <Shape className="shape" fill="#FF9162" />
      </div>
      <div className="center">
        <div className="container">
          <form onSubmit={register}>
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
                required
              />

              <input
                className="input"
                placeholder="Enter your email"
                type="email"
                required
                onChange={(e) => InputHandler("email", e.target.value)}
              />
              <input
                className="input"
                placeholder="Enter your password"
                type="password"
                onChange={(e) => InputHandler("password", e.target.value)}
                required
              />

              <input
                className="input"
                placeholder="Conform passwords"
                type="password"
                onChange={(e) =>
                  InputHandler("confirmPassword", e.target.value)
                }
                required
              />

              <button type="submit">Register</button>

              <div className="center ">
                Already have an account ?&nbsp;
                <a href="/login">
                  <span className="bold-orange semibold"> Sign In</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export const RegisterFormik = () => {
  const nav = useNavigate();
  YupPassword(Yup);
  const userSelector = useSelector((state) => state.auth);
  useEffect(() => {
    if (userSelector.id) nav("/dashboard");
  }, []);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string()
        .required("isi woi")
        .min(5, "min maximal 5 bos")
        .minSymbols(1, "wajib isi 1 simbol"),
      email: Yup.string().email("ini email bro").required("wajib isi"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert("hello");
    },
  });

  // const register = async (e) => {
  //   e.preventDefault();
  //   console.log(user);

  //   const check = await api.get("/users", {
  //     params: {
  //       email: user.email,
  //     },
  //   });

  //   if (check.data.length) return alert("email sudah terdaftar");

  //   if (user.confirmPassword == user.password) {
  //     const tmp = { ...user };
  //     console.log(tmp);

  //     delete tmp.confirmPassword;
  //     await api.post("/users", tmp);
  //     // alert("berhasil register");
  //     nav("/login");
  //   } else {
  //     alert("password dan confirm password tidak sesuai");
  //   }
  // };
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
                {formik.values.email}
              </div>
              <div className="center">Let’s help you meet your tasks</div>
            </div>

            <div style={{ width: "100%" }}>
              <input
                className="input"
                placeholder="Enter your full name"
                // onChange={(e) => InputHandler("fullname", e.target.value)}
                onChange={(e) =>
                  formik.setFieldValue("fullname", e.target.value)
                }
                required
              />
              <div style={{ color: "red", padding: "0px 17px" }}>
                {formik.errors.fullname}
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <input
                className="input"
                placeholder="Enter your email"
                // onChange={(e) => InputHandler("fullname", e.target.value)}
                onChange={(e) => formik.setFieldValue("email", e.target.value)}
                required
              />
              <div style={{ color: "red", padding: "0px 17px" }}>
                {formik.errors.email}
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <input
                className="input"
                placeholder="Enter your password"
                type="password"
                // onChange={(e) => InputHandler("fullname", e.target.value)}
                onChange={(e) =>
                  formik.setFieldValue("password", e.target.value)
                }
                required
              />
              <div style={{ color: "red", padding: "0px 17px" }}>
                {formik.errors.password}
              </div>
            </div>

            <div style={{ width: "100%" }}>
              <input
                className="input"
                placeholder="Enter your confirm password"
                type="password"
                // onChange={(e) => InputHandler("fullname", e.target.value)}
                onChange={(e) =>
                  formik.setFieldValue("confirmPassword", e.target.value)
                }
                required
              />
              <div style={{ color: "red", padding: "0px 17px" }}>
                {formik.errors.confirmPassword}
              </div>
            </div>

            <button type="submit" onClick={formik.handleSubmit}>
              Register
            </button>

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
