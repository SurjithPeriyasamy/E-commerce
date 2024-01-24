export const signUpValidate = (name, email, password) => {
  const isNamevalid = /^[A-Za-z\s]{3,16}$/.test(name);
  const isEmailValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    ); //a password must be eight characters including one uppercase letter, one special character and alphanumeric characters
  console.log(isNamevalid, isEmailValid, isPasswordValid);
  if (!isNamevalid)
    return "Username must be atleast 3 characters and only letters";
  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";

  return null;
};
