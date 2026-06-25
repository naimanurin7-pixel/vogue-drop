import { Link } from "react-router-dom"
import { ArrowRight, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

function Home() {

  return (

    <div className="bg-black text-white min-h-[40vh]">

      {/* HERO SECTION */}

      {/* HERO SLIDER SECTION */}

<section className="relative h-[90vh] overflow-hidden">

  {/* SLIDE 1 */}

  <div
    className="
      absolute
      inset-0
      animate-pulse
    "
  >

    <img
      src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
      alt=""
      className="
        w-full
        h-full
        object-cover
         animate-slowZoom
      "
    />
    

  </div>

  {/* DARK OVERLAY */}

  <div
    className="
      absolute
      inset-0
      bg-black/40
    "
  />

  {/* CENTER CONTENT */}

  <div
    className="
      absolute
      inset-0
      flex
      flex-col
      items-center
      justify-end
      pb-24
      text-center
      z-10
    "
  >

    <p
      className="
        text-yellow-400
        uppercase
        tracking-[0.4em]
        mb-4
      "
    >
      Vogue Drop Collection
    </p>

    <h1
      className="
        text-5xl
        md:text-7xl
        font-black
        text-white
        mb-8
      "
    >
      ELEVATE YOUR STYLE
    </h1>

    <Link to="/products">

      <button
        className="
          bg-yellow-400
          text-black
          px-10
          py-4
          rounded-full
          font-bold
          text-lg
          hover:bg-yellow-300
          hover:scale-105
          transition-all
          duration-300
          shadow-2xl
        "
      >
        Explore Collection
      </button>

    </Link>

  </div>

</section>


<section className="py-20 bg-black">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD 1 */}
      <div
        className="
          bg-zinc-900
          border border-yellow-400/20
          rounded-3xl
          p-8
          hover:border-yellow-400
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        <div
          className="
            w-16 h-16
            rounded-full
            bg-yellow-400
            flex
            items-center
            justify-center
            text-black
            mb-6
          "
        >
          <Truck className="w-8 h-8" />
        </div>

        <h3 className="text-white text-xl font-bold mb-2">
          Free Shipping
        </h3>

        <p className="text-zinc-400">
          Free delivery on all premium orders.
        </p>
      </div>

      {/* CARD 2 */}
      <div
        className="
          bg-zinc-900
          border border-yellow-400/20
          rounded-3xl
          p-8
          hover:border-yellow-400
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        <div
          className="
            w-16 h-16
            rounded-full
            bg-yellow-400
            flex
            items-center
            justify-center
            text-black
            mb-6
          "
        >
          <ShieldCheck className="w-8 h-8" />
        </div>

        <h3 className="text-white text-xl font-bold mb-2">
          Secure Payment
        </h3>

        <p className="text-zinc-400">
          100% protected and secure checkout.
        </p>
      </div>

      {/* CARD 3 */}
      <div
        className="
          bg-zinc-900
          border border-yellow-400/20
          rounded-3xl
          p-8
          hover:border-yellow-400
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        <div
          className="
            w-16 h-16
            rounded-full
            bg-yellow-400
            flex
            items-center
            justify-center
            text-black
            mb-6
          "
        >
          <RefreshCw className="w-8 h-8" />
        </div>

        <h3 className="text-white text-xl font-bold mb-2">
          Easy Returns
        </h3>

        <p className="text-zinc-400">
          Hassle-free returns within 30 days.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* FEATURED SECTION */}

     {/* FEATURED SECTION */}

<section className="px-6 py-20">

  <div className="max-w-7xl mx-auto">

    <h2
      className="
        text-4xl
        font-black
        mb-12
        text-center
      "
    >
      Featured Collection
    </h2>

    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-3
        gap-6
        justify-items-center
      "
    >

      {/* CARD 1 */}
    <Link to="/products">
  <div
    className="
      bg-zinc-900
      rounded-3xl
      overflow-hidden
      hover:scale-105
      transition-all
      duration-300
      w-[300px]
      cursor-pointer
    "
  >
    <img
      src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
      alt=""
      className="
        h-[280px]
        w-full
        object-cover
      "
    />

    <div className="p-4">
      <h3 className="text-xl font-bold">
        Luxury Dresses
      </h3>

      <p className="text-sm text-zinc-400 mt-2">
        Elegant premium styles for every occasion.
      </p>
    </div>
  </div>
</Link>
      {/* CARD 2 */}
<Link to="/products">
<div
        className="
          bg-zinc-900
          rounded-3xl
          overflow-hidden
          hover:scale-105
          transition-all
          duration-300
          w-[300px]
        "
      >

        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
          alt=""
          className="
            h-[280px]
            w-full
            object-cover
          "
        />

        <div className="p-4">

          <h3 className="text-xl font-bold">
            Vogue Accessories
          </h3>

          <p className="text-sm text-zinc-400 mt-2">
            Minimal luxury accessories for modern women.
          </p>

        </div>

      </div>
</Link>
      
      {/* CARD 3 */}
<Link to="/products">
      <div
        className="
          bg-zinc-900
          rounded-3xl
          overflow-hidden
          hover:scale-105
          transition-all
          duration-300
          w-[300px]
        "
      >

        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
          alt=""
          className="
            h-[280px]
            w-full
            object-cover
            
          "
        />
        <div className="p-4">

          <h3 className="text-xl font-bold">
            Black Edition
          </h3>

          <p className="text-sm text-zinc-400 mt-2">
            Bold feminine outfits with luxury aesthetics.
          </p>

        </div>

      </div>
</Link>
    </div>


  </div>

</section>

    </div>
  )
}

export default Home