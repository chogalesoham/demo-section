import React from "react";
import SingleComponent from "./Board";
import Box1 from "../components/box1";
import Box2 from "../components/box2";
import Box3 from "../components/box3";
import Box4 from "../components/box4";
import Box5 from "../components/box5";

const BoardPage = () => {
  return (
    <div>
      <div>{/* <Box1 /> */}</div>
      <div>{/* <Box2 /> */}</div>
      <div>
        {" "}
        <Box3 />
      </div>
      <div>{/* <Box4 /> */}</div>
      <div>{/* <Box5 /> */}</div>
    </div>
  );
};

export default BoardPage;
