export const signInValidate = (email, password) => {
  const isEmailValid =
    /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
  const isPasswordValid =
    /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
      password
    ); //a password must be eight characters including one uppercase letter, one special character and alphanumeric characters
  if (!isEmailValid) return "Please enter a valid email address.";
  if (!isPasswordValid)
    return "Your password must be eight characters including one uppercase letter, one special character and alphanumeric characters";

  return null;
};
