import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useState } from "react";
import { useSelector } from "react-redux";

import {
  FiMenu,
  FiX,
  FiHeart,
  FiShoppingBag,
  FiUser,
  FiSearch,
   FiMoon,
  FiSun,
} from "react-icons/fi"

import {
  useTheme,
} from "../context/ThemeContext"
import Register from "../pages/Register";

function Navbar() {
  const user = JSON.parse(
  localStorage.getItem("user")
);
const isAuthenticated = !!user;

const handleLogout = () => {
  localStorage.removeItem("user");
  setMobileMenu(false);
  navigate("/login");
};
const [showProfile, setShowProfile] =
  useState(false);
  const {theme,toggleTheme,} = useTheme()
  const [mobileMenu, setMobileMenu] =
  useState(false)
  const { wishlistItems = [] } = useSelector(
    (state) => state.wishlist
  );

  const { cartItems = [] } = useSelector(
    (state) => state.cart
  );

  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
    {mobileMenu && (

  <div
    className="
      fixed
      inset-0
      bg-black/50
      z-50
    "
  >

   <div
  className={`
    w-72
    h-full
    p-6

    ${
      theme === "dark"
        ? "bg-black text-white"
        : "bg-[#FFF8E7] text-black"
    }
  `}
>

      <div
        className="
          flex
          justify-between
          items-center
          mb-5
        "
      >

        <h2
          className="
            text-xl
            font-bold
            text-yellow-400
          "
        >
          VOGUE DROP
        </h2>

        <button
          onClick={() =>
            setMobileMenu(false)
          }
        >
          <FiX />
        </button>

      </div>

      <div
        className="
          flex
          flex-col
          gap-6
        "
      >

       <Link
  to="/"
  onClick={() => setMobileMenu(false)}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  "
>
  Home
</Link>

        <Link
          onClick={() => setMobileMenu(false)}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  "
        >
          Products
        </Link>

        <Link
          onClick={() => setMobileMenu(false)}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  ">
          Wishlist
        </Link>

  {!isAuthenticated ? (
  <>
    <Link
      to="/login"
 onClick={() => setMobileMenu(false)}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  "    >
      Login
    </Link>

    <Link
      to="/register"
      onClick={() => setMobileMenu(false)}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  "
    >
      Register
    </Link>
  </>
) : (
  <>
    <button
  onClick={() => {
    handleLogout();
  }}
  className="
    px-3
    py-2
    rounded-lg
    hover:bg-yellow-400
    hover:text-black
    transition-all
    duration-300
  "
>
  Logout
</button>
  </>
)}
      </div>

    </div>

  </div>

)}

   <header
  className={`
    sticky
    top-0
    z-30
    border-b

    ${
      theme === "dark"
        ? "bg-black border-zinc-800"
        : "bg-[#FFF8E7] border-yellow-300"
    }
  `}
>
 <nav
  className="
    max-w-7xl
    mx-auto
    px-6
    h-18
    flex
    items-center
  "
>
 <button
  onClick={() =>
    setMobileMenu(true)
  }
  className={`
    md:hidden
    text-2xl
    mr-3

    ${
      theme === "dark"
        ? "text-white"
        : "text-black"
    }
  `}
>
  <FiMenu />
</button>
  {/* LEFT LOGO */}

 <Link
  to="/"
  className="
    flex
    items-center
    gap-3
    mr-auto
  "
>
  <div
    className="
      w-9
      h-9
      rounded-full
      bg-yellow-400
      flex
      items-center
      justify-center
      text-black
      font-black
      text-lg
    "
  >
    VD
  </div>

  <div className="leading-none hidden md:block">
    <h1
      className={`
        text-lg
        font-black
        uppercase
        tracking-[0.10em]
        ${theme === "dark" ? "text-white" : "text-black"}
      `}
    >
      VOGUE
    </h1>

    <p
      className="
        text-sm
        uppercase
        tracking-[0.11em]
        text-yellow-400
        mt-0
      "
    >
      DROP
    </p>
  </div>
</Link>

  {/* CENTER MENU */}

<div
  className="
    hidden
    md:flex
    items-center
    gap-10
    text-sm
    font-bold
    uppercase
    tracking-wider
    absolute
    left-1/2
    -translate-x-1/2
  "
>
    <Link
      to="/"
      className="
        text-zinc-300
        hover:text-yellow-400
        transition
        
      "
    >
      Home
    </Link>

    <Link
      to="/products"
      className="
        text-zinc-300
        hover:text-yellow-400
        transition
      "
    >
      Products
    </Link>
  </div>


        {/* RIGHT SIDE */}

        <div
          className="
            flex
            items-center
            gap-6
            text-xl
            text-zinc-300
          "
        >
          {/* SEARCH */}

          <div className="relative">
            {showSearch && (
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);

                  navigate(
                    `/products?search=${e.target.value}`
                  );
                }}
                className="
                  absolute
                  right-10
                  top-1/2
                  -translate-y-1/2
                  bg-zinc-900
                  border
                  border-zinc-700
                  rounded-xl
                  px-4
                  py-2
                  text-sm
                  outline-none
                  w-44
                  text-white
                "
              />
            )}

            <button
              onClick={() =>
                setShowSearch(!showSearch)
              }
              className="
                flex
                items-center
                justify-center
                hover:text-yellow-400
                transition
              "
            >
              {showSearch ? <FiX /> : <FiSearch />}
            </button>
          </div>
{/* <button
  onClick={toggleTheme}
  className="
    hover:text-yellow-400
    transition
  "
>
  {theme === "dark"
    ? <FiSun />
    : <FiMoon />
  }
</button> */}
          {/* WISHLIST */}

          <Link
            to="/wishlist"
            className="
              hover:text-yellow-400
              transition
              relative
            "
          >
            <FiHeart />

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-yellow-400
                text-black
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                font-bold
              "
            >
              {wishlistItems.length}
            </span>
          </Link>

          {/* PROFILE */}

