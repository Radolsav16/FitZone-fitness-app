import { useNavigate, useParams } from "react-router"
import { useUserContext } from "../contexts/UserContext"
import { useUser } from "../api/userApi"
import ProfileUserSection from "../components/profile/profile-user-section/ProfileUserSection"
import ProfileUserAction from "../components/profile/profile-user-action/ProfileUserAction"
import ProfileCardJoined from "../components/profile/profile-card-joined/ProfileCardJoined"
import ProfileCardSaved from "../components/profile/profile-card-saved/ProfileCardSaved"
import ProfileCardLiked from "../components/profile/profile-card-liked/ProfileCardLiked"

export default function Profile(){
     const {id} = useParams()
     const {user} = useUser(id)
     const navigate = useNavigate()
     const {id : currUser,userLogoutHandler} = useUserContext()


     const logoutHandler = () =>{
        userLogoutHandler()
        navigate('/')
     }

    return(
        <>
        <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md mt-20">
        <ProfileUserSection user={user}/>

        <ProfileCardJoined joinedChallanges={user.joinedChallanges}/>
        <ProfileCardSaved savedChallanges={user.savedChallanges}/>
        <ProfileCardLiked likedPost={user.likedPost}/> 


        {user._id === currUser && <ProfileUserAction  logoutHandler={logoutHandler}/>}

        </div>
        
        </>
    )
}