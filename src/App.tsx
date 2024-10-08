import React, { useEffect, useRef, useState } from "react"; // Correct import
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import LayoutApp from "./components/share/layout.app";

const LayoutClient = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rootRef.current) {
      rootRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  // return (
  //   <div className="layout-app" ref={rootRef}>
  //     <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  //     <div className={styles["content-app"]}>
  //       <Outlet context={[searchTerm, setSearchTerm]} />
  //     </div>
  //     <Footer />
  //   </div>
  // );
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
      element: <LayoutApp></LayoutApp>,
    },
    {
      path: "/admin",
      element: (
        <LayoutApp>{/* Add your admin layout content here */}</LayoutApp>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
