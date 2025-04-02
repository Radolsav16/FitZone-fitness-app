import { Routes, Route } from "react-router-dom";

import Nav from "./components/header/Nav";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Challanges from "./pages/Challanges";
import { Logout } from "./pages/Logout";

import Footer from "./components/footer/Footer";

import BlogDetails from "./components/blog/blog-details/BlogDetails";
import CreatePost from "./components/blog/create-post/CreatePost";
import EditPost from "./components/blog/post-edit/EditPost";

import Exercises from "./components/exercises/Exercises";
import ExerciseDetails from "./components/exercises/exercise-details/ExerciseDetails";
import TargetExercise from "./components/exercises/target-exercises/TargetExercises";

import ErrorPage from "./components/util/error-page/ErrorPage";

import ChallangeEdit from "./components/challanges/challange-edit/ChallangeEdit";
import CreateChallange from "./components/challanges/create-challange/CreateChallange";
import ChallangeDetails from "./components/challanges/challange-details/ChallangeDetails";

import { UserProvider } from "./providers/UserProvider";

import AdminPanel from "./pages/AdminPanel";
import AdminProductsForm from "./components/admin/admin-products-form/AdminProductsForm";
import AdminEdit from "./components/admin/admin-edit/AdminEdit";
import Shop from "./pages/Shop";
import Checkout from "./components/shop/checkout/CheckOut";
import { CartProvider } from "./providers/CartProvider";
import Orders from "./pages/Orders";
import UsersOrders from "./pages/UsersOrders";
import GuestGuard from "./components/guards/Guest";
import AuthGuard from "./components/guards/Auth";

import ProductDetails from "./pages/ProductDetails";
import AdminGuard from "./components/guards/AdminGuard";
import { scrollTop } from "./utils/scroll";
import { LoadingProvider } from "./providers/LoadingProvider";
import Spinner from "./components/util/spinner/Spinner";

function App() {
  scrollTop();
  return (
    <>
      <UserProvider>
        <CartProvider>
          <LoadingProvider>
            <Nav />
            <Spinner />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/fitzone/about" element={<About />} />

              <Route element={<GuestGuard />}>
                <Route path="/fitzone/register" element={<Register />} />
                <Route path="/fitzone/login" element={<Login />} />
              </Route>

              <Route element={<AuthGuard />}>
                <Route path="/fitzone/logout" element={<Logout />} />

                <Route
                  path="/fitzone/create-challenge"
                  element={<CreateChallange />}
                />
                <Route
                  path="/fitzone/challenges/edit/:id"
                  element={<ChallangeEdit />}
                />

                <Route path="/fitzone/post-create" element={<CreatePost />} />
                <Route path="/fitzone/post/edit/:id" element={<EditPost />} />

                <Route element={<AdminGuard />}>
                  <Route path="/fitzone/admin" element={<AdminPanel />} />
                  <Route
                    path="/fitzone/add-product"
                    element={<AdminProductsForm />}
                  />
                  <Route
                    path="/fitzone/product/edit/:id"
                    element={<AdminEdit />}
                  />
                  <Route path="/fitzone/orders" element={<Orders />} />
                </Route>

                <Route path="/fitzone/orders/:id" element={<UsersOrders />} />
                <Route path="/fitzone/checkout" element={<Checkout />} />

                <Route
                  path="/fitzone/exercises/:id"
                  element={<ExerciseDetails />}
                />
                <Route path="/fitzone/exercises" element={<Exercises />} />
                <Route
                  path="/fitzone/:target/exercises"
                  element={<TargetExercise />}
                />
              </Route>

              <Route path="/fitzone/profile/:id" element={<Profile />} />
              <Route path="/fitzone/challenges" element={<Challanges />} />
              <Route
                path="/fitzone/challenges/details/:id"
                element={<ChallangeDetails />}
              />

              <Route path="/fitzone/blog" element={<Blog />} />
              <Route
                path="/fitzone/blog-details/:id"
                element={<BlogDetails />}
              />

              <Route
                path="/fitzone/product/details/:id"
                element={<ProductDetails />}
              />
              <Route path="/fitzone/shop" element={<Shop />} />

              <Route path={"*"} element={<ErrorPage />} />
            </Routes>

            <Footer />
          </LoadingProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
