import Navigation from "./components/Navigation";
import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Shipping from "./components/shipping/Shipping";
import Faq from "./pages/faq/Faq";
import Memberclub from "./pages/memberclub/Memberclub";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/products", element: <Products /> },
    { path: "/faq", element: <Faq /> },
    { path: "/memberclub", element: <Memberclub /> },
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
