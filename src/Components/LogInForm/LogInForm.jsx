import { FcGoogle } from "react-icons/fc";
import { Form, Link } from "react-router-dom";

const LogInForm = () => {
  return (
    <div className="form w-full flex flex-col justify-center gap-5 text-center py-10 md:py-20 px-5">
      <div className="flex justify-center items-center">
        <h2 className="capitalize font-semibold text-lg sm:text-2xl md:text-3xl">
          Sign in to Doc Connect
        </h2>
      </div>

      {/* Google Sign In Button  */}
      <div className="flex justify-center">
        <div className="w-full md:w-2/3">
          <button className="form-input ">
            <p className="uppercase font-semibold text-xs md:text-lg flex justify-center items-center gap-2">
              <FcGoogle className="text-2xl" />
              Continue with Google
            </p>
          </button>
        </div>
      </div>

      {/* Divider  */}
      <div className="flex justify-center">
        <div className="w-1/2 flex justify-center items-center gap-3">
          <hr className="border-white flex-1" />
          <p className="text-light-gray text-xs md:text-lg uppercase">or</p>
          <hr className="border-white flex-1" />
        </div>
      </div>

      <div>
        <Form className="flex flex-col justify-center items-center gap-5">
          {/* Email Field  */}

          <div className="form-container w-full md:w-2/3 my-2">
            <input
              required
              type="text"
              name="username"
              className="form-input"
            />
            <label className="form-label">Username or Email Address</label>
          </div>

          {/* Password Field  */}
          <div className="form-container w-full md:w-2/3 my-2">
            <input
              required
              type="password"
              name="password"
              className="form-input"
            />
            <label className="form-label">Password</label>

            {/* Forget Button  */}
            <Link className="flex justify-end items-end my-2 text-light-coffee hover:text-gray-coffee transition-colors duration-500">
              Forgot Password ?
            </Link>
          </div>

          <div className="w-full ">
            <button className="form-input w-full">
              <p className="uppercase font-semibold text-lg">Log In</p>
            </button>
          </div>
        </Form>
      </div>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-coffee">
        Please register at first. Go to{" "}
        <Link
          to="/signup"
          className="text-lg font-medium text-light-coffee hover:text-dark-coffee transition-colors duration-500 underline"
        >
          SIGN UP
        </Link>
      </p>
    </div>
  );
};

export default LogInForm;
