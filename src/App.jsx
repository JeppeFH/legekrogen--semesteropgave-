import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/about", element: <About /> },
    { path: "/products/:id", element: <ProductDetails /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
