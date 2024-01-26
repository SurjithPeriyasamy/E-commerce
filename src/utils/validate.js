import { emailValidation, namevalidation, passwordValidation } from "./helper";

export const validate = (name, email, password) => {
  //a password must be eight characters including one uppercase letter, one special character and alphanumeric characters
  //a username only letters min 3characters
  if (!namevalidation(name))
    return "Username must be atleast 3 characters and only letters";
  if (!emailValidation(email)) return "Please enter a valid email address.";
  if (!passwordValidation(password))
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";

  return null;
};
