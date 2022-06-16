import React from "react";
import AddItemFrom from "../components/form/AddItemFrom";
import ListItem from "../components/listItem/ListItem";

function Home() {
  return (
    <>
      <AddItemFrom />
      <div style={{ width: "50%", background: "#ddf" }}>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}

export default Home;
