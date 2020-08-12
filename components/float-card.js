import styles from '../styles/Home.module.css'

// todo: make lazy loading
export function FloatCard({item}) {
    return (
        <div className={styles.floatCard}>
            <a id={item.title} className={styles.floatCardAnchor}/>
            <img src={item.image} alt={item.imageAlt} className={styles.floatCardImg}/>
            <div>
                <h3>{item.title}</h3>
                <p className={styles.floatCardText}>{item.text}</p>
            </div>
        </div>
    )
}
