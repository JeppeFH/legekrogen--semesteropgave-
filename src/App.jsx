import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Shipping from "./components/shipping/Shipping";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <Faq /> },
    { path: "/memberclub", element: <Memberclub /> },
    { path: "/products/:id", element: <ProductDetails /> },
  ]);

  return (
    <div className="app">
      <Shipping />
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
