import React from "react";
import logo from "../../logo.webp";
import "./listItem.style.css";

function ListItem() {
  return (
    <div className="card">
      {/* <div style={{ flexGrow: 1 }}> */}
      <div className="taskHeader" style={{ width: "20%" }}>
        <img src={logo} alt="logo" width="70%" />
        <div className="status">Pending</div>
      </div>
      <div style={{ width: "70%" }}>
        <h1>Eu in esse ut eiusmod consectetur est.</h1>
        <p>
          Pariatur tempor culpa eiusmod nisi veniam aute occaecat est nisi amet
          ad. Esse do cillum pariatur dolore nostrud incididunt ipsum minim anim
          est et et in amet. Nostrud amet quis esse veniam nulla tempor fugiat
          amet veniam culpa irure occaecat fugiat.
        </p>
      </div>
      <div style={{ width: "10%" }}></div>
      {/* </div> */}
    </div>
  );
}

export default ListItem;
