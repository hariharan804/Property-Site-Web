// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Dashboard from "./screens/dashboard/Dashboard";
import { SignIn } from "./screens/sign-in/SignIn";

const AppRoute = () => {
  // const [isAuth, setIsAuth] = useState(false);

  // useEffect(()=>{
  //   setIsAuth(false);
  // },[]);

  return (
    <>
      <Routes>
        <Route index path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Layout />}>
          <Route index path="" element={<Dashboard />} />
          <Route  path="das" element={<SignIn />} />
        </Route>
      </Routes>
      {/* {isAuth ? (
        <Routes>
          <Route index path="/" element={<Layout />} />
        </Routes>
      ) : (
        <Routes>
          <Route index path="/" element={<SignIn />} />
        </Routes>
      )} */}
    </>
  );
};

export default AppRoute;
