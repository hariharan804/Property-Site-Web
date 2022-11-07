// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Companies from "./screens/companies/Companies";
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
        <Route path="user" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="companies" element={<Companies />}/>
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
