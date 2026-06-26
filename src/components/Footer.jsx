import {
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
  FiHeart,
} from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-3xl font-black text-yellow-400 mb-4">
              VOGUE DROP
            </h2>

            <p className="text-zinc-400 text-sm leading-relaxed mb-5">
              Discover elegant fashion collections crafted for
              modern women. From casual wear to festive styles,
              Vogue Drop brings confidence to every outfit.
            </p>

            <div className="flex gap-3">
              <a href="https://www.instagram.com/">
              <button className="bg-zinc-900 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition">
                <FiInstagram />
                
              </button>
              </a>
               
             <a
  href="https://x.com/?lang=en-in"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-zinc-900
    p-3
    rounded-full
    hover:bg-yellow-400
    hover:text-black
    transition
    inline-flex
  "
>
  <FiTwitter />
</a>

               <a
    href="https://www.facebook.com/voguedrop"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-zinc-900 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition inline-flex"
  >
    <FaFacebookF />
  </a>
            </div>
          </div>

          {/* CUSTOMER CARE */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-yellow-400">
              Customer Care
            </h3>

            <ul className="space-y-3 text-zinc-400 text-sm">
              {/* <li className="hover:text-white cursor-pointer">
                Contact Us
              </li> */}

              <li className="hover:text-white cursor-pointer">
                Track Order
              </li>

              <li className="hover:text-white cursor-pointer">
                Returns & Exchange
              </li>

              <li className="hover:text-white cursor-pointer">
                Shipping & Delivery
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-white cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>

          {/* COLLECTIONS */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-5 text-yellow-400">
              Collections
            </h3>

            <ul className="space-y-3 text-zinc-400 text-sm">
              <li className="hover:text-white cursor-pointer">
                Dresses
              </li>

              <li className="hover:text-white cursor-pointer">
                Tops & Tunics
              </li>

              <li className="hover:text-white cursor-pointer">
                Kurtas & Kurtis
              </li>

              <li className="hover:text-white cursor-pointer">
                Suits & Sets
              </li>

              <li className="hover:text-white cursor-pointer">
                Accessories
              </li>

              <li className="hover:text-white cursor-pointer">
                Home & Living
              </li>
            </ul>
          </div> */}

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-yellow-400">
              Contact Info
            </h3>

            <div className="space-y-4 text-zinc-400 text-sm">
              <div className="flex gap-3">
                <FiMapPin className="mt-1 text-yellow-400" />
                <span>
                  Trivandrum, Kerala, India
                </span>
              </div>

              <div className="flex gap-3">
                <FiPhone className="mt-1 text-yellow-400" />
                <span>
                  +91 98765 43210
                </span>
              </div>

              <div className="flex gap-3">
                <FiMail className="mt-1 text-yellow-400" />
                <span>
                  support@voguedrop.com
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* NEWSLETTER */}
        {/* <div className="border-t border-zinc-800 mt-12 pt-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Subscribe to Newsletter
              </h3>

              <p className="text-zinc-400 text-sm">
                Get updates about new arrivals, offers and
                exclusive fashion collections.
              </p>
            </div>

            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  bg-zinc-900
                  border
                  border-zinc-700
                  px-4
                  py-3
                  rounded-l-lg
                  w-full
                  lg:w-72
                  outline-none
                "
              />

              <button
                className="
                  bg-yellow-400
                  text-black
                  font-semibold
                  px-6
                  rounded-r-lg
                  hover:bg-yellow-300
                  transition
                "
              >
                Subscribe
              </button>
            </div>

          </div>
        </div> */}

        {/* BOTTOM */}
        <div className="border-t border-zinc-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-zinc-400 text-sm">
              © 2026 Vogue Drop. All Rights Reserved.
            </p>

            <p className="flex items-center gap-2 text-zinc-400 text-sm">
              Made with
              <FiHeart className="text-red-500 fill-red-500" />
              by Vogue Drop
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;