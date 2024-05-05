import axios from "axios";
import { toast } from "react-toastify";
import { setManufactures } from "../reducers/manufacture";

export const getManufactures = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/manufactures`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setManufactures(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
