import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes from "./routes";

const RouterProvider = () => {

  return (
    <div>
      <Router>
        <Routes>
          <>
            {routes.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
          </>
          {/* <>
            <Route path="/*" element={<Navigate to="/" />} />
          </> */}
        </Routes>
      </Router>
    </div>
  );
};

export default RouterProvider;
