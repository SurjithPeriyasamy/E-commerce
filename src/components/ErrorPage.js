import { useRouteError } from "react-router-dom";

const Errorpage = () => {
  const { status, statusText } = useRouteError();
  return (
    <div className="h-screen bg-black">
      <div className="space-y-5 w-1/2 absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 text-center shadow-xl border-t-2 border-t-fuchsia-600 shadow-fuchsia-600 skew-x-12 text-white font-bold text-xl tracking-widest py-10 rounded-lg">
        <h1>Oopss Something went Wrong Buddy!!!!!</h1>
        <h4>{status}</h4>
        <h4>Page {statusText}</h4>
      </div>
    </div>
  );
};
export default Errorpage;
