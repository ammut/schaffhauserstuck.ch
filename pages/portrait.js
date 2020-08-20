import Layout, {SideBar} from '../components/layout'
import style from '../styles/Home.module.css'
import {address, portrait} from '../lib/data'


export default function Portrait() {
    return (
        <Layout rightHeading='Portrait'>
            <div className={style.outerGutter}>
                <div className={style.innerGutter}>
                    <div className={style.intro}>
                        <img src="/Portrait/Portrait_Andreas_Vogelsanger.jpg" alt="Andreas Vogelsanger bei der Arbeit an einer Stuckaturdecke"/>
                    </div>
                    <div className={style.intro}>
                        {portrait.intro}
                    </div>
                    <div className={style.portraitKontakt} >
                        <h3>Kontakt</h3>
                        <a className={style.link} href={address.email.link}>{address.email.text}</a><br />
                        <a className={style.link} href={address.phone.link}>{address.phone.text}</a><br />
                        {address.name} <br />
                        {address.street} <br />
                        {address.town}
                    </div>
                    <div className={style.portraitWerdegang}>
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
                        <a className={style.link} href="mailto:a.vogelsanger@complus.ch">a.vogelsanger@complus.ch</a><br />
                        <a className={style.link} href="tel:+41765053030">+41 76 505 30 30</a><br />
                        Andreas Vogelsanger <br />
                        Rosengasse 16 <br />
                        8200 Schaffhausen
                    </div>
                </SideBar>
            </div>
        </Layout>
    )
}
