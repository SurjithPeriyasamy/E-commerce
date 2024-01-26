export const namevalidation = (name) => /^[A-Za-z\s]{3,16}$/.test(name);
export const emailValidation = (email) =>
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
export const passwordValidation = (password) =>
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    password
  );
