import { useSelector } from "react-redux";

const EditUserProfile = () => {
  const { displayName, email, photoURL } = useSelector(
    (store) => store.user.loggedInUser
  );
  return (
    <div className="comp-top-space">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl max-h-96 w-1/2 p-3">
        sh
      </div>
    </div>
  );
};
export default EditUserProfile;
