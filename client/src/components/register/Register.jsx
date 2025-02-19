import { Link } from 'react-router-dom'
import { useState } from 'react';
import { authRoutes } from '../../routes/auth';
import { ErrorSetter } from '../../utils/Errors';

export default function Register(){
  
    const [formData,setFormData] = useState({
      name:"",
      email:"",
      password:"",
      repeatPassword:"",
      profileImage:null
    });
    const [preview, setPreview] = useState(null);

    const [errors,SetErrors] = useState({});

    const handleDataOnChange = (event) => {
      SetErrors({})
      setFormData({
        ...formData,
        [event.target.name] : event.target.value
      })
    
    }
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        setPreview(URL.createObjectURL(file));
        setFormData({...formData,profileImage:file})
        SetErrors({})
      }
    };

   

    const onSubmitHandler = async (e) =>{
      e.preventDefault()
    

      if(!formData.name){
        ErrorSetter(errors,SetErrors,'name','Name is required!');
        return;
      }else if(formData.name.split("").length < 3){
        ErrorSetter(errors,SetErrors,'name','Name is shuold be at least 3 characters!');
        return
      }

      if(!formData.email){
        ErrorSetter(errors,SetErrors,'email','Email is required!');
        return;
      }else if(formData.email.split("").length < 15){
        ErrorSetter(errors,SetErrors,'email','Email is shuold be at least 15 characters!');
        return
      }

      if(!formData.password){
        ErrorSetter(errors,SetErrors,'password','Password is required!');
        return;
      }else if(formData.password.split("").length < 8){
        ErrorSetter(errors,SetErrors,'password','Email is shuold be at least 9 characters!');
        return
      }

      if(!formData.repeatPassword){
        ErrorSetter(errors,SetErrors,'repeatPassword','Repeat Password is required!');
        return;
      }


      

      if(formData.repeatPassword !== formData.password){
        ErrorSetter(errors,SetErrors,'password','Password should match!');
        return;
      }
    
    //   try{
    //   const res = await fetch(authRoutes.register,{
    //     method:'POST',
    //     headers:{
    //       'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify(formData)
    //   });

    //   const  data = await res.json();
    // }catch(err){
    //   console.log(err.message)
    // }
    }


  return (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to FitZone
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                  Name
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  onChange={handleDataOnChange}

                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                />
                {errors['name'] ? <p className="mt-2 text-sm text-red-600">{errors?.name}</p> :''}

              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleDataOnChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                />
                {errors['email'] ? <p className="mt-2 text-sm text-red-600">{errors?.email}</p> :''}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleDataOnChange}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                />
                {errors['password'] ? <p className="mt-2 text-sm text-red-600">{errors?.password}</p> :''}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Repeat Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="repeatPassword"
                  name="repeatPassword"
                  type="password"
                  onChange={handleDataOnChange}
            
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border-2 border-gray-500 placeholder:text-gray-400 focus:border-orange-600 focus:ring-2 focus:ring-orange-600 sm:text-sm"
                />
                {errors['repeatPassword'] ? <p className="mt-2 text-sm text-red-600">{errors?.repeatPassword}</p> :''}

              </div>
            </div>

            <div className="flex flex-col items-center">
      <label className="block text-sm font-medium text-gray-700">
        Upload Profile Picture
      </label>
      <div className="mt-1 flex items-center p-15">
        {preview ? (
          <img
            src={preview}
            alt="Profile Preview"
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center">
              <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'  className="h-20 w-20 rounded-full object-cover"/>
          </div>
        )}
        <input
          type="file"
          name='profilePicture'
          accept="image/*"
          onChange={handleFileChange}
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
      </div>
  
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have account?
            <Link to="/fitzone/login" className="font-semibold text-orange-600 hover:text-orange-500">
              {" "}Login
            </Link>
          </p>
        </div>
      </div>
  )
}