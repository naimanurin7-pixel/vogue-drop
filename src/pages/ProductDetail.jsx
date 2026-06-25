// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";
import { ArrowLeft,Star, Minus,Plus, ShoppingCart,Truck, ShieldCheck} from "lucide-react";
import { FiHeart } from "react-icons/fi";
import { toggleWishlist } from "../redux/slices/wishlistSlice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../redux/slices/productSlice";

function ProductDetail() {
const dispatch = useDispatch();
const { id } = useParams();

const { products = [], loading } = useSelector(
  (state) => state.products
);

useEffect(() => {
  if (products.length === 0) {
    dispatch(fetchProducts());
  }
}, [dispatch, products.length]);

  // const { id } = useParams();




const handleWishlist = () => {
  dispatch(toggleWishlist(product));

  if (isWishlisted) {
    toast.success("Removed From Wishlist");
  } else {
    toast.success("Added To Wishlist");
  }
};


const { wishlistItems = [] } = useSelector(
  (state) => state.wishlist
);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(
    (item) => item.id === Number(id)
  );
const isWishlisted = wishlistItems.some(
  (item) => item.id === product?.id
);

// const handleWishlist = () => {
//   dispatch(toggleWishlist(product));

//   if (isWishlisted) {
//     toast.success("Removed From Wishlist");
//   } else {
//     toast.success("Added To Wishlist");
//   }
// };
  // if (loading) {
  //   return (
  //     <div className="min-h-screen flex items-center justify-center bg-black text-white">
  //       Loading Product...
  //     </div>
  //   );
  // }
if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Loading Product...
    </div>
  );
}
 if (!loading && !product) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      Product Not Found
    </div>
  );
}

 const handleAddToCart = () => {
  dispatch(addToCart(product));
  toast.success("Added To Cart");
};

  return (
    <div className="bg-black min-h-screen py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Link
          to="/products"
          className="
            inline-flex
            items-center
            gap-2
            text-yellow-400
            hover:text-yellow-300
            mb-8
          "
        >
          <ArrowLeft className="w-4 h-4" />
          Back To Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* IMAGE */}

          <div
            className="
              bg-white
              rounded-2xl
              p-4
              flex
              items-center
              justify-center
            "
          >
           <img
  src={product.image}
  alt={product.title}
  className="
    h-[200px]
sm:h-[280px]
md:h-[350px]
    w-full
    object-contain
    hover:scale-105
    transition-all
    duration-500
  "
/>
          </div>

          {/* DETAILS */}

          <div>

            <p
              className="
                text-yellow-400
                uppercase
                font-bold
                mb-3
              "
            >
              {product.category}
            </p>

            <h1
              className="
                text-2xl
sm:text-3xl
md:text-4xl
                font-black
                mb-4
              "
            >
              {product.title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <Star
                className="
                  w-4
                  h-4
                  fill-yellow-400
                  text-yellow-400
                "
              />

              <span>
                {product.rating?.rate}
              </span>

              <span className="text-zinc-400">
                ({product.rating?.count} reviews)
              </span>
            </div>

            <h2
              className="
                text-2xl
sm:text-3xl
md:text-4xl
                font-bold
                text-yellow-400
                mb-6
              "
            >
              ${product.price}
            </h2>

            <p
              className="
               text-sm
sm:text-base
text-zinc-300
leading-7
                mb-8
              "
            >
              {product.description}
            </p>

            {/* QUANTITY */}

            <div className="flex gap-4 mb-8">

  <div
    className="
      flex
      items-center
      border
      border-zinc-700
      rounded-xl
    "
  >
    <button
      onClick={() =>
        setQuantity(
          Math.max(1, quantity - 1)
        )
      }
      className="
flex
items-center
border
border-zinc-700
rounded-xl
h-12
"
    >
      <Minus />
    </button>

    <span className="px-4">
      {quantity}
    </span>

    <button
      onClick={() =>
        setQuantity(quantity + 1)
      }
      className="px-4 py-3"
    >
      <Plus />
    </button>
  </div>

  <button
    onClick={handleAddToCart}
    className="
      bg-yellow-400
      text-black
      px-6
      py-3
      rounded-xl
      font-bold
      flex
      items-center
      gap-2
      hover:bg-yellow-300
      transition
    "
  >
    <ShoppingCart />
    {/* Add To Cart */}
  </button>

  <button
  onClick={handleWishlist}
  className={`
    px-4
    py-3
    rounded-xl
    transition
    border

    ${
      isWishlisted
        ? "bg-red-500 border-red-500 text-white"
        : "border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
    }
  `}
>
 <FiHeart
  className={`
    text-xl
    ${isWishlisted ? "fill-current text-white" : ""}
  `}
/>
</button>

</div>
            {/* FEATURES */}

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <Truck className="text-yellow-400" />
                <span>Free Shipping</span>
              </div>

              <div className="flex items-center gap-3">
                <ShieldCheck className="text-yellow-400" />
                <span>100% Secure Checkout</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default ProductDetail;