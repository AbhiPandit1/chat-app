const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-green-300">
          Login
          <span className="text-blue-200"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-2xl label-text font-bold text-orange-400 ">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10  font-bold"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-2xl font-bold label-text text-orange-400">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-color-white font-bold"
            />
          </div>
          <a
            href="#"
            className="text-1xl text-red-600 font-semibold hover:underline hover:text-white mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-[1rem]">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