<div className="hidden md:flex items-center gap-4">

  {/* <Link
    to="/register"
    className="
      bg-yellow-400
      text-black
      px-3
      py-2
      rounded-lg
      text-sm
      font-bold
      hover:bg-yellow-300
      transition
    "
  >
    Register
  </Link> */}

  <div className="relative">

<button
  onClick={() => {
    if (!user) {
      navigate("/login");
      return;
    }

    setShowProfile(!showProfile);
  }}
  className="flex items-center gap-2 hover:text-yellow-400"
>
  <FiUser />

  {user && (
    <span className="text-sm font-semibold">
      {user.name}
    </span>
  )}
</button>
  {showProfile && user && (

    <div
  className="
    absolute
    right-0
    top-10
    w-52
    bg-white
    text-black
    rounded-xl
    shadow-lg
    overflow-hidden
    z-50
  "
>

      <div className="px-4 py-3 border-b">

  <h2 className="font-bold">
    {user.name}
  </h2>

  <p className="text-sm text-gray-500">
    {user.email}
  </p>

</div>
   <button
  onClick={() => {
    handleLogout();
    setShowProfile(false);
  }}
  className="
   w-full
    bg-yellow-400
    text-black
    py-2
    rounded-lg
    font-semibold
    hover:bg-yellow-300
    transition
  "
>
  Logout
</button>

    </div>

  )}

</div>

</div>

          {/* CART */}

          <Link
            to="/cart"
            className="
              hover:text-yellow-400
              transition
              relative
            "
          >
            <FiShoppingBag />

            <span
              className="
                absolute
                -top-2
                -right-2
                bg-yellow-400
                text-black
                text-[10px]
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                font-bold
              "
            >
              {totalCartItems}
            </span>
          </Link>
        </div>
      </nav>
    </header>
    </>
  );
}


export default Navbar;