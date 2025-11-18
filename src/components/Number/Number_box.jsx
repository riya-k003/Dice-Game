import {useState , useEffect} from 'react';
import style from './Number.module.css';
import DiceNumber from '../Role_dice/Role_dices.jsx';

function Number_box({onNumberSelect , resetTrigger}) {

  const[currentNumber , setCurrentNumber] = useState(null);

  useEffect(() =>{
    setCurrentNumber(null);
    const instruction = document.querySelector(`.${style.instruction}`);
    instruction.style.display = 'block';
  }, [resetTrigger])

  const handleNumberClicked = (event) =>{
    const num = parseInt(event.target.id);
    setCurrentNumber(num);
    onNumberSelect(num);

    if(num == null){
      if(DiceNumber){
      const instruction = document.querySelector(`.${style.instruction}`);
        instruction.style.display = 'block';
      }
    }
    else{
      const instruction = document.querySelector(`.${style.instruction}`);
      instruction.style.display = 'none';
    }
    }

  return (
     <div className={style.dice_numbers}>
      <div className = {style.instruction}>
        <p>Please select a number to start the game</p>
      </div>
          <div className={style.btn}>
          <button  id = "1" onClick ={handleNumberClicked}>1</button>
          <button  id = "2" onClick ={handleNumberClicked}>2</button>
          <button  id = "3" onClick ={handleNumberClicked}>3</button>
          <button  id = "4" onClick ={handleNumberClicked}>4</button>
          <button  id = "5" onClick ={handleNumberClicked}>5</button>
          <button  id = "6" onClick ={handleNumberClicked}>6</button>
          <h3>Select Number</h3>
          <h4>Selected Number : {currentNumber}</h4>
          </div>
        </div>
  );
}

export default Number_box;