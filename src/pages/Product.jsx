import { useLocation } from "react-router-dom"
import { FiFilter } from "react-icons/fi"
import {FiHeart,FiShoppingBag} from "react-icons/fi"
import {useEffect,useState} from "react"
import {useDispatch,useSelector} from "react-redux"
import { fetchProducts } from "../redux/slices/productSlice"
import {addToCart} from "../redux/slices/cartSlice"
import { toggleWishlist} from "../redux/slices/wishlistSlice"
import toast from "react-hot-toast"
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Product() {
const [showFilters, setShowFilters] =
  useState(false)
  const dispatch = useDispatch()

  const location = useLocation()

  const query =
    new URLSearchParams(location.search)

  const navbarSearch =
    query.get("search") || ""

  const {
    products,
    loading,
    error,
  } = useSelector(
    (state) => state.products
  )
const { wishlistItems = [] } = useSelector(
  (state) => state.wishlist
);
  const [selectedCategory, setSelectedCategory] =
    useState("all")

  const [sortOption, setSortOption] =
    useState("")
const navigate = useNavigate();
useEffect(() => {
  if (products.length === 0) {
    dispatch(fetchProducts())
  }
}, [dispatch, products.length])

  /* FILTERED PRODUCTS */

  const filteredProducts = [...products]

    .filter((product) => {

      const matchesCategory =

        selectedCategory === "all"

          ? true

          : product.category
              ?.toLowerCase()
              .includes(selectedCategory)

      const matchesSearch =

        product.title
          .toLowerCase()
          .includes(
            navbarSearch.toLowerCase()
          )

      return (
        matchesCategory &&
        matchesSearch
      )

    })

    .sort((a, b) => {

      if (sortOption === "low")
        return a.price - b.price

      if (sortOption === "high")
        return b.price - a.price

      return 0

    })

  if (loading) {
  return (
    <div
      className="
        min-h-screen
        bg-black
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <div
        className="
          w-24
          h-24
          rounded-full
          bg-yellow-400
          flex
          items-center
          justify-center
          text-black
          text-4xl
          font-black
          animate-pulse
        "
      >
        VD
      </div>

      <p className="text-zinc-400 mt-4">
        Loading Collection...
      </p>
    </div>
  );
}
  if (error) {

    return (

      <div
        className="
          min-h-screen
          bg-black
          text-white
          flex
          items-center
          justify-center
        "
      >

        <h1
          className="
            text-3xl
            text-red-500
          "
        >
          {error}
        </h1>

      </div>
    )
  }

  return (
    <>
    {showFilters && (

  <div
    className="
      fixed
      inset-0
      bg-black/60
      z-50
      lg:hidden
    "
  >

    <div
      className="
        absolute
        left-0
        top-0
        h-full
        w-72
        bg-zinc-900
        p-5
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          mb-5
        "
      >

        <h3
          className="
           text-lg
md:text-xl
            font-bold
            text-yellow-400
          "
        >
          Filters
        </h3>

        <button
          onClick={() =>
            setShowFilters(false)
          }
        >
          ✕
        </button>

      </div>

      {/* CATEGORY */}

      <select
        value={selectedCategory}
        onChange={(e) =>
          setSelectedCategory(
            e.target.value
          )
        }
        className="
          w-full
          bg-black
          border
          border-zinc-700
          p-3
          rounded-xl
          mb-4
        "
      >
        <option value="all">
          All Categories
        </option>

        <option value="men's clothing">
          Men's Clothing
        </option>

        <option value="women's clothing">
          Women's Clothing
        </option>

        <option value="jewelery">
          Jewellery
        </option>

        <option value="electronics">
          Electronics
        </option>
      </select>

      {/* SORT */}

      <select
        value={sortOption}
        onChange={(e) =>
          setSortOption(
            e.target.value
          )
        }
        className="
          w-full
          bg-black
          border
          border-zinc-700
          p-3
          rounded-xl
        "
      >
        <option value="">
          Sort By
        </option>

        <option value="low">
          Low To High
        </option>

        <option value="high">
          High To Low
        </option>
      </select>

    </div>

  </div>

)}

    <div
      className="
        min-h-screen
        bg-black
        text-white
        px-4
        py-10
      "
    >
<div className="lg:hidden mb-6">

  <button
    onClick={() =>
      setShowFilters(true)
    }
    className="
      flex
      items-center
      gap-2
      bg-yellow-400
      text-black
      px-4
      py-3
      rounded-xl
      font-semibold
    "
  >

    <FiFilter />

    Filters

  </button>

</div>
      {/* FILTERS */}

    <div
  className="
    max-w-7xl
    mx-auto
    flex
    flex-col
    lg:flex-row
    gap-8
  "
>

  {/* LEFT FILTER SIDEBAR */}

  <div
  className="
    hidden
    lg:block
    w-64
    bg-zinc-900
    p-5
    rounded-2xl
    h-fit
    border
    border-yellow-400
    sticky
    top-24
    self-start
  "
>

    <h3
      className="
        text-xl
        font-bold
        mb-5
        text-yellow-400
      "
    >
      Filters
    </h3>

    <label className="block mb-2">
      Category
    </label>

    <select
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(e.target.value)
      }
      className="
        w-full
        bg-black
        border
        border-zinc-700
        p-3
        rounded-xl
        mb-5
      "
    >
      <option value="all">
        All Categories
      </option>

      <option value="men's clothing">
        Men's Clothing
      </option>

      <option value="women's clothing">
        Women's Clothing
      </option>

      <option value="jewelery">
        Jewellery
      </option>

      <option value="electronics">
        Electronics
      </option>
    </select>

    <label className="block mb-2">
      Sort By Price
    </label>

    <select
      value={sortOption}
      onChange={(e) =>
        setSortOption(e.target.value)
      }
      className="
        w-full
        bg-black
        border
        border-zinc-700
        p-3
        rounded-xl
      "
    >
      <option value="">
        Sort By
      </option>

      <option value="low">
        Low To High
      </option>

      <option value="high">
        High To Low
      </option>
    </select>

  </div>

  {/* PRODUCTS GRID */}

  <div
    className="
      flex-1
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-4
md:gap-8
    "
  >

{filteredProducts.map((product) => {

const isWishlisted = wishlistItems.some(
  (item) => item.id === product.id
);

return (

    <div
      className="
        bg-zinc-900
        rounded-2xl
        overflow-hidden
        group
        hover:-translate-y-2
        transition-all
        duration-300
        shadow-xl
      "
    >

    {/* IMAGE */}
  <Link
    to={`/products/${product.id}`}
    key={product.id}
  >
    <div
      className="
        relative
        bg-white
        h-[160px]
sm:h-[180px]
md:h-[220px]
        p-5
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >

      {/* ICONS */}

      <div
        className="
          absolute
          top-3
          right-3
          flex
          flex-col
          gap-2
          z-10
        "
      >

       <button
  onClick={(e) => {
    e.preventDefault();

    dispatch(toggleWishlist(product));

    if (isWishlisted) {
      toast.success("Removed From Wishlist");
    } else {
      toast.success("Added To Wishlist");
    }
  }}
>
  <FiHeart
    className={`
      text-xl
      ${
        isWishlisted
          ? "text-red-500 fill-current"
          : "text-black"
      }
    `}
  />
</button>

        {/* <button
        onClick={(e) => {
  e.preventDefault();

  dispatch(addToCart(product));

  toast.success("Added To Cart");
}}
          className="
            bg-white
            p-2
            rounded-full
            shadow-lg
            text-black
            hover:bg-yellow-400
            transition
          "
        >
          <FiShoppingBag />
        </button> */}

      </div>

      <img
        src={product.image}
        alt={product.title}
        className="
          h-full
          object-contain
          group-hover:scale-105
          transition-all
          duration-500
        "
      />

    </div>
</Link>
    {/* CONTENT */}

    <div className="p-3 md:p-4">

      <h2
        className="
          text-sm
          font-semibold
          line-clamp-2
          min-h-[40px]
        "
      >
        {product.title}
      </h2>

     <div
  className="
    flex
    items-center
    justify-between
    mt-4
  "
>

  <p
    className="
      text-yellow-400
      text-lg
md:text-2xl
      font-bold
    "
  >
    ${product.price}
  </p>

  <div className="flex items-center gap-3">

    {/* <button
      onClick={(e) => {
        e.preventDefault();

        dispatch(toggleWishlist(product));

        if (isWishlisted) {
          toast.success("Removed From Wishlist");
        } else {
          toast.success("Added To Wishlist");
        }
      }}
      className="
        w-10
        h-10
        rounded-full
        border
        border-zinc-600
        flex
        items-center
        justify-center
      "
    >
      <FiHeart
        className={
          isWishlisted
            ? "text-red-500 fill-current"
            : "text-white"
        }
      />
    </button> */}

    <button
      onClick={(e) => {
        e.preventDefault();

        dispatch(addToCart(product));

        toast.success("Added To Cart");
      }}
     className="
 w-8
h-8
md:w-10
md:h-10
  rounded-full
  border
  border-zinc-600
  flex
  items-center
  justify-center
  transition-all
  duration-300
  hover:bg-yellow-400
  hover:text-black
  hover:border-yellow-400
"
    >
      <FiShoppingBag />
    </button>

  </div>

</div>
</div>
</div>
)
})}

      </div> 

    </div> 

  </div> 
</>
  )
}

export default Product