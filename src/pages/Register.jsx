import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // Register user
localStorage.setItem(
  "registeredUser",
  JSON.stringify(formData)
);

// Automatically login after register
localStorage.setItem(
  "user",
  JSON.stringify(formData)
);

toast.success("Registration Successful");

navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 p-8 rounded-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Register
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-xl mb-4 bg-black border border-zinc-700"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-xl mb-4 bg-black border border-zinc-700"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-xl mb-6 bg-black border border-zinc-700"
          required
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300"
        >
          Register
        </button>

        <p className="text-center mt-4 text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-yellow-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Register;