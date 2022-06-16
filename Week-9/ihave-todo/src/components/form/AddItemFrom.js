import React from "react";
import "./AddItemFrom.style.css";

function AddItemFrom() {
  return (
    <div className="form-card">
      <form>
        <input type="text" name="name" placeholder="What you have todo? " />
      </form>
    </div>
  );
}

export default AddItemFrom;
