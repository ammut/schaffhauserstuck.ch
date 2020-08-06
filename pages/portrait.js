import Layout, {SideBar} from '../components/layout'
import styles from '../styles/Home.module.css'
import {portrait} from '../lib/data'


export default function Portrait() {
    return (
        <Layout rightHeading='Portrait'>
            <div className={styles.outerGutter}>
                <div className={styles.innerGutter}>
                    <div className={styles.intro}>
                        <img src="/Portrait/Portrait_Andreas_Vogelsanger.jpg" alt="Andreas Vogelsanger bei der Arbeit an einer Stuckaturdecke"/>
                    </div>
                    <div className={styles.intro}>
                        {portrait.intro}
                    </div>
                    <div className={styles.portraitKontakt} >
                        <h3>Kontakt</h3>
                        <a className={styles.link} href="mailto:a.vogelsanger@complus.ch">a.vogelsanger@complus.ch</a><br />
                        <a className={styles.link} href="tel:+41765053030">+41 76 505 30 30</a><br />
                        Andreas Vogelsanger <br />
                        Rosengasse 16 <br />
                        8200 Schaffhausen
                    </div>
                    <div className={styles.portraitWerdegang}>
                        <h3>{portrait.cv.title}</h3>
                        <ul>
                            {portrait.cv.items.map((item, key) => (
                                <li key={key}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <SideBar>
                    <div>
                        <h3>Kontakt</h3>
                        <a className={styles.link} href="mailto:a.vogelsanger@complus.ch">a.vogelsanger@complus.ch</a><br />
                        <a className={styles.link} href="tel:+41765053030">+41 76 505 30 30</a><br />
                        Andreas Vogelsanger <br />
                        Rosengasse 16 <br />
                        8200 Schaffhausen
                    </div>
                </SideBar>
            </div>
        </Layout>
    )
}
