// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/layout";
import Companies from "./screens/companies/Companies";
import Dashboard from "./screens/dashboard/Dashboard";
import Properties from "./screens/properties/Properties";
import { SignIn } from "./screens/sign-in/SignIn";
import  { ViewProperties } from "./screens/view-properties/ViewProperties";

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
          <Route path="properties" element={<Properties />}/>
          <Route path="view-property" element={<ViewProperties />}/>
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
