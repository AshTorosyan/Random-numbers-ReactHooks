import Wrapper from "./UI/Wrapper/Wrapper";
import React, { useState } from "react";
import Header from "./UI/Header/Header";
import RandomNum from "./Components/RandomNum/RandomNum";
import SortNum from "./Components/SortNum/SortNum";
import classes from "./UI/Global.module.css";
import "./App.css";
import Card from "./Components/Card/Card";
import TextItem from "./Components/TextItem/TextItem";




function App() {

const [numbers, setNumbers] =  useState([]);
const [newNumberId, setNewNumberId] =  useState(1);


const AddRandomNumber = () => {
  const newRandomNumber = {
      value: Math.ceil(Math.random() * 200),
      id: newNumberId
   }
   setNumbers(numbers.concat(newRandomNumber))
   setNewNumberId(newNumberId + 1)
}


const SortNumber = () => {
  setNumbers([].concat(numbers.sort((firstItem,secondItem) => firstItem.value - secondItem.value)))
}

  return (
    <Wrapper className={classes.wrapper}>
     <Header className={classes.header}>
      <RandomNum className={classes.randomNum} onClick={AddRandomNumber}> Random Numbers </RandomNum>
      <SortNum className={classes.sortNum} onClick={SortNumber}> Sort Numbers </SortNum>
     </Header>
     <Card className={classes.card}>
      {
        numbers.map(number => {
          return (
            <TextItem key={number.id} className={classes.textItem}> 
               {number.value}
            </TextItem>
          )
        })
      }
     </Card>
    </Wrapper>
  );
}

export default App;
