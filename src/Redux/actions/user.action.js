import Axios from "../../Services/caller.service";

export const GET_USER = "GET_USER";
export const EDIT_USER = "EDIT_USER";

export const getUser = () => {
  return (dispatch) => {
    return Axios
      .post("/api/v1/user/profile")
      .then((res) => {
        // console.log(res)
        dispatch({ type: "GET_USER", payload: res.data.body });
      })
      .catch((err) => console.log(err));
  };
}

export const editUser = (data) => {
  return (dispatch) => {
    return Axios
      .put("/api/v1/user/profile", data)
      .then((res) => {
        dispatch({ type: "EDIT_USER", payload: data });
      })
      .catch((err) => console.log(err));
  };
}