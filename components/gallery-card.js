import style from '../styles/Home.module.css'
import Gallery from './gallery'

export default function GalleryCard({item}) {
    return (
        <div className={style.galleryCard}>
            {item.anchor && <a className={style.galleryCardAnchor} id={item.anchor}/>}
            <Gallery images={item.images} />
            <div>
                <h3>{item.title}</h3>
                <p className={style.galleryCardCaption}>{item.caption}</p>
            </div>
        </div>
    )
}
