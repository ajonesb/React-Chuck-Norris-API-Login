import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import "./scss/App.scss";
import ChuckNorris from "./components/ChuckNorris";
import Login from "./components/Login";

// Routing
import { AuthProvider } from "./routing/Auth";
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <AuthProvider>
          <Router basename={'/'}>
            <div>
              <PrivateRoute path={`${process.env.PUBLIC_URL}/`} component={ChuckNorris} />
              <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
            </div>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
