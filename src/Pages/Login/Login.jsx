import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../Context/AuthContext";
import { ACTION_TYPES } from "../../Utils/constants";

export const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const { dispatchAuth } = useAuth();
  const { LOGIN } = ACTION_TYPES;

  const loginHandler = async () => {
    try {
      let response = await axios.request({
        url: "/api/auth/login",
        method: "post",
        data: {
          email: loginCreds.email,
          password: loginCreds.password,
        },
      });

      dispatchAuth({
        type: LOGIN,
        payload: response,
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  const guestLogin = () => {
    setLoginCreds({
      email: "testuser@gmail.com",
      password: "Testuser@123",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginHandler();
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <section className="w-4/5 h-4/5 flex flex-col px-12 md:w-2/4 max-w-2xl">
        <h1 className="font-bold text-4xl my-3.5 md:w-auto">LogIn</h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              defaultValue={loginCreds.email}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="name@inscrire.com"
              required={true}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your password
            </label>
            <input
              type="password"
              defaultValue={loginCreds.password}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="**********"
              required={true}
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <div>
            <div className="flex gap-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                onClick={() => guestLogin()}
              >
                Guest Login
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
};
