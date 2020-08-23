import ImageGallery from 'react-image-gallery'
import style from '../styles/Home.module.css'
import {useRef, useState} from 'react'
import {preventDefault} from '../lib/util'

function makeLazyProps([original, lqip], index) {
    return {
        original,
        lqip,
        index,
    }
}

// todo: support for .webp
export default function Gallery({images}) {
    let [items] = useState(() => images.map(makeLazyProps))
    let [loaded, setLoaded] = useState(images.map((_, index) => index === 0))
    let [current, setCurrent] = useState(0)
    const gallery = useRef(null)

    function renderItem(item) {
        return (
            <img
                src={loaded[item.index] ? item.original : undefined}
                alt=""
                className={style.galleryImage}
                // onMouseDown={preventDefault}
                style={{backgroundImage: `url(${item.lqip})`}}
                width={1500}
                height={897}
                onTouchMove={undefined}
            />
        )
    }

    function onBeforeSlide(nextIndex) {
        setCurrent(nextIndex)
        if (!loaded[nextIndex]) {
            const newLoaded = loaded.map((value, index) => index === nextIndex ? true : value)
            setLoaded(newLoaded)
        }
    }

    function slideTo(index) {
        gallery.current.slideToIndex(index)
    }

    const className = images.map((_, i) =>
        i === current ? `${style.galleryDotActive} ${style.galleryDot}` : style.galleryDot
    )

    return (
        <div className={style.gallery}>
            <div className={style.galleryWrapper}>
                <ImageGallery
                    items={items}
                    renderItem={renderItem}
                    showNav={false}
                    showBullets={false}
                    showThumbnails={false}
                    showFullscreenButton={false}
                    showPlayButton={false}
                    disableKeyDown
                    preventDefaultTouchmoveEvent
                    onBeforeSlide={onBeforeSlide}
                    ref={gallery}
                />
                <button className={style.galleryPrevButton} onClick={() => slideTo(current - 1)} />
                <button className={style.galleryNextButton} onClick={() => slideTo(current + 1)} />
            </div>

            <nav className={style.galleryDotNav}>
                {images.map((_, index) =>
                    <button key={index} className={className[index]} onClick={() => slideTo(index)} />
                )}
            </nav>
        </div>
    )
}
