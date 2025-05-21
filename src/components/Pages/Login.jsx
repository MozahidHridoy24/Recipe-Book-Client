import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await login(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid email or password", err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError("Authentication Failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-lg bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Login to Recipe Book
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-amber-500">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text text-amber-500">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <a href="" target="_blank">
              <p className="text-xs text-black">Forget password?</p>
            </a>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="btn btn-block bg-orange-500 text-white"
          >
            Login
          </button>
        </form>

        <div className="divider text-black">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-block bg-gray-600"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4 text-amber-500">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
