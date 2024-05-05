import { combineReducers } from "@reduxjs/toolkit";
import auth from "./auth";
import car from "./car";
import manufacture from "./manufacture";
import type from "./type";
import transmission from "./transmission";

// it will combining some reducers that will be possible to call in the jsx files
export default combineReducers({
  auth,
  car,
  manufacture,
  type,
  transmission,
});
