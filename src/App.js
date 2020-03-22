import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, IndexRoute} from "react-router-dom";

// Components
import "./App.css";
import Devices from  "./components/Devices";
import Login from "./components/Login";
import pollDevices from "./components/pollDevices"


// Routing
import { AuthProvider } from "./routing/Auth";
import PrivateRoute from "./routing/PrivateRoute";

const App = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <AuthProvider>
          <Router>
            <div>
              <PrivateRoute exact path="/" component={Devices} />
              <PrivateRoute exact path="/" component={pollDevices} />
              <Route exact path="/login" component={Login} />
              

            </div>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
};

export default App;
