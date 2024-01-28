import { Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import BrandLogo from "../images/brandLogo.png";

const Brand = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, photoURL } = user;
        dispatch(addUser({ email, displayName, photoURL }));
        navigate("/");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        // ...
      }
    });
    return () => unSubscribe();
  }, []);
  return (
    <Link to={"/"}>
      {/* <img
        src={BrandLogo1}
        alt="brand"
        className="h-12 dark:opacity-0 absolute"
      /> */}
      <img src={BrandLogo} alt="brand" className="h-full" />
    </Link>
  );
};
export default Brand;
