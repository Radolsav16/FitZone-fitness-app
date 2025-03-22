import { useState } from "react";
import { ErrorSetter } from "../utils/Errors";

export const RegisterErrorsChecker = (data) => {
  const [errors, SetErrors] = useState({});
 
  if (!data.name) {
    ErrorSetter(errors, SetErrors, "name", "Name is required!");
    return {errors};
  }

  if (!data.email) {
    ErrorSetter(errors, SetErrors, "email", "Email is required!");
    return {errors};
    
  }

  if (!data.password) {
    ErrorSetter(errors, SetErrors, "password", "Password is required!");
    return {errors};
    
  }

  if (!data.repeatPassword) {
    ErrorSetter(
      errors,
      SetErrors,
      "repeatPassword",
      "Repeat Password is required!"
    );
    return {errors};
    
  }

  if (data.repeatPassword !== data.password) {
    ErrorSetter(errors, SetErrors, "password", "Password should match!");
    return {errors};
    
  }
};
