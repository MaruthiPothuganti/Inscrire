import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import axios from "axios";
import { ACTION_TYPES } from "../../Utils/constants";

export const Signup = () => {
  const initialCredentialState = {
    email: "",
    password: "",
    fullname: "",
    repeatPassword: "",
  };
  const [signupCreds, setSignupCreds] = useState(initialCredentialState);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { dispatchAuth } = useAuth();
  const { SIGNUP } = ACTION_TYPES;

  const signupHandler = async () => {
    console.log("");
    try {
      const signupResp = await axios.request({
        method: "post",
        url: "/api/auth/signup",
        data: {
          firstName: signupCreds.fullname,
          email: signupCreds.email,
          password: signupCreds.password,
        },
      });
      console.log(signupResp);
      if (signupResp.status === 201) {
        console.log(signupResp);
        dispatchAuth({
          type: SIGNUP,
          payload: signupResp,
        });
        navigate("/HomePage");
      }
    } catch (err) {
      setSignupCreds(initialCredentialState);
      console.log(err);
    }
  };

  const handleLogin = (e) => {
    console.log("login start");
    e.preventDefault();
    signupHandler();
    console.log("login end");
  };

  return (
    <main className="w-full h-screen grid place-items-center">
      <section className="w-4/5 h-4/5 flex flex-col px-12 md:w-2/4 max-w-2xl">
        <h1 className="font-bold text-4xl my-3.5 md:w-auto">SignUp</h1>
        <form onSubmit={handleLogin}>
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
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, fullname: e.target.value })
              }
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
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, email: e.target.value })
              }
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
              onChange={(e) =>
                setSignupCreds({ ...signupCreds, password: e.target.value })
              }
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
              defaultValue={signupCreds.repeatPassword}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="**********"
              onChange={(e) =>
                setSignupCreds({
                  ...signupCreds,
                  repeatPassword: e.target.value,
                })
              }
              required={true}
            />
          </div>
          {error && <p>{error}</p>}
          <div className="flex gap-4">
            {signupCreds.password === signupCreds.repeatPassword ? (
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                SignUp
              </button>
            ) : (
              <button
                type="submit"
                className="text-white cursor-not-allowed bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700"
                disabled={true}
              >
                SignUp
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};
