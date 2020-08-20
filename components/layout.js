import style from '../styles/Home.module.css'
import BurgerButton from './burger-button'
import {pages, address} from '../lib/data'
import {PageLink} from './page-link'
import {useToggle} from '../lib/util'
import Link from 'next/link'
import {useEffect, useState} from 'react'

export default function Layout({leftHeading, rightHeading, children, mainClassName, rightHeadingSmallscreen}) {
    const [siteNavVisible, toggleSiteNav] = useToggle(false)
    const [dprClass, setDprClass] = useState('')
    useEffect(() => {
        setDprClass(window.devicePixelRatio > 1 ? style.dpr2 : '')
    })

    const siteNavClass = `${style.offCanvas} ${siteNavVisible ? style.offCanvasOpen : style.offCanvasClosed}`
    const mainClass = [style.main, mainClassName].filter(_ => _).join(' ')

    if (rightHeading && !rightHeadingSmallscreen)
        rightHeadingSmallscreen = rightHeading

    return (
        <div className={style.container + ' ' + dprClass}>
            <header className={style.header}>
                <Link href='/'>
                    <a>
                        <h1 className={style.header1}>Andreas Vogelsanger</h1>
                        {leftHeading && <h2 className={style.header2Left}>{leftHeading}</h2>}
                    </a>
                </Link>
                <div className={style.center}>
                    {rightHeading && <h2 className={style.header2Right}>{rightHeading}</h2>}
                    {rightHeadingSmallscreen && <h2 className={style.header2RightSm}>{rightHeadingSmallscreen}</h2> }
                </div>
            </header>

            <BurgerButton onClick={toggleSiteNav} active={siteNavVisible}/>

            <main className={mainClass}>
                {children}
            </main>

            <nav className={siteNavClass}>
                <ul className={style.siteNavPages}>
                    {pages.map(page => <li key={page.key}><PageLink onClick={toggleSiteNav} page={page}/></li>)}
                </ul>

                <div className={style.contactLinks}>
                    <a className={style.link} href={address.email.link}>{address.email.text}</a><br />
                    <a className={style.link} href={address.phone.link}>{address.phone.text}</a>
                </div>
            </nav>
        </div>
    )
}

export function SideBar({children}) {
    return (
        <div className={style.sidebarOuter}>
            <div className={style.sidebarInner}>
                {children}
            </div>
        </div>
    )
}

export function PageNav({refs}) {
    return (
        <nav>
            <ul className={style.pageNavUl}>
                {refs.map(ref => (
                    <li key={ref}>
                        <a href={`#${ref}`}>{ref}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
