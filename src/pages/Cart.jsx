import {
  useDispatch,
  useSelector,
} from "react-redux"

import {
  removeFromCart,
  updateQuantity,
} from "../redux/slices/cartSlice"

import {
  useNavigate,
} from "react-router-dom"

import toast from "react-hot-toast"

function CartPage() {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  // SAFE CART STATE

  const { cartItems = [] } = useSelector(
    (state) => state.cart || {}
  )

  // INCREMENT

  const handleIncrement = (item) => {

    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    )
  }

  // DECREMENT

  const handleDecrement = (item) => {

    if (item.quantity > 1) {

      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      )
    }
  }

  // REMOVE

  const handleRemove = (id) => {

    dispatch(removeFromCart(id))

    toast.success("Item Removed")
  }

  // TOTAL

  const totalPrice =
    cartItems?.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    ) || 0

  // CHECKOUT

  const handleCheckout = () => {

    if (cartItems.length === 0) {

      toast.error("Cart is empty")

      return
    }

    // CHECK LOGIN

    const user =
      localStorage.getItem("user")

    if (!user) {

      toast.error(
        "Please login first"
      )

      navigate("/login")

      return
    }

    // GO TO CHECKOUT

    navigate("/checkout")
  }

  return (

    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-6
      "
    >

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}

        <h1
          className="
            text-3xl
            font-bold
            text-yellow-400
            mb-8
          "
        >
          Your Cart
        </h1>

        {/* EMPTY CART */}

        {cartItems.length === 0 ? (

          <div
            className="
              bg-zinc-900
              rounded-2xl
              p-10
              text-center
            "
          >

            <h2
              className="
                text-xl
                text-zinc-400
              "
            >
              Your cart is empty
            </h2>

          </div>

        ) : (

          <div className="grid gap-4">

            {/* CART ITEMS */}

            {cartItems.map((item) => (

              <div
                key={item.id}
                className="
                  bg-zinc-900
                  rounded-2xl
                  p-3
                  flex
                  flex-col
                  md:flex-row
                  items-center
                  justify-between
                  gap-4
                "
              >

                {/* LEFT */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      bg-white
                      p-3
                      rounded-xl
                    "
                  >

                    <img
                      src={item.image}
                      alt={item.title}
                      className="
                        h-20
                        w-20
                        object-contain
                      "
                    />

                  </div>

                  <div>

                    <h2
                      className="
                        text-lg
                        font-semibold
                        line-clamp-2
                        max-w-[220px]
                      "
                    >
                      {item.title}
                    </h2>

                    <p
                      className="
                        text-yellow-400
                        text-base
                        mt-2
                      "
                    >
                      ${item.price}
                    </p>

                  </div>

                </div>

                {/* QUANTITY */}

                <div className="flex items-center gap-2">

                  <button
                    type="button"
                    onClick={() =>
                      handleDecrement(item)
                    }
                    className="
                      bg-yellow-400
                      text-black
                      w-7
                      h-7
                      rounded-full
                      font-bold
                      text-sm
                      hover:bg-yellow-300
                      transition
                    "
                  >
                    -
                  </button>

                  <span
                    className="
                      text-lg
                      font-bold
                    "
                  >
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      handleIncrement(item)
                    }
                    className="
                      bg-yellow-400
                      text-black
                      w-7
                      h-7
                      rounded-full
                      font-bold
                      text-lg
                      hover:bg-yellow-300
                      transition
                    "
                  >
                    +
                  </button>

                </div>

                {/* PRICE */}

                <div className="text-right">

                  <p
                    className="
                      text-xl
                      font-bold
                      text-yellow-400
                    "
                  >
                    $
                    {(item.price * item.quantity)
                      .toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      handleRemove(item.id)
                    }
                    className="
                      mt-3
                      text-sm
                      text-red-500
                      hover:text-red-400
                      transition
                    "
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

            {/* TOTAL SECTION */}

            <div
              className="
                bg-zinc-900
                rounded-2xl
                p-5
                mt-4
                flex
                flex-col
                md:flex-row
                justify-between
                items-center
                gap-5
              "
            >

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                  "
                >
                  Total
                </h2>

                <p
                  className="
                    text-3xl
                    font-bold
                    text-yellow-400
                    mt-1
                  "
                >
                  ${totalPrice.toFixed(2)}
                </p>

              </div>

              {/* CHECKOUT BUTTON */}

              <button
                type="button"
                onClick={handleCheckout}
                className="
                  bg-yellow-400
                  text-black
                  px-6
                  py-3
                  rounded-xl
                  font-bold
                  text-sm
                  hover:bg-yellow-300
                  transition-all
                "
              >
                Proceed To Checkout
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  )
}

export default CartPage