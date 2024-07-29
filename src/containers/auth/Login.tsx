import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./index.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
export default function Login() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const notify = () => toast("Register success ");
  const onSubmit = async (data: any) => {
    const userData = data;
    localStorage.setItem("user", JSON.stringify(userData));
    console.log("data", data);

    if (data !== undefined) {
      notify();
      setTimeout(() => {
        history.push("/");
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <>
      <div className=" m-0 px-0 h-screen w-screen background-div fixed z-20">
        <div className="flex content-center items-center justify-center h-full ">
          <div className="w-full lg:w-4/12 px-10 bg-slate-100 py-28 rounded-lg shadow-lg">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 shadow-t-md ">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      className="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-react/static/media/github.6c955556.svg"
                    />
                    Github
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src="https://demos.creative-tim.com/notus-react/static/media/google.eae9aa93.svg"
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-gray-500" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign in with credentials</small>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Your name
                    </label>
                    <input
                      type="name"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Your name "
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6 hover:cursor-pointer">
                    <input
                      className="bg-gray-800 hover:bg-slate-900 hover:cursor-pointer text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    />
                  </div>
                  <ToastContainer />
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative px-2 text-lg">
              <div className="w-1/2 text-left">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right hover:cursor-pointer">
                <a href="/sign-up">
                  {" "}
                  <button>Create new account</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
