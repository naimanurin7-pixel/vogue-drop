import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import Products from "./pages/Product"
import ProductDetail from "./pages/ProductDetail"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import WishlistPage from "./pages/WishlistPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {

  return (

    <BrowserRouter>

      <div className="bg-black min-h-screen text-white">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />
        <Route
  path="/wishlist"
  element={<WishlistPage />}
/>
          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<NotFound />}
          />
       <Route
  path="/register"
  element={<Register />}
/>
        </Routes>
 

        <Footer />

      </div>

    </BrowserRouter>
  )
}

export default App;