import Wrapper from "./UI/Wrapper/Wrapper";
import React from "react";
import Header from "./UI/Header/Header";
import RandomNum from "./Components/RandomNum/RandomNum";
import SortNum from "./Components/SortNum/SortNum";
import classes from "./UI/Global.module.css";
import "./App.css";

function App() {
  return (
    <Wrapper className={classes.wrapper}>
     <Header className={classes.header}>
      <RandomNum className={classes.randomNum}> Random Numbers </RandomNum>
      <SortNum className={classes.sortNum}> Sort Numbers </SortNum>
     </Header>
    </Wrapper>
  );
}

export default App;
