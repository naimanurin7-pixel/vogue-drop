import {useDispatch, useSelector,} from "react-redux"
import toast from "react-hot-toast";
import {removeFromWishlist,} from "../redux/slices/wishlistSlice"
import { addToCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
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

         <div className="flex flex-col items-center justify-center py-20">

  <div className="text-7xl mb-6">
    ❤️
  </div>

  <h2 className="text-3xl font-bold text-white">
    Your Wishlist is Empty
  </h2>

  <p className="text-zinc-400 mt-3 text-center">
    Save your favourite products here.
  </p>

  <Link
    to="/products"
    className="
      mt-8
      bg-yellow-400
      text-black
      px-8
      py-3
      rounded-xl
      font-bold
      hover:bg-yellow-300
      transition
    "
  >
    Explore Products
  </Link>

</div>

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

                <div className="flex flex-col gap-2">

  <button
    onClick={() => {
      dispatch(addToCart(item));
      toast.success("Added to Cart");
      // Optional
      // dispatch(removeFromWishlist(item.id));
    }}
    className="
      bg-yellow-400
      text-black
      px-4
      py-2
      rounded-lg
      font-semibold
      hover:bg-yellow-300
      transition
    "
  >
    Add to Cart
  </button>

  <button
    onClick={() =>
      dispatch(removeFromWishlist(item.id))
    }
    className="
      bg-red-500
      text-white
      px-4
      py-2
      rounded-lg
      hover:bg-red-600
      transition
    "
  >
    Remove
  </button>

</div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  )
}

export default WishlistPage