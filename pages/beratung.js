import Layout, {PageNav, SideBar} from '../components/layout'
import styles from '../styles/Home.module.css'
import {beratung, referenzen} from '../lib/data'
import {FloatCard} from '../components/float-card'

export default function Beratung() {
    return (
        <Layout rightHeading='Beratung'>
            <div className={styles.outerGutter}>
                <div className={styles.innerGutter}>
                    <p className={styles.intro}>
                        {beratung.intro}
                    </p>
                    <ul>
                        {beratung.items.map(item => (
                            <li key={item.title}>
                                <FloatCard item={item}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <SideBar>
                    <PageNav refs={beratung.items.map(item => item.title)} />
                </SideBar>
            </div>
        </Layout>
    )
}
