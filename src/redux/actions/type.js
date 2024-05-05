import axios from "axios";
import { toast } from "react-toastify";
import { setTypes } from "../reducers/type";

export const getTypes = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/types`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setTypes(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
