import { Routes, Route } from "react-router-dom";

import Nav from "./components/header/Nav";
import Hero from "./components/home/Hero";
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
import Exercises from "./components/exercises/Exercises";
import ExerciseDetails from "./components/exercise-details/ExerciseDetails";
import ChallangeDetails from "./components/challanges/challange-details/ChallangeDetails";
import TargetExercise from "./components/target-exercises/TargetExercises";
import ErrorPage from "./components/error-page/ErrorPage";
import ChallangeEdit from "./components/challanges/challange-edit/ChallangeEdit";
import EditPost from "./components/post-edit/EditPost";
import BMICalculator from "./components/bmi-calculator/BMICalculator";


import { Logout } from "./components/logout/Logout";
import { UserProvider } from "./providers/UserProvider";
import Recipe from "./components/recipe/Recipe";
import SelectionSearch from "./components/exercise-search/SelectionSearch";
import { selectionExercise, selectionRecipes } from "./utils/selectionData";
import { useScroll } from "./utils/scroll";




function App() {
    useScroll()
  return (
    <>
    <UserProvider>
      <Nav />
      <Routes>

        {/* Static */}
        <Route path="/" element={<Hero />} />
        <Route path="/fitzone/about" element={<About />} />
        {/* User*/}
        <Route path="/fitzone/register" element={<Register />} />
        <Route path="/fitzone/login" element={<Login />} />
        <Route path="/fitzone/profile" element={<Profile />} />
        <Route path="/fitzone/logout" element={<Logout />} />


  
      
        <Route path="/fitzone/recipes-search" element={<SelectionSearch  title={"Recipes Category 🥪"} subtitle={"Select a recipe category to explore amazing recipes!"} selection={selectionRecipes} />} />




        {/* Challanges  */}
        <Route path="/fitzone/create-challenge" element={<CreateChallange />} />
        <Route path="/fitzone/challenges" element={<Challenges />} />
        <Route path="/fitzone/challenges/details/:id" element={<ChallangeDetails />}/>
        <Route path="/fitzone/challenges/edit/:id" element={<ChallangeEdit/>} />

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
        <Route path="/fitzone/exercise-search" element={<SelectionSearch title={'Exercise Library 🏋️'} subtitle={'Select a muscle group to explore exercises tailored for it.'} selection={selectionExercise} />} />
        <Route path="/fitzone/exercises" element={<Exercises />} />
        <Route path="/fitzone/exercises/:id" element={<ExerciseDetails />} />
        <Route path="/fitzone/:target/exercises" element={<TargetExercise />} />

        <Route path="/fitzone/bmi-calculator" element={<BMICalculator />} />


        <Route path={"*"} element={<ErrorPage />} />
    

      </Routes>
      <Footer />
      </UserProvider>
    </>
  );
}

export default App;
