import { Outlet } from "react-router-dom";
import Header from "../header";
import { useStyles } from "./styles";
import Sidebar from "../sidebar";

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
