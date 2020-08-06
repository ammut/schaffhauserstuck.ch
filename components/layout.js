import styles from '../styles/Home.module.css'
import BurgerButton from './burger-button'
import {pages} from '../lib/data'
import {PageLink} from './page-link'
import {useToggle} from '../lib/hooks'
import Link from 'next/link'

export default function Layout({leftHeading, rightHeading, children, mainClassName}) {
    const [siteNavVisible, toggleSiteNav] = useToggle(false)

    const siteNavClass = `${styles.offCanvas} ${siteNavVisible ? styles.offCanvasOpen : styles.offCanvasClosed}`
    const mainClass = [styles.main, mainClassName].filter(_ => _).join(' ')

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href='/'>
                    <a>
                        <h1 className={styles.header1}>Andreas Vogelsanger</h1>
                        {leftHeading && <h2 className={styles.header2Left}>{leftHeading}</h2>}
                    </a>
                </Link>
                <div className={styles.center}>
                    {rightHeading && <h2 className={styles.header2Right}>{rightHeading}</h2>}
                </div>
            </header>

            <BurgerButton onClick={toggleSiteNav} active={siteNavVisible}/>

            <main className={mainClass}>
                {children}
            </main>

            <nav className={siteNavClass}>
                <ul className={styles.siteNavPages}>
                    {pages.map(page => <li key={page.key}><PageLink page={page}/></li>)}
                </ul>

                <div className={styles.contactLinks}>
                    <a className={styles.link} href="mailto:a.vogelsanger@complus.ch">a.vogelsanger@complus.ch</a><br />
                    <a className={styles.link} href="tel:+41765053030">+41 76 505 30 30</a>
                </div>
            </nav>
        </div>
    )
}

export function SideBar({children}) {
    return (
        <div className={styles.sidebarOuter}>
            <div className={styles.sidebarInner}>
                {children}
            </div>
        </div>
    )
}

export function PageNav({refs}) {
    return (
        <nav>
            <ul className={styles.pageNavUl}>
                {refs.map(ref => (
                    <li key={ref}>
                        <a href={`#${ref}`}>{ref}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
