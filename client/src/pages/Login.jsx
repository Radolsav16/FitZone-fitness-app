import { Link, useNavigate } from 'react-router'
import Input from '../components/util/default-input-item/Input';
import { useLogin } from '../api/authApi'
import { useUserContext } from '../contexts/UserContext';
import { ErrorSetter } from '../utils/Errors';
import { useFormState } from '../hooks/FormStateHook'





export default function  Login(){
    const navigate = useNavigate();
    const { userLoginHandler } = useUserContext()
    const {errors , SetErrors , handleDataOnChange , dataState , SetPending , pending} = useFormState({
      email:"",
      password:""
    })

    const {onLogin} = useLogin()

    const LoginHandler = async (formData) => {

       const dataEntries = Object.fromEntries(formData);
      
          if (!dataEntries.email) {
            return ErrorSetter(errors, SetErrors, "email", "Email is required!");
          } else if (!dataEntries.password) {
            return ErrorSetter(errors, SetErrors, "password", "Password is required!");
          }

           const data = new FormData();
        
              data.append("email", dataEntries.email);
              data.append("password", dataEntries.password);

              
    
              
              try {
                const user = await onLogin(data);
              userLoginHandler(user);
              navigate("/");
              } catch (error) {
                return ErrorSetter(errors, SetErrors, "password", "Password is incorrect!");
              }

              

    }

    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Login to FitZone 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action={LoginHandler}  className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <Input
                              name={"email"}
                              type={"email"}
                              onChangeHandler={handleDataOnChange}
                              value={dataState.email}
                            />
                   {errors["email"] && (
                <p className="mt-2 text-sm text-red-600">{errors?.email}</p>
              )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <Input
                              name={"password"}
                              type={"password"}
                              onChangeHandler={handleDataOnChange}
                              value={dataState.password}

                            />
                            {errors["password"] && (
                <p className="mt-2 text-sm text-red-600">{errors?.password}</p>
              )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-black shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don't have an account?
            <Link to="/fitzone/register" className="font-semibold text-black-600 hover:text-black-500">
              {" "} Sign in
            </Link>
          </p>
        </div>
      </div>
      
    
    </>
  )}