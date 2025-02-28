import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/productdetailspage/ProductDetailsPage";
import Cart from './pages/cart/Cart';
import Favorite from "./pages/favorite/Favorite";
import Shop from './pages/shop/Shop';
import NotFound from "./pages/notFound/NotFound";
function App() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
