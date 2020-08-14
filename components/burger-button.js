import style from "../styles/Home.module.css";

export default function BurgerButton({onClick, active}) {
    return (
        <button className={`${style.menuButton} ${active ? style.menuButtonActive : ''}`} onClick={onClick}>
            <span className={`${style.menuButtonBar} ${style.menuButtonBar1}`}/>
            <span className={`${style.menuButtonBar} ${style.menuButtonBar2}`}/>
            <span className={`${style.menuButtonBar} ${style.menuButtonBar3}`}/>
            <span className={`${style.menuButtonBar} ${style.menuButtonBar4}`}/>
        </button>
    );
}
