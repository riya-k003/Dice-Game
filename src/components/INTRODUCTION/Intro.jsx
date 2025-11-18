import style from './Intro.module.css';
import Dices from '../../assets/dices.png';
function Intro({toggle}){
    return(
        <div className={style.body}>
        <div className={style.image}>
            <img src={Dices} alt="Dice Image"/>
            </div>
            <div className={style.text}>
                  <h1>DICE GAME</h1>
            <button onClick={toggle} >
                Play Now
            </button>
            </div>
          
        </div>

    );
}

export default Intro;