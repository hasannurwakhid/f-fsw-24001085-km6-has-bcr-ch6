import axios from "axios";
import { toast } from "react-toastify";
import { setTransmissions } from "../reducers/transmission";

export const getTransmissions = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/transmissions`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setTransmissions(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};
