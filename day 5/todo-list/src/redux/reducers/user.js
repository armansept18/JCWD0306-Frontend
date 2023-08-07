import { types } from "../types";

const init_state = {
  id: 0,
  fullname: "",
  email: "",
};

//action sebuah parameter yang berguna untuk mengubah isi dari state
//isi dari state akan diubah bergantung terhadap type action yang dikirim

//payload = isi dari setState

export const userReducer = (state = init_state, action) => {
  if (action.type == types.login) {
    return {
      ...state,
      id: action.payload.id,
      fullname: action.payload.fullname,
      email: action.payload.email,
    };
  } else if (action.type == types.logout) return init_state;

  return state;
};
