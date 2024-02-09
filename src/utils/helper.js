export const namevalidation = (name) => /^[A-Za-z\s]{3,16}$/.test(name);
export const emailValidation = (email) =>
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})$/.test(email);
export const passwordValidation = (password) =>
  /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(
    password
  );

export const sortedProducts = (filter, products) => {
  switch (filter) {
    case "topRated":
      return products.filter((product) => product.rating > 4.5);
    case "lowToHigh":
      return [...products].sort((a, b) => a.price - b.price);
    case "highToLow":
      return [...products].sort((a, b) => b.price - a.price);
    default:
      return products;
  }
};
