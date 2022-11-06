import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { useStyles } from "./layout-styles";
import Sidebar from "../sidebar/Sidebar";

export const Layout = () => {
  const classes = useStyles();
  return (
    <>
      <main>
        <Header />
        <div className={classes.root}>
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
          <div className={classes.mainContent}>
            <article>
              <Outlet />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
