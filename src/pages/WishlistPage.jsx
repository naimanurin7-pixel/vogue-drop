import {
  useDispatch,
  useSelector,
} from "react-redux"

import {
  removeFromWishlist,
} from "../redux/slices/wishlistSlice"

function WishlistPage() {

  const dispatch = useDispatch()

  const { wishlistItems } = useSelector(
    (state) => state.wishlist
  )

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

        <h1
          className="
            text-3xl
            font-bold
            text-yellow-400
            mb-8
          "
        >
          Wishlist
        </h1>

        {wishlistItems.length === 0 ? (

          <p className="text-zinc-400">
            Your wishlist is empty
          </p>

        ) : (

          <div className="grid gap-4">

            {wishlistItems.map((item) => (

              <div
                key={item.id}
                className="
                  bg-zinc-900
                  rounded-2xl
                  p-4
                  flex
                  items-center
                  justify-between
                "
              >

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

                    <h2 className="text-base font-semibold">
                      {item.title}
                    </h2>

                    <p
                      className="
                        text-yellow-400
                        mt-2
                      "
                    >
                      ${item.price}
                    </p>

                  </div>

                </div>

                <button
                  onClick={() =>
                    dispatch(removeFromWishlist(item.id))
                  }
                  className="
                    text-red-500
                    hover:text-red-400
                  "
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default WishlistPage