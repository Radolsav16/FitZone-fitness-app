import { Routes, Route } from "react-router-dom";

import Nav from "./components/Header/Nav";
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
import ExerciseSearch from "./components/exercise-search/ExerciseSearch";
import Exercises from "./exercises/Exercises";
import ExerciseDetails from "./components/exercise-details/ExerciseDetails";
import ChallangeDetails from "./components/challanges/challange-details/ChallangeDetails";
import TargetExercise from "./components/target-exercises/TargetExercises";
import ErrorPage from "./components/error-page/ErrorPage";
import ChallangeEdit from "./components/challanges/challange-edit/ChallangeEdit";
import EditPost from "./components/post-edit/EditPost";
import BMICalculator from "./components/bmi-calculator/BMICalculator";
import EnterWeigth from "./components/enter-weigth/EnterWeigth";
import EnterHeigth from "./components/enter-heigth/EnterHeigth";
import EnterAge from "./components/enter-age/EnterAge";
import EnterGender from "./components/enter-gender/EnterGender";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContext";
import { Logout } from "./components/logout/Logout";




function App() {
  const [authData,SetAuthData] = useState({});

  const userLoginHandler = (data) => {
    SetAuthData(data);
};

const userLogoutHandler = () => {
    SetAuthData({});
};


  
  return (
    <>
    <UserContext.Provider value={{...authData,userLoginHandler,userLogoutHandler}} >

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


        <Route path="/fitzone/stats/weigth" element={<EnterWeigth/>} />
        <Route path="/fitzone/stats/heigth" element={<EnterHeigth/>} />
        <Route path="/fitzone/stats/age" element={<EnterAge />} />
        <Route path="/fitzone/stats/gender" element={<EnterGender />} />
      



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
        <Route path="/fitzone/blog/*" element={<Blog />} />
        <Route path="/fitzone/blog-details/:id" element={<BlogDetails />} />
        <Route path="/fitzone/post-create" element={<CreatePost />} />
        <Route path="/fitzone/post/edit/:id" element={<EditPost/>} />

        {/* Exercises */}
        <Route path="/fitzone/exercise-search" element={<ExerciseSearch />} />
        <Route path="/fitzone/exercises" element={<Exercises />} />
        <Route path="/fitzone/exercises/:id" element={<ExerciseDetails />} />
        <Route path="/fitzone/:target/exercises" element={<TargetExercise />} />

        <Route path="/fitzone/bmi-calculator" element={<BMICalculator />} />


        <Route path={"*"} element={<ErrorPage />} />
    

      </Routes>
      <Footer />
      </UserContext.Provider>
    </>
  );
}

export default App;
