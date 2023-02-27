import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";

const RouterProvider = () => {
  const loggedIn = useSelector((state) => state?.user?.loginUser);

  return (
    <div>
      <Router>
        <Routes>
          {routes
            .filter((r) => loggedIn || !r.isLoggedInRequired)
            .map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default RouterProvider;
