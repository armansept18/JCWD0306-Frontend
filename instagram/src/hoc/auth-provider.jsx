import { useDispatch, useSelector } from "react-redux";
import { api } from "../api/axios";
import { useEffect, useState } from "react";
import { constant } from "../constant";

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const userSelector = useSelector((state) => state.auth);

  const fetchData = () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (!user) return setIsLoading(false);
    api
      .get(`/users/${user.id}`)
      .then((res) => {
        dispatch({
          type: constant.USER_LOGIN,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("auth");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    if (userSelector.id) setIsLoading(false);
  }, [userSelector]);

  return isLoading ? <></> : children;
};
