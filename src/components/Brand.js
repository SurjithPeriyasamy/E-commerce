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
  //   const user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        console.log(user);
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
      <img src={BrandLogo} alt="brand" className="h-full" />
    </Link>
  );
};
export default Brand;