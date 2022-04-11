import { useState } from "react";
import "./calculator.css";
import { Button } from "../../components/Button";
import Screen from '../../components/Screen';
import { evaluate, typeOf } from "mathjs";
import { ObjectFlags } from "typescript";

export default function Calculator() {

  const [historicExpression, addHistoricExpression] = useState<Array<string>>([]);

  // virou let por causa 
  let [expression, setExpression] = useState<string>('');

  const cleanLastKeyPress = () => {
    setExpression(oldValue => {
      if (oldValue == 'Error') return '';
      return oldValue.substring(0, oldValue.length - 1);
    });
  }

  const handlerClickBackspace = (): void => {
    cleanLastKeyPress();
  }

  const handlerClean = (): void => {
    setExpression('');
  }

  const handlerCleanAll = (): void => {
    setExpression('');
    addHistoricExpression([]);
  }

  const handlerClick = (e: any) => {
    let value = e.target.dataset.value;
    setExpression(expression + value)
  }

  const handlerKeypress = (e: any) => {
    let value = e.key;

    switch (value) {
      case 'Backspace':
        cleanLastKeyPress();
        break;
      case 'Enter':
      case '=':
        calculate();
        break;
      case '%':
        let regexp = /([0-9]+)$/g;
        const result = expression.match(regexp);
        if (result && result.length > 0) {
          let percent = parseFloat(result[0]) / 100;
          let re = new RegExp(`${result[0]}$`);
          let newValue = expression.replace(re, percent.toString());
          // --
          setExpression(newValue);
          // o calcular deveria ser aqui. Verificar depois como isso poderia ser feito
        }
        break;

      default:
        if (!/[0-9=*/\-\+%(),]/.test(value) || value == 'LaunchApplication2') return;
        setExpression(expression + value);
        break;
    }

  }

  const calculate = (): void => {
    try {
      let result = evaluate(expression.replaceAll(',', '.'));
      if (result && expression.trim() != '') {
        addHistoricExpression(oldArray => {
          if (oldArray.length > 2) oldArray.shift();
          return [...oldArray, `${expression} = ${result}`]
        });
      }
      setExpression(result.toString());

    } catch (error) {
      setExpression('Error');
    }
  }

  return (
    <div>
      <div className='calculate'>
        <Screen value={expression} historic={historicExpression} fnHandlerKeypress={handlerKeypress} />
        <div className='calculate--buttonArea'>

          <div className='line'>
            <Button onClick={handlerCleanAll} value="c">C</Button>
            <Button onClick={handlerClean} value="ce">CE</Button>
            <Button onClick={handlerClickBackspace} value="<" size={2}>{"<"}</Button>
          </div>
          <div className='line'>
            <Button onClick={handlerClick} value="%">%</Button>
            <Button onClick={handlerClick} value="(">(</Button>
            <Button onClick={handlerClick} value=")">)</Button>
            <Button onClick={handlerClick} value="+">+</Button>
          </div>

          <div className='line'>
            <Button onClick={handlerClick} value="7">7</Button>
            <Button onClick={handlerClick} value="8">8</Button>
            <Button onClick={handlerClick} value="9">9</Button>
            <Button onClick={handlerClick} value="*">x</Button>
          </div>

          <div className='line'>
            <Button onClick={handlerClick} value="4">4</Button>
            <Button onClick={handlerClick} value="5">5</Button>
            <Button onClick={handlerClick} value="6">6</Button>
            <Button onClick={handlerClick} value="*">x</Button>
          </div>

          <div className='line'>
            <Button onClick={handlerClick} value="1">1</Button>
            <Button onClick={handlerClick} value="2">2</Button>
            <Button onClick={handlerClick} value="3">3</Button>
            <Button onClick={handlerClick} value="-">-</Button>
          </div>

          <div className='line'>
            <Button onClick={handlerClick} value="0">0</Button>
            <Button onClick={handlerClick} value=",">,</Button>
            <Button onClick={calculate} value="=" size={2}>=</Button>

          </div>
        </div >
      </div >

    </div>
  );
}
