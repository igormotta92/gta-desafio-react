import React, { EventHandler, useState } from "react";
import "./calculator.css";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import { Button } from "../../components/Button";
import Screen from './../../components/Screen';
import { parse } from "path";


export default function Calculator() {

  //=============================

  // let listCalcs = [
  //   {
  //     number1: 0,
  //     number2: 0,
  //     op: 0,
  //     total: 0,
  //   }
  // ]

  const [listCalcs, setListCalcs] = useState([]);
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();

  const clear = (e: any): void => {
    setNumber(0);
  }

  const operatorHandler = (e: any): void => {
    let operator = e.target.dataset.value;
    setOperator(operator);
    setOldNumber(number);
    setNumber(0);
  }

  const inputNum = (e: any) => {
    let value = e.target.dataset.value;
    value = parseFloat(value);
    if (number === 0) {
      setNumber(value);
    } else {
      setNumber(parseFloat(value + number));
    }
  }

  const calculate = (e: any): void => {

    if (operator === "/") {
      setNumber(oldNumber / number);
    } else if (operator === "x") {
      setNumber(oldNumber * number);
    } else if (operator === "-") {
      console.log(oldNumber)
      console.log(number)
      console.log(oldNumber - number)
      setNumber(oldNumber - number);
    } else if (operator === "+") {
      setNumber(eval(`${oldNumber} + ${number}`));
    }
  }

  // }

  /**
   * -------------------|
   * -----------------  |
   * display            |
   * -----------------  |
   * Buttons            |
   * Buttons            |
   * Buttons            |
   * Buttons            |
   * -------------------|
   */

  return (
    <div>
      <div className='calculate'>
        <Screen value={number} />
          <div className='calculate--buttonArea'>

            <div className='line1'>
              <Button onClick={inputNum} value={7}>7</Button>
              <Button onClick={inputNum} value={8}>8</Button>
              <Button onClick={inputNum} value={9}>9</Button>
              <Button onClick={operatorHandler} value="/">/</Button>
            </div>

            <div className='line2'>
              <Button onClick={inputNum} value={4}>4</Button>
              <Button onClick={inputNum} value={5}>5</Button>
              <Button onClick={inputNum} value={6}>6</Button>
              <Button onClick={operatorHandler} value="x">x</Button>
            </div>

            <div className='line3'>
              <Button onClick={inputNum} value={1}>1</Button>
              <Button onClick={inputNum} value={2}>2</Button>
              <Button onClick={inputNum} value={3}>3</Button>
              <Button onClick={operatorHandler} value="-">-</Button>
            </div>

            <div className='line4'>
              <Button onClick={inputNum} value={0}>0</Button>
              <Button onClick={inputNum} value=",">,</Button>
              <Button onClick={calculate} value="=">=</Button>
              <Button onClick={operatorHandler} value="+">+</Button>
            </div>
        </div >
      </div >


    </div>
  );
}
