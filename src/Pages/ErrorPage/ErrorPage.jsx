import errorImage from "../../assets/Objects/error.png"

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-full min-h-screen gap-10 px-5">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Sorry,</h2>
      <p className="text-sm sm:text-base md:text-xl lg:text-2xl">
        This page is not found.
      </p>
      <div className="flex flex-col justify-center items-center">
        <img
          src={errorImage}
          alt="404 Error Image"
          className="w-full animate-pulse"
        />
      </div>
      <button className="btn_shared">
        <p className="capitalize font-semibold py-3 px-4">Back to home</p>
      </button>
    </div>
  );
};

export default ErrorPage;
