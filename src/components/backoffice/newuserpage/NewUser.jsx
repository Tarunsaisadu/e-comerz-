import "./newuser.css";
import Sidebar from "../Sidebar";
import faker from "faker";
import { Form, Button } from "react-bootstrap";
export default function NewUser() {
  return (
    <div className="newuser">
      <div className="sidebarcont">
        <Sidebar />
      </div>
      <div className="newuserContainer">
        <h1 className="newuserTitle">New User</h1>
        <Form className="newUserForm">
          <div className="userinfo">
            <Form.Group className="newUserItem">
              <Form.Label className="label">Username</Form.Label>
              <Form.Control className="input" placeholder="User name" />
            </Form.Group>
            <Form.Group className="newUserItem">
              <Form.Label className="label">Fullname</Form.Label>
              <Form.Control className="input" placeholder="Full name" />
            </Form.Group>
            <Form.Group className="newUserItem" controlId="formBasicEmail">
              <Form.Label className="label">Email</Form.Label>
              <Form.Control
                className="input"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="newUserItem" controlId="formBasicPassword">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                className="input"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </div>
          <div className="usercontact">
            <Form.Group className="newUserItem" controlId="phone">
              <Form.Label className="label">phone</Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="+ 123 456 789"
              />
            </Form.Group>
            <Form.Group className="newUserItem" controlId="formGridAddress1">
              <Form.Label className="label">Address</Form.Label>
              <Form.Control className="input" placeholder="1234 Main St" />
            </Form.Group>
            <Form.Control
              as="select"
              className="mr-sm-2 newUserItem "
              id="inlineFormCustomSelect"
              custom
              className="newUserSelect"
            >
              <option value="0">Choose...</option>
              <option value="1">One</option>
            </Form.Control>
          </div>
        </Form>
        <button className="newUserButton">Save Data</button>
      </div>
    </div>
  );
}
