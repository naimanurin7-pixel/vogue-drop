import { useState } from "react"

import { Link, useNavigate } from "react-router-dom"

import toast from "react-hot-toast"

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] =
    useState("")

  const [password, setPassword] =
    useState("")
const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    toast.error("Please fill all fields");
    return;
  }

  // Get registered user
  const registeredUser = JSON.parse(
    localStorage.getItem("registeredUser")
  );

  // Check if user has registered
  if (!registeredUser) {
    toast.error("Please Register First");
    navigate("/register");
    return;
  }

  // Check email & password
  if (
    email !== registeredUser.email ||
    password !== registeredUser.password
  ) {
    toast.error("Invalid Email or Password");
    return;
  }

  // Login user
  localStorage.setItem(
    "user",
    JSON.stringify(registeredUser)
  );

  toast.success("Login Successful");

  navigate("/checkout");
};

  return (

    <div
      className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        px-8
      "
    >

      <div
        className="
          bg-zinc-900
          p-5
          rounded-[1.5rem]
          w-100
          max-w-md
          shadow-2xl
        "
      >

        <p
          className="
            text-yellow-400
            uppercase
            tracking-[0.2em]
            text-sm
            mb-4
          "
        >
          Welcome Back
        </p>

        <h1
          className="
            text-3xl
            font-bold
            text-white
            mb-4
          "
        >
          Sign In
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
              w-full
              bg-black
              border
              border-zinc-700
              rounded-xl
              px-4
              py-4
              outline-none
              focus:border-yellow-400
            "
          />

          {/* PASSWORD */}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
              w-full
              bg-black
              border
              border-zinc-700
              rounded-xl
              px-5
              py-4
              outline-none
              focus:border-yellow-400
            "
          />

          {/* BUTTON */}
<div className="flex flex-col items-center">

  <button
    type="submit"
    className="
      w-60
      bg-yellow-400
      text-black
      py-4
      rounded-xl
      font-bold
      hover:bg-yellow-300
      transition-all
    "
  >
    Login
  </button>

  <p className="text-center mt-4 text-zinc-400">
    Don't have an account?{" "}
    <Link
      to="/register"
      className="text-yellow-400 font-bold"
    >
      Register
    </Link>
  </p>

</div>
        </form>

      </div>

    </div>
  )
}

export default Login