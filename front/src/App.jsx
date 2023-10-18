import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRoute } from "./AuthRoute";
import routes from "@/routes";
import { useAuth } from "@/auth-context/auth.context";
function App() {
  const [loading, setLoading] = useState(false);
  let { user } = useAuth();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const getRoutes = (allRoutes) =>
    allRoutes.map(({ route, element, authenticated }, key) => {
      if (route) {
        if (authenticated) {
          if (!user || !user.token || user.token === "") {
            return <Route path="*" element={<Navigate to="/home" replace />} />;
          }
          // return <AuthRoute path={route} element={element} key={key} />;
        }
        return <Route exact path={route} element={element} key={key} />;
      }

      return null;
    });
  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-black">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-blue-600" />
        </div>
      ) : (
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
