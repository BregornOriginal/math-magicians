import { useState } from 'react';
import calculate from '../../logic/calculate';
import ButtonsGrid from '../../buttons/buttons';
import styles from './Calculator.module.css';

const Calculator = () => {
  const DEFAULT_DISPLAYED_INFO = '0';

  const DEFAULT_CALCULATOR_DATA = {
    total: null,
    next: null,
    operation: null,
  };

  const buttonsRows = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];
  const [calculatorData, setCalculatorData] = useState(DEFAULT_CALCULATOR_DATA);
  const [displayedInfo, setDisplayedInfo] = useState(DEFAULT_DISPLAYED_INFO);

  const handleCalculation = (buttonName) => {
    const { total, next, operation } = calculate(calculatorData, buttonName);
    setCalculatorData({ total, next, operation });

    if (!total && !next && !operation) {
      return setDisplayedInfo(DEFAULT_DISPLAYED_INFO);
    }

    return setDisplayedInfo(next || total);
  };

  return (
    <div className="calculator">
      <div className={styles['calculator-container']}>
        <h1 className={styles.title}>Let&apos;s do some math!</h1>
        <div className="calculator-display">{displayedInfo}</div>
        <ButtonsGrid
          buttonsRows={buttonsRows}
          handleClickCallback={handleCalculation}
        />
      </div>
    </div>
  );
};

export default Calculator;
