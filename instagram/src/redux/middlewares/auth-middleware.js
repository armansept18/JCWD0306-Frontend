import { api } from "../../api/axios";
import { constant } from "../../constant";

export const userLogin = (values) => {
  return async (dispatch) => {
    try {
      console.log(values);
      const res = await api.get("/users", {
        params: {
          ...values,
        },
      });
      console.log(res.data.length);
      if (!res.data.length) throw new Error("wrong username/password");
      dispatch({
        type: constant.USER_LOGIN,
        payload: res.data[0],
      });

      return constant.success;
    } catch (err) {
      return err.message;
    }
  };
};

export const userLogout = () => {
  return async (dispatch) => {};
};

export const userUpdate = (id, values) => {
  return async (dispatch) => {};
};
