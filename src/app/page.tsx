import AuthPage from "@/components/AuthPage/AuthPage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <AuthPage />
      <ToastContainer
        position="top-left"
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        limit={1}
        theme="colored"
      />
    </>
  );
};
export default Home;
