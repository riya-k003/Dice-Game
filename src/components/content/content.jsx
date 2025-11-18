import {useState} from 'react';
import style from './content.module.css';
import Number_box from '../Number/Number_box.jsx';
import RoleDices from '../Role_dice/Role_dices.jsx';
export default function Content() {
  const[SelectedNumber , setSelectedNumber] = useState(null);
  const[diceNumber , setdiceNumber] = useState(null);
  const[score , setScore] = useState(0);
  const[resetTrigger , setResetTrigger] = useState(false);

  const handleDiceRoll = (rolled) =>{
    setdiceNumber(rolled);

    if (SelectedNumber === null) return;

    if (rolled === SelectedNumber) {
      setScore((prev) => prev + rolled);
    } else {
      setScore((prev) => prev - 2);
    } 
  }

  const handleResetScore = () =>{
    setScore(0);
    setdiceNumber(null);
    setSelectedNumber(null);
    setResetTrigger((prev) => !prev);
  }

  const handleselectedNumber =(num) =>{
    setSelectedNumber(num);
  }

  return (
    <div className={style.body}>
      <div className ={style.upper_box}>
        <div className={style.score_board}>
          <p>{score}</p>
          <h3>Total Score</h3>
          {diceNumber && <p>You rolled: {diceNumber}</p>}
        </div>
        <Number_box 
        onNumberSelect={handleselectedNumber}
        resetTrigger ={resetTrigger}
        />
      </div>
   <div className={style.lower_box}>
    <div className={style.gameArea}>
       <RoleDices
            onRollDice={handleDiceRoll}
            resetTrigger ={resetTrigger}
            reset ={handleResetScore}
       />
    </div>
     
   </div>
    </div>
  );
}