import Sidebar from "../Sidebar";
import "./userpage.css";
import faker from "faker";
import { Link } from "react-router-dom";
export default function Userpage() {
  return (
    <div className="userpage">
      <div className="sidebarcont">
        <Sidebar />
      </div>
      <div className="userpagecont">
        <div className="userTitleContaiiner">
          <h1 className="userTitle">Edit User</h1>
          <Link to="/newuser">
            <button className="userAddButton">Create</button>
          </Link>
        </div>
        <div className="userDetailsContainer">
          <div className="userShow">
            <div className="userShowTop">
              <img className="userShowImg" src={faker.image.avatar()} alt="" />
              <div className="userShowTopTitle">
                <span className="userShowUsername">
                  {faker.name.firstName()}
                </span>
                <span className="userShowUserTitle">
                  {faker.name.jobTitle()}
                </span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <lord-icon
                  src="https://cdn.lordicon.com/dxjqoygy.json"
                  delay="2000"
                  trigger="loop"
                  colors="primary:#0a2e5c,secondary:#0a2e5c"
                  style={{ width: "30px", height: "30px" }}
                  className="userShowIcon"
                ></lord-icon>
                <span className="userShowInfoTitle">
                  {faker.internet.userName()}
                </span>
              </div>
              <div className="userShowInfo">
                <lord-icon
                  className="userShowIcon"
                  src="https://cdn.lordicon.com/lupuorrc.json"
                  delay="2000"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: "32px", height: "32px" }}
                ></lord-icon>{" "}
                <span className="userShowInfoTitle">
                  12 {faker.date.month()} 1996
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <img
                  className="userShowIcon"
                  src="https://img.icons8.com/windows/24/000000/phone-disconnected--v1.png"
                />
                <span className="userShowInfoTitle">
                  + {faker.phone.phoneNumber()}
                </span>
              </div>{" "}
              <div className="userShowInfo">
                <img
                  className="userShowIcon"
                  src="https://img.icons8.com/ios/24/000000/mail.png"
                />
                <span className="userShowInfoTitle">
                  {faker.internet.email()}
                </span>
              </div>{" "}
              <div className="userShowInfo">
                <lord-icon
                  className="userShowIcon"
                  src="https://cdn.lordicon.com/zzcjjxew.json"
                  trigger="loop"
                  delay="2000"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{ width: "32px", height: "32px" }}
                ></lord-icon>
                <span className="userShowInfoTitle">
                  {faker.address.city()}|{faker.address.country()}
                </span>
              </div>{" "}
            </div>
          </div>
          <div className="userUpdate">
            <span className="UserUpdateTitle">Edit</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={faker.internet.userName()}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder={faker.internet.userName()}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder={faker.name.firstName()}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={faker.internet.email()}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder={faker.phone.phoneNumber()}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder={faker.address.city}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={faker.image.avatar()}
                    alt=""
                  />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
            <label htmlFor="file">
              <img
                className="userUpdateIcon"
                src="https://img.icons8.com/material-sharp/24/000000/upload.png"
              />
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
