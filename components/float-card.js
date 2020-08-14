import style from '../styles/Home.module.css'
import {useEffect, useRef, useState} from 'react'
import throttle from 'lodash.throttle'
import {preventDefault} from '../lib/util'

function getOffsets(element, scrollY) {
    const boundingRect = element.getBoundingClientRect();

    return {
        bottom: scrollY + boundingRect.bottom,
        top: scrollY + boundingRect.top,
    };
}

// todo: optimize closures
export function FloatCard({item}) {
    const [loaded, setLoaded] = useState(false)
    const img = useRef()

    useEffect(() => {
        const element = getOffsets(img.current, window.scrollY);
        let removed = false

        function _checkScroll() {
            const scrollY = window.scrollY
            const viewport = {
                top: scrollY,
                bottom: scrollY + window.innerHeight,
            };

            const inView = viewport.top <= element.bottom && viewport.bottom >= element.top

            if (inView) {
                unsubscribe()
                setLoaded(true)
            }
        }

        const checkScroll = throttle(_checkScroll, 300)

        document.addEventListener('scroll', checkScroll, {passive: true})

        function unsubscribe() {
            if (!removed) {
                removed = true
                document.removeEventListener('scroll', checkScroll, {passive: true})
            }
        }

        _checkScroll()
        return unsubscribe
    })

    return (
        <div className={style.floatCard}>
            <a id={item.title} className={style.floatCardAnchor}/>
            <img
                src={loaded ? item.image : undefined}
                alt={item.imageAlt}
                className={style.floatCardImg}
                onMouseDown={preventDefault}
                style={{backgroundImage: `url(${item.lqip})`}}
                ref={img}
            />
            <div>
                <h3>{item.title}</h3>
                <p className={style.floatCardText}>{item.text}</p>
            </div>
        </div>
    )
}
