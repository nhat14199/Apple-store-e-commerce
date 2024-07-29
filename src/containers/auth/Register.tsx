import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { base_url } from "../../constant/baseUrl";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const notify = () => toast("Register success ");

  const onSubmit = async (data: any) => {
    try {
      const resp = await axios.post(
        "http://localhost:3003/users/register",
        data
      );
      console.log("dang ky thanh cong", resp);
      if (resp) {
        notify();
      }
    } catch (error) {
      console.log("error", error);
    }

    // console.log(data);

    // reset();
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <div className="m-0 px-0 h-screen w-screen background-signUp fixed z-20">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-32 ">
            <div className="bg-white  py-16 p-5 relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg bg-blueGray-200 ">
              <div className="rounded-t mb-0 px-6 py-6 ">
                <div className="text-center mb-3">
                  <h6 className="text-blue-900 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white  text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
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
                <hr className="mt-6 border-b-[1px] border-gray-200" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Or sign up with credentials</small>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2 "
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-gray-100 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      {...register("userName", { required: true })}
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
                      className="border-0 px-3 py-3 placeholder-blueGray-300 bg-gray-100  text-blueGray-600  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      {...register("email", { required: true })}
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
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
                      className="border-0 bg-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                  <ToastContainer />
                  <div className="text-center mt-6">
                    <input
                      type="submit"
                      className="bg-gray-800 hover:bg-slate-900 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    />{" "}
                    Create Account
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
