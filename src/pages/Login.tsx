import React, { useEffect, useState } from "react";
import Logo from "../assets/Queen-Tech-Solutions-Egypt-16621-1470658094-og.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginUser } from "../utils/apis";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetUser } from "../redux/features/user";
import Notification from "../components/Notification";

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetUser());
  }, []);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("userName is required!"),
      password: Yup.string().required("password is required!"),
    }),
    onSubmit: async (values) => {
      await LoginUser(values, navigate, dispatch,setShow);
      formik.resetForm();
    },
  });
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-auto" src={Logo} alt="Your Company" />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User name
            </label>
            <div className="mt-2">
              <input
                id="text"
                name="userName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userName}
                type="text"
                autoComplete="userName"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
              />
              <p className="text-red-500">
                {formik.errors.userName && formik.touched.userName
                  ? formik.errors.userName
                  : null}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
              />
              <p className="text-red-500">
                {formik.errors.password && formik.touched.password
                  ? formik.errors.password
                  : null}
              </p>
            </div>
          </div>

          <div className="mt-2">
            <button
              type="button"
              onClick={() => formik.handleSubmit()}
              className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Notification show={show} setShow={setShow} />
    </div>
  );
};

export default Login;
