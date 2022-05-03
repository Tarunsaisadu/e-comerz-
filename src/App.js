import "./App.css";
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
import Purchasemodal from "./components/products/Purchasemodal";
import UserList from "./components/backoffice/userlist/UserList";
import Sidebar from "./components/backoffice/Sidebar";
import Userpage from "./components/backoffice/userpage/Userpage";
import NewUser from "./components/backoffice/newuserpage/NewUser";
function App() {
  const adminUser = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState(" ");
  const [enter, setEnter] = useState(false);
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
          <Topnav Logout={Logout} />

          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => (
                <Homepage {...routerProps} name={user.name} />
              )}
            />
            <Route exact path="/Products" component={Products} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/purchase" component={Purchasemodal} />
            <Route exact path="/backoffice" component={Backoffice} />
            <Route exact path="/users" component={UserList} />
            <Route exact path="/users/:userId" component={Userpage} />
            <Route exact path="/newuser" component={NewUser} />
          </Switch>
        </Router>
      ) : (
        <Loginform Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
