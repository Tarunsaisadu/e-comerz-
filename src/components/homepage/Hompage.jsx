import React from "react";
import { Button } from "react-bootstrap";
import "./homepage.css";
import { Link } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
export default function Hompage({ name, Logout }) {
  return (
    <div>
      <div className="row backgroundimg">
        <lord-icon
          src="https://cdn.lordicon.com/lywgqtim.json"
          trigger="loop"
          colors="primary:#121331,secondary:#08a88a"
          stroke="19"
          style={{
            width: "50px",
            height: "50px",
            cursor: "pointer",
            marginTop: "145px",
          }}
          className="logoutbtn"
          onClick={Logout}
        ></lord-icon>
        {/* <RiLogoutCircleRLine /> */}

        <div className="greet">
          <h4 className="greet">Welcome {name}</h4>
        </div>

        <div className="container">
          <h1 className="herotitle text-center">Shop some weird products</h1>
        </div>
      </div>

      <Link to="/products">
        <Button className="homebtn">Shop Now</Button>
      </Link>
    </div>
  );
}

// import React from "react";
// import "./homepage.css";
// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import shopping from "../../images/shopping.png";
// import { RiLogoutCircleRLine } from "react-icons/ri";

// export default function Hompage({ name, Logout }) {
//   return (
//     <div className="homepage">
//       <header className="header">
//         <div className="col">
//           <div className="content">
//             <h1 className="heading">
//               the wierdest <span>shopping store</span>
//             </h1>

//             <button className="btn">Shop now</button>
//             <button className="btn" onClick={Logout}>
//               <RiLogoutCircleRLine />
//             </button>
//           </div>
//         </div>
//         <div
//           className="col"
//           style={{
//             marginTop: "0px",
//             position: "relative",
//             left: "350px",
//             bottom: "280px",
//           }}
//         >
//           <h2>
//             Hello ! <span>{name}</span>
//           </h2>
//           <span></span>
//         </div>
//       </header>
//     </div>
//   );
// }
