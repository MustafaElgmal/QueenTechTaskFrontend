import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { getLines } from "../utils/apis";
import { useAppSelector } from "../redux/app/hookes";
import { useDispatch } from "react-redux";
import { AppProps } from "../types";

const SearchBar = ({setClick,setPath}:AppProps) => {
  const dispatch=useDispatch()
  const token = useAppSelector((state) => state.user.token);
  const formik = useFormik({
    initialValues: {
      path: "src/assets/access.log",
    },
    onSubmit: async (values) => {
      await getLines(token, values.path,1,dispatch,setClick!);
      setPath&&setPath(values.path)
    },
  });

  return (
    <div className="flex space-x-11">
      <input
        type="text"
        name="path"
        value={formik.values.path}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        disabled
        id="text"
        className="block w-full border-0 py-1.5 px-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
      />
      <button
        type="button"
        onClick={() => formik.handleSubmit()}
        className="rounded bg-gray-500 px-9 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
      >
        View
      </button>
    </div>
  );
};

export default SearchBar;
