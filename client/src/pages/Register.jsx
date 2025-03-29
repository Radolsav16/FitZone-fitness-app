import { UserCircleIcon } from "@heroicons/react/24/solid";

import { Link, useNavigate } from "react-router";

import Input from "../components/util/default-input-item/Input";
import { useRegister } from "../api/authApi";
import { ImageToFile } from "../utils/ImageToFile";
import { useUserContext } from "../contexts/UserContext";
import { ErrorSetter } from "../utils/Errors";
import { useFormState } from "../hooks/FormStateHook";

export default function Register() {
  const navigate = useNavigate();
  const {userLoginHandler } = useUserContext()
  const {
    onRegister,
    fileChangeHandler,
    file,
    preview,
  } = useRegister();

  const {errors  , SetErrors , dataState , handleDataOnChange} = useFormState({
    name:"",
    email:"",
    password:"",
    repeatPassword:""
  })

  const image = "/src/assets/DefaultProfileImage.png";

  const registerHandler = async (formData) => {
    const dataEntries = Object.fromEntries(formData);

    if (!dataEntries.name) {
      return ErrorSetter(errors, SetErrors, "name", "Name is required!");
    } else if (!dataEntries.email) {
      return ErrorSetter(errors, SetErrors, "email", "Email is required!");
    } else if (!dataEntries.password) {
      return ErrorSetter(
        errors,
        SetErrors,
        "password",
        "Password is required!"
      );
    } else if (!dataEntries.repeatPassword) {
      return ErrorSetter(
        errors,
        SetErrors,
        "password",
        "Repeat Password is required!"
      );
    } else if (dataEntries.repeatPassword !== dataEntries.password) {
      return ErrorSetter(
        errors,
        SetErrors,
        "password",
        "Passwords should match!"
      );
    }

    const data = new FormData();

    if (!file) {
      data.append("file", await ImageToFile(image, "ProfileImage.png"));
    } else {
      data.append("file", file);
    }

    data.append("name", dataEntries.name);
    data.append("email", dataEntries.email);
    data.append("password", dataEntries.password);

    try{
      const user = await onRegister(data);

    userLoginHandler(user);

    navigate("/");
    } catch(err){
      return ErrorSetter(errors, SetErrors, "email", "User with this email already exist!");
    }

    
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-12">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign up to FitZone
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action={registerHandler}>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
            </div>
            <div className="mt-2">
              <Input
                name={"name"}
                type={"text"}
                onChangeHandler={handleDataOnChange}
                value={dataState.name}
              />
              {errors["name"] && (
                <p className="mt-2 text-sm text-red-600">{errors?.name}</p>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-gray-900"
            >
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
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <Input
                name={"password"}
                type={"password"}
                onChangeHandler={handleDataOnChange}
              />
              {errors["password"] && (
                <p className="mt-2 text-sm text-red-600">{errors?.password}</p>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Repeat Password
              </label>
            </div>
            <div className="mt-2">
              <Input
                name={"repeatPassword"}
                type={"password"}
                onChangeHandler={handleDataOnChange}
              />
            </div>
          </div>
          <div className="col-span-full">
            <label
              htmlFor="photo"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Photo
            </label>

            <div className="mt-2 flex items-center gap-x-3">
              {preview ? (
                <img
                  src={preview}
                  alt="Profile Preview"
                  className="h-20 w-20 rounded-full object-cover"
                />
              ) : (
                <UserCircleIcon
                  aria-hidden="true"
                  className="size-20 text-gray-300"
                />
              )}

              <input
                type="file"
                onChange={fileChangeHandler}
                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
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
          <Link
            to="/fitzone/login"
            className="font-semibold text-orange-600 hover:text-orange-500"
          >
            {" "}
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
