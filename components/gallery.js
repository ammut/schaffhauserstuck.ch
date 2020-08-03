import AliceCarousel from 'react-alice-carousel'
import style from '../styles/Home.module.css'
import {useRef, useState} from 'react'

function preventDefault(e) {
    e.preventDefault()
}

function urlToImg(url) {
    return <img className={style.galleryImage} src={url} alt="" onMouseDown={preventDefault}/>
}

export default function Gallery({images}) {
    let [items, initItems] = useState(null)
    const [active, setActive] = useState(0)

    if (!items)
        initItems(images.map(urlToImg))

    const className = images.map((_, i) =>
        i === active ? `${style.galleryDotActive} ${style.galleryDot}` : style.galleryDot
    )

    /*
     * For sliding past-the-end, Alice works best when passing a past-the-end index and then canonicalizing
     * our internal state via onSlideChanged.
     */
    function onSlideChanged({item}) {
        setActive(item)
    }

    return (
        <div className={style.gallery}>
            <AliceCarousel
                items={items}
                slideToIndex={active}
                onSlideChanged={onSlideChanged}
                keysControlDisabled
                buttonsDisabled
                dotsDisabled
            />

            <nav className={style.galleryDotNav}>
                {images.map((_, index) =>
                    <button key={index} className={className[index]} onClick={() => setActive(index)} />
                )}
            </nav>
            <button className={style.galleryPrev} onClick={() => setActive(active - 1)} />
            <button className={style.galleryNext} onClick={() => setActive(active + 1)} />
        </div>
    )
}
