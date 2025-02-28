import { Routes, Route } from "react-router-dom";

import Nav from "./components/Header/Nav";
import Hero from "./components/Home/Hero";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
import CreateChallange from "./components/challanges/create-challange/CreateChallange";
import Challenges from "./components/challanges/Challanges";
import Profile from "./components/profile/Profile";
import MessagingOverview from "./components/message-overview/MessageOverview";
import Blog from "./components/blog/Blog";
import BlogDetails from "./components/blog-details/BlogDetails";
import CreatePost from "./components/create-post/CreatePost";
import ExerciseSearch from "./components/exercise-search/ExerciseSearch";
import Exercises from "./exercises/Exercises";
import ExerciseDetails from "./components/exercise-details/ExerciseDetails";
import ChallangeDetails from "./components/challanges/challange-details/ChallangeDetails";
import TargetExercise from "./components/target-exercises/TargetExercises";
import ErrorPage from "./components/error-page/ErrorPage";
import ChallangeEdit from "./components/challanges/challange-edit/ChallangeEdit";
import EditPost from "./components/post-edit/EditPost";


function App() {
  return (
    <>
      <Nav />
      <Routes>

        {/* Static */}
        <Route path="/" element={<Hero />} />
        <Route path="/fitzone/about" element={<About />} />
        {/* User*/}
        <Route path="/fitzone/register" element={<Register />} />
        <Route path="/fitzone/login" element={<Login />} />
        <Route path="/fitzone/profile" element={<Profile />} />
        {/* Challanges  */}
        <Route path="/fitzone/create-challange" element={<CreateChallange />} />
        <Route path="/fitzone/challanges" element={<Challenges />} />
        <Route path="/fitzone/challanges/details/:id" element={<ChallangeDetails />}/>
        <Route path="/fitzone/challanges/edit/:id" element={<ChallangeEdit/>} />

        <Route
          path="/fitzone/message-overview"
          element={<MessagingOverview />}
        />
        {/* Blog */}
        <Route path="/fitzone/blog" element={<Blog />} />
        <Route path="/fitzone/blog-details/:id" element={<BlogDetails />} />
        <Route path="/fitzone/post-create" element={<CreatePost />} />
        <Route path="/fitzone/post/edit/:id" element={<EditPost/>} />

        {/* Exercises */}
        <Route path="/fitzone/exercise-search" element={<ExerciseSearch />} />
        <Route path="/fitzone/exercises" element={<Exercises />} />
        <Route path="/fitzone/exercises/:id" element={<ExerciseDetails />} />
        <Route path="/fitzone/:target/exercises" element={<TargetExercise />} />

        <Route path={"/404"} element={<ErrorPage />} />
    

      </Routes>
      <Footer />
    </>
  );
}

export default App;
