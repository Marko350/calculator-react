import { calculator } from "../css/Calculator.module.css";
import Display from "./Display";

const Calculator = () => {
  return (
    <div className={calculator}>
      <Display />
      <h1>This is the ButtonsContainer component</h1>
    </div>
  );
};

export default Calculator;
