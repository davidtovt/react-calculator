import Display from "../Display/Display";
import Button from "../Button/Button";
import Switcher from "../Switcher/Switcher";

import "./Calculator.scss";

const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      
      <div className="grid grid-cols-5">
        <div className="col-span-2">
          <Switcher />
        </div>

        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <Button type="clear">CA</Button>
            <Button type="clear">CE</Button>
            <Button type="clear">DEL</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            <Button type="digit">D</Button>
            <Button type="digit">E</Button>
            <Button type="digit">F</Button>
            <Button type="digit">A</Button>
            <Button type="digit">B</Button>
            <Button type="digit">C</Button>
            <Button type="digit">7</Button>
            <Button type="digit">8</Button>
            <Button type="digit">9</Button>
            <Button type="digit">4</Button>
            <Button type="digit">5</Button>
            <Button type="digit">6</Button>
            <Button type="digit">1</Button>
            <Button type="digit">2</Button>
            <Button type="digit">3</Button>
            <Button type="digit">+/-</Button>
            <Button type="digit">0</Button>
            <Button type="digit">.</Button>
          </div>
        </div>
        
        <div className="col-span-2">
          <div className="grid grid-cols-2">
            <Button type="memory">MC</Button>
            <Button type="memory">MR</Button>
            <Button type="memory">M+</Button>
            <Button type="memory">M-</Button>
          </div>

          <div className="grid grid-cols-2">
            <div>
              <Button type="operator">÷</Button>
              <Button type="operator">×</Button>
              <Button type="operator">-</Button>
              <Button type="operator">+</Button>
            </div>

            <div>
              <Button type="operator">%</Button>
              <Button type="operator">√</Button>
              <Button type="operator">^</Button>
              <Button type="operator">=</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;