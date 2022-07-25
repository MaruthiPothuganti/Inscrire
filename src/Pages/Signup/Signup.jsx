import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAxios } from "../../Hooks/useAxios";

export const Signup = () => {
  const [signupCreds, setSignupCreds] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const navigate = useNavigate();
  const { callAPI, response, loading } = useAxios();

  const signupHandler = () => {
    console.log("inside login handler");
    console.log(signupCreds);
    callAPI({
      url: "/api/auth/signup",
      method: "post",
      data: {
        email: signupCreds.email,
        password: signupCreds.password,
      },
    });
  };
  console.log(response);

  const guestLogin = () => {
    setSignupCreds({
      email: "testuser@gmail.com",
      password: "Testuser@123",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signupHandler();
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <section className="w-4/5 h-4/5 flex flex-col px-12 md:w-2/4 max-w-2xl">
        <h1 className="font-bold text-4xl my-3.5 md:w-auto">SignUp</h1>
        <form>
          <div className="mb-6">
            <label
              htmlFor="fullname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your fullname
            </label>
            <input
              type="fullname"
              defaultValue={signupCreds.fullname}
              id="fullname"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Captain Jack Sparrow"
              required={true}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              defaultValue={signupCreds.email}
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
              Enter Password
            </label>
            <input
              type="password"
              defaultValue={signupCreds.password}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="**********"
              required={true}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Repeat password
            </label>
            <input
              type="password"
              defaultValue={signupCreds.password}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="**********"
              required={true}
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              onClick={(e) => handleLogin(e)}
            >
              SignUp
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
