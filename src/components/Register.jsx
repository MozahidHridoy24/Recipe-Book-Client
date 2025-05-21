import { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "./Contexts/AuthContext";

const Register = () => {
  const { register, googleLogin, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validatePassword = (password) => {
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;
    return hasUpper && hasLower && isLongEnough;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      return setError(
        "Password must have at least one uppercase, one lowercase letter, and be at least 6 characters long."
      );
    }

    try {
      const result = await register(email, password);
      await updateUserProfile(name, photoURL);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (err) {
      setError("Invalid Authentication", err);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-lg bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">
          Register for Recipe Book
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-semibold text-amber-500">Name</span>
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-amber-500">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="https://example.com/photo.jpg"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold text-amber-500">Email</span>
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
              <span className="label-text font-semibold text-amber-500">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="btn btn-block bg-orange-500 text-white"
          >
            Register
          </button>
        </form>

        <div className="divider text-amber-500">OR</div>

        <button
          onClick={handleGoogleRegister}
          className="btn btn-outline btn-block bg-gray-600 text-white"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center mt-4 text-amber-300">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-orange-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
