import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
  };
  const handlerGoogleSignIn = (provider) => {
    console.log(provider);
  };
  return (
    <div>
      <div className="bg-teal-900">
        <div className="h-[700px] flex justify-center items-center ">
          <div className=" w-96 p-8 text-white rounded-lg">
            <h3 className="text-3xl ">Welcome to WEU</h3>
            <h3 className="text-xl mb-5">Please login to continue </h3>

            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full mb-4 max-w-xs">
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder="Email address"
                  type="email"
                  className="p-2 rounded-lg bg-teal-900 border-gray-500 w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "password should be at least 6 carecter must",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                  className="p-2 rounded-lg bg-teal-900 border-gray-900 w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
                <label className="label">
                  <span className=""> Forgate password?</span>
                </label>
              </div>

              <button
                className="btn bg-emerald-400 hover:bg-emerald-500 rounded-lg py-2 px-5 my-2"
                value="Login"
                type="submit"
              >
                Login
              </button>
            </form>
            <div>
              {/* {loginError && <p className="text-red-600">{loginError}</p>} */}
            </div>
            <p>
              No account ?
              <span to="/signup" className="ml-1 text-emerald-400">
                Sign up now
              </span>
            </p>
            <div className="divider">
              -------------------OR-----------------
            </div>

            <button
              onClick={() => handlerGoogleSignIn("googleProvider")}
              className="btn bg-emerald-400 hover:bg-emerald-500 w-full p-2 rounded-lg"
            >
              "CONTINUE WITH GOOGLE"
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
