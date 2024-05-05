import axios from "axios";
import { toast } from "react-toastify";
import { setCars, setCar } from "../reducers/car";

export const getCars = () => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCars(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
  }
};

export const getCar = (navigate, id) => async (dispatch, getState) => {
  const { token } = getState().auth;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.request(config);
    const { data } = response.data;

    dispatch(setCar(data));
  } catch (error) {
    toast.error(error?.response?.data?.message);
    navigate("/");
  }
};

export const createCar =
  (
    navigate,
    setIsLoading,
    model,
    manufacture_id,
    rent_day,
    transmission_id,
    type_id,
    year,
    capacity,
    description,
    image
  ) =>
  async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let data = new FormData();
    data.append("model", model);
    data.append("manufacture_id", manufacture_id);
    data.append("rent_day", rent_day);
    data.append("transmission_id", transmission_id);
    data.append("type_id", type_id);
    data.append("year", year);
    data.append("capacity", capacity);
    data.append("description", description);

    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/cars`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      await axios.request(config);
      // dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const updateCar =
  (
    navigate,
    setIsLoading,
    id,
    model,
    manufacture_id,
    rent_day,
    transmission_id,
    type_id,
    year,
    capacity,
    description,
    image
  ) =>
  async (dispatch, getState) => {
    setIsLoading(true);

    const { token } = getState().auth;

    let data = new FormData();
    data.append("model", model);
    data.append("manufacture_id", manufacture_id);
    data.append("rent_day", rent_day);
    data.append("transmission_id", transmission_id);
    data.append("type_id", type_id);
    data.append("year", year);
    data.append("capacity", capacity);
    data.append("description", description);

    if (image) {
      data.append("image", image);
    }

    let config = {
      method: "put",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    try {
      await axios.request(config);
      // dispatch(getCars());
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }

    setIsLoading(false);
  };

export const deleteCar =
  (navigate, selectedCarId) => async (dispatch, getState) => {
    const { token } = getState().auth;

    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `${import.meta.env.VITE_BACKEND_API}/api/cars/${selectedCarId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      await axios.request(config);
      dispatch(getCars());
    } catch (error) {
      toast.error(error?.response?.data?.message);
      navigate("/");
    }
  };
