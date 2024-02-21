import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navDesktop/NavbarDesktop";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

const App = () => {
  return (
    <div className="bg-background">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
