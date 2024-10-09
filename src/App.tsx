import React, { useEffect, useRef, useState } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import LayoutApp from "./components/share/layout.app";
import LayoutAdmin from "./components/admin/layout.admin";
const LayoutClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // Return the layout, uncomment when ready to use it
  return (
    <div className="layout-app" ref={rootRef}>
      {/* <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> */}
      {/* <div className={styles["content-app"]}> */}
      {/* <Outlet context={[searchTerm, setSearchTerm]} /> */}
      {/* </div> */}
      {/* <Footer /> */}
    </div>
  );
};

export default function App() {
  // const dispatch = useAppDispatch();
  // const isLoading = useAppSelector((state) => state.account.isLoading);

  useEffect(() => {
    if (
      window.location.pathname === "/login" ||
      window.location.pathname === "/register"
    ) {
      return;
    }
    // dispatch(fetchAccount());
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <LayoutApp>
          <LayoutClient />
        </LayoutApp>
      ),
      children: [
        {
          path: "dashboard",
          // element: <AdminDashboard />, // Component to render at /admin/dashboard
        },
        {
          path: "users",
          // element: <AdminUsers />, // Component to render at /admin/users
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <LayoutApp>
          <LayoutAdmin />
        </LayoutApp>
      ),
      children: [
        {
          path: "dashboard",
          // element: <AdminDashboard />, // Component to render at /admin/dashboard
        },
        {
          path: "users",
          // element: <AdminUsers />, // Component to render at /admin/users
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
