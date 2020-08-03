import styles from '../styles/Home.module.css'
import Gallery from './gallery'

export default function GalleryCard({item}) {
    return (
        <div className={styles.galleryCard}>
            {item.anchor && <a className={styles.galleryCardAnchor} id={item.anchor}/>}
            <Gallery images={item.images} />
            <div>
                <h3>{item.title}</h3>
                <p className={styles.galleryCardCaption}>{item.caption}</p>
            </div>
        </div>
    )
}
