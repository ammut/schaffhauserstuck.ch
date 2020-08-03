import Layout, {PageNav, SideBar} from '../components/layout'
import styles from '../styles/Home.module.css'
import {handwerk, referenzen} from '../lib/data'
import {FloatCard} from '../components/float-card'


export default function Handwerk({}) {
    return (
        <Layout rightHeading='Handwerk'>
            <div className={styles.outerGutter}>
                <div className={styles.innerGutter}>
                    <p className={styles.intro}>
                        {handwerk.intro}
                    </p>
                    <ul>
                        {handwerk.items.map(item => (
                            <li key={item.title}>
                                <FloatCard item={item}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <SideBar>
                    <PageNav refs={handwerk.items.map(item => item.title)} />
                </SideBar>
            </div>
        </Layout>
    )
}
