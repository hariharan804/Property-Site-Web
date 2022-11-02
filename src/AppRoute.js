import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import { SignIn } from "./screens/sign-in/SignIn";

const AppRoute = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    setIsAuth(false);
  },[]);
  
  return (
    <>
      {isAuth ? (
        <Routes>
          <Route index path="/" element={<Layout />} />
        </Routes>
      ) : (
        <Routes>
          <Route index path="/" element={<SignIn />} />
        </Routes>
      )}
    </>
  );
};

export default AppRoute;
