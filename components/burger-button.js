import styles from "../styles/Home.module.css";

export default function BurgerButton({onClick, active}) {
    return (
        <button className={`${styles.menuButton} ${active ? styles.menuButtonActive : ''}`} onClick={onClick}>
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBar1}`}/>
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBar2}`}/>
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBar3}`}/>
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBar4}`}/>
        </button>
    );
}
