import GenderCheckbox from './GenderCheckBox';

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-bold text-center text-green-300">
          SignUp <span className="text-blue-200"> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-2xl font-bold text-orange-400">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10  font-bold"
            />
          </div>

          <div>
            <label className="label p-2 ">
              <span className="text-2xl font-bold text-orange-400">
                Username
              </span>
            </label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10 font-bold"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-2xl font-bold text-orange-400">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10 text-white font-bold"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-2xl font-bold text-orange-400">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 text-white font-bold"
            />
          </div>
          <GenderCheckbox />

          <a
            className="text-1xl text-red-600 font-semibold hover:underline hover:text-white mt-2 inline-block"
            href="#"
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 text-[1rem] border border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
