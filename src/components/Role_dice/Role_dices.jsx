import {useState , useEffect} from 'react';
import styles from './Role-dice.module.css';
import im1 from '../../assets/inverted-dice-1.png';
import im2 from '../../assets/inverted-dice-2.png';
import im3 from '../../assets/inverted-dice-3.png';
import im4 from '../../assets/inverted-dice-4.png';
import im5 from '../../assets/inverted-dice-5.png';
import im6 from '../../assets/inverted-dice-6 (1).png';

export default function Role_dices({ onRollDice , reset , resetTrigger}) {

  console.log('Image path:' , im1);
  const data =[
    {id:1 , img: im1},
    {id:2 , img: im2},
    {id:3 , img: im3},
    {id:4 , img: im4},
    {id:5 , img: im5},
    {id:6 , img: im6},

  ];
  const [current , setcurrent] = useState(data[0]);

   useEffect(() => {
    setcurrent(data[0]);
  }, [resetTrigger]);
  
  const handleimage = () =>{
    const randomIndex = Math.floor(Math.random() * data.length);
    const rolled = data[randomIndex];
    setcurrent(rolled);

   if (onRollDice) {
    onRollDice(Number(rolled.id));
  } else {
    console.log("⚠️ onRollDice not received by Role_dices");
  }
  };

  const handleshowRules = () => {
    const rulebox = document.querySelector(`.${styles.rulebox}`);
    if (!rulebox) return;
    rulebox.style.display = rulebox.style.display === 'block' ? 'none' : 'block';
  };
  
  return (
    <div className={styles.mainbox}>
      <div>
       <img className={styles.image}
       onClick={handleimage} src={current.img} alt="random_dice"/>
      </div>
      <div className={styles.lowerbox}>
        <p>Click on Dice to roll</p>
        <button className={styles.resetbtn} onClick={reset}>Reset Score</button>
        <button className={styles.showRulesbtn}
        onClick={handleshowRules}>Show Rules</button>
      </div>
        <div className={styles.rulebox}>
          <h3>How to play dice game</h3>
          <p>1. Select any number</p>
          <p>2. Click on dice image</p>
          <p>3. after click on dice if selected number is equal to the dice you will get same point as dice</p>
          <p>4. If you get wrong guess then 2 point will be deducted</p>
        </div>
    </div>
  )
}

