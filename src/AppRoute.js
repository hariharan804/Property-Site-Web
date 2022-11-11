// import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import Companies from "./screens/companies";
import Dashboard from "./screens/dashboard";
import Properties from "./screens/properties";
import { SignIn } from "./screens/signIn";
import  { ViewProperties } from "./screens/viewProperties";

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
