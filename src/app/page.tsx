import AuthPage from "@/components/AuthPage/AuthPage";
import Header from "@/components/modules/Header";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <>
      <Header />
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
