import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { types } from "../redux/types";

export const AuthProvider = ({ children }) => {
  const user = localStorage.getItem("auth");
  const [isLoading, setIsLoading] = useState(true);
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const fetchUser = () => {
    api
      .get(`/users/${user.id}`)
      .then((res) => {
        dispatch({
          type: types.login,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (user?.id) fetchUser();
    else setIsLoading(false);

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (userSelector.id) setIsLoading(false);
  }, [userSelector]);

  return isLoading ? isLoading : children;
};
//redux
//refresh => app.js => cek di localstorage => id
//id => get ke api sesuai id user => dispatch
//dispatch = setState => waktu
// waktu tidak bisa diprediksi
//setelah bbrp waktu maka useSelector keisi
