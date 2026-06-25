import { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import toast from "react-hot-toast"
import { clearCart } from "../redux/slices/cartSlice"
import { useNavigate } from "react-router-dom"

function Checkout() {
const navigate = useNavigate();
  // SAFE REDUX STATE
const dispatch = useDispatch();
  const { cartItems = [] } = useSelector(
    (state) => state.cart || {}
  )

  // FORM DATA

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  })

  // FORM ERRORS

  const [errors, setErrors] = useState({})

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    // REMOVE ERROR WHILE TYPING

    setErrors({
      ...errors,
      [e.target.name]: "",
    })
  }

  // VALIDATION

  const validateForm = () => {

    let newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }

    if (!formData.zipCode.trim()) {
      newErrors.zipCode = "ZIP code is required"
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  // SUBMIT

  const handleSubmit = (e) => {

    e.preventDefault()
const user = localStorage.getItem("user")

if (!user) {
  toast.error("Please Login or Register First")
  navigate("/login")
  return
}
    // EMPTY CART CHECK

    if (cartItems.length === 0) {

      toast.error("Your cart is empty")

      return
    }

    // FORM VALIDATION

    if (validateForm()) {

  toast.success("Order Placed Successfully!");

  console.log("ORDER DATA:", formData);
  console.log("CART ITEMS:", cartItems);

  dispatch(clearCart());

  setFormData({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });
}
  }



  
  // TOTAL PRICE

  const totalPrice =
    cartItems?.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    ) || 0

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        px-6
        py-14
      "
    >

      {/* PAGE TITLE */}

      <div className="max-w-6xl mx-auto mb-10">

        <p
          className="
            text-yellow-400
            uppercase
            tracking-[0.2em]
            text-sm
            mb-2
          "
        >
          Vogue Drop
        </p>

        <h1
          className="
            text-3xl
            md:text-5xl
            font-bold
          "
        >
          Checkout
        </h1>

      </div>

      {/* MAIN SECTION */}

      <div
        className="
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >

        {/* SHIPPING FORM */}

        <form
          onSubmit={handleSubmit}
          className="
            bg-zinc-900
            p-6
            rounded-[2rem]
            space-y-5
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-2
            "
          >
            Shipping Details
          </h2>

          {/* FULL NAME */}

          <div>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-black
                border
                border-zinc-700
                focus:outline-none
                focus:border-yellow-400
                text-sm
              "
            />

            {errors.fullName && (

              <p
                className="
                  text-red-500
                  text-sm
                  mt-2
                "
              >
                {errors.fullName}
              </p>

            )}

          </div>

          {/* EMAIL */}

          <div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-black
                border
                border-zinc-700
                focus:outline-none
                focus:border-yellow-400
                text-sm
              "
            />

            {errors.email && (

              <p
                className="
                  text-red-500
                  text-sm
                  mt-2
                "
              >
                {errors.email}
              </p>

            )}

          </div>

          {/* ADDRESS */}

          <div>

            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="
                w-full
                px-4
                py-3
                rounded-xl
                bg-black
                border
                border-zinc-700
                focus:outline-none
                focus:border-yellow-400
                text-sm
              "
            />

            {errors.address && (

              <p
                className="
                  text-red-500
                  text-sm
                  mt-2
                "
              >
                {errors.address}
              </p>

            )}

          </div>

          {/* CITY + ZIP */}

          <div className="grid grid-cols-2 gap-4">

            <div>

              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black
                  border
                  border-zinc-700
                  focus:outline-none
                  focus:border-yellow-400
                  text-sm
                "
              />

              {errors.city && (

                <p
                  className="
                    text-red-500
                    text-sm
                    mt-2
                  "
                >
                  {errors.city}
                </p>

              )}

            </div>

            <div>

              <input
                type="text"
                name="zipCode"
                placeholder="ZIP Code"
                value={formData.zipCode}
                onChange={handleChange}
                className="
                  w-full
                  px-4
                  py-3
                  rounded-xl
                  bg-black
                  border
                  border-zinc-700
                  focus:outline-none
                  focus:border-yellow-400
                  text-sm
                "
              />

              {errors.zipCode && (

                <p
                  className="
                    text-red-500
                    text-sm
                    mt-2
                  "
                >
                  {errors.zipCode}
                </p>

              )}

            </div>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            className="
              w-full
              bg-yellow-400
              text-black
              py-3
              rounded-2xl
              font-bold
              hover:bg-yellow-300
              transition-all
            "
          >
            Place Order
          </button>

        </form>

        {/* ORDER SUMMARY */}

        <div
          className="
            bg-zinc-900
            p-6
            rounded-[2rem]
            h-fit
          "
        >

          <h2
            className="
              text-2xl
              font-bold
              mb-6
            "
          >
            Order Summary
          </h2>

          {/* EMPTY CART */}

          {cartItems.length === 0 ? (

            <div
              className="
                text-center
                text-zinc-400
                py-10
              "
            >
              Your cart is empty
            </div>

          ) : (

            <div className="space-y-4">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-zinc-700
                    pb-4
                  "
                >

                  <div>

                    <h3
                      className="
                        text-sm
                        font-semibold
                        line-clamp-1
                        max-w-[180px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        text-zinc-400
                        text-sm
                        mt-1
                      "
                    >
                      Qty: {item.quantity}
                    </p>

                  </div>

                  <p
                    className="
                      text-yellow-400
                      font-bold
                      text-sm
                    "
                  >
                    $
                    {(item.price * item.quantity)
                      .toFixed(2)}
                  </p>

                </div>

              ))}

            </div>

          )}

          {/* TOTAL */}

          <div
            className="
              mt-8
              flex
              items-center
              justify-between
            "
          >

            <h2
              className="
                text-xl
                font-bold
              "
            >
              Total
            </h2>

            <p
              className="
                text-2xl
                font-bold
                text-yellow-400
              "
            >
              ${totalPrice.toFixed(2)}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Checkout