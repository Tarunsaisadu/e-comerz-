import "./app.css";
import Homepage from "./components/homepage/Hompage";
import Topnav from "./components/topnav/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products/Products";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Cart from "./components/products/Cart";
import PayPal from "./components/PayPal";
import { useState } from "react";
import Loginform from "./components/login/Loginform";
import Backoffice from "./components/backoffice/Backoffice";
import Frontoffice from "./components/frontoffice/Frontoffice";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(" ");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("details do not match");
      setError("details do not match");
    }
  };

  const Logout = () => {
    console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <Router>
          <Topnav />

          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Homepage {...routerProps} name={user.name} Logout={Logout} />
              )}
            />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={PayPal} />
            <Route exact path="/backoffice" component={Backoffice} />
          </Switch>
        </Router>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
