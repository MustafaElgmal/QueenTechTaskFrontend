import axios from "axios";
import { User } from "../types";
import { BASE_URL, clickArr } from "../constants";
import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import { setUser } from "../redux/features/user";
import { setAllLogs } from "../redux/features/logs";

export const LoginUser = async (
  user: User,
  navigate: NavigateFunction,
  dispatch: Dispatch,
  setShow: Function
) => {
  try {
    const res = await axios.post(`${BASE_URL}/api/user/login`, user);
    dispatch(setUser(res.data));
    setShow(false);
    navigate("/");
  } catch (e) {
    setShow(true);
    console.log(e);
  }
};

export const getLines = async (
  token: string,
  path: string,
  page: number,
  dispatch: Dispatch,
  setClick:Function
) => {
  try {
    const res = await axios.get(`${BASE_URL}/api/logs`, {
      headers: { Authorization: token },
      params: { page, limit: 10, path },
    });
    dispatch(
      setAllLogs({
        lines: res.data.results.results,
        fileSize: res.data.fileSize,
      })
    );
    setClick(clickArr)
   
  } catch (e) {
    
    console.log(e);
  }
};
export const getLinesClick = async (
    token: string,
    path: string,
    page: number,
    dispatch: Dispatch,
  ) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/logs`, {
        headers: { Authorization: token },
        params: { page, limit: 10, path },
      });
      dispatch(
        setAllLogs({
          lines: res.data.results.results,
          fileSize: res.data.fileSize,
        })
      );
      
    } catch (e) {
      
      console.log(e);
    }
  };
  
