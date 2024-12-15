import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import NotFound from "./components/notfound";

import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Product from "./components/product";
import About from "./components/about";
import Event from "./components/event";
import Contact from "./components/contact";
import Profile from "./components/profile";
import ProductDetail from "./components/productdetail";

function App() {
  const routesArray = [
    {
      path: "/sign-in",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Register />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/product/:productSlug",
      element: <ProductDetail />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/event",
      element: <Event />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="">{routesElement}</div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
