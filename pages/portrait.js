import Layout, {SideBar} from '../components/layout'
import style from '../styles/Home.module.css'
import {address, portrait} from '../lib/data'


export default function Portrait() {
    const contactInfo = <>
        <h3>Kontakt</h3>
        <a className={style.link} href={address.email.link}>{address.email.text}</a><br/>
        <a className={style.link} href={address.phone.link}>{address.phone.text}</a><br/>
        {address.name} <br/>
        {address.street} <br/>
        {address.town}
    </>

    return (
        <Layout rightHeading='Portrait'>
            <div className={style.outerGutter}>
                <div className={style.innerGutter}>
                    <div className={style.intro}>
                        <img src="/Portrait/Portrait_Andreas_Vogelsanger.jpg"
                             alt="Andreas Vogelsanger bei der Arbeit an einer Stuckaturdecke"/>
                    </div>
                    <div className={style.intro}>
                        {portrait.intro}
                    </div>
                    <div className={style.portraitKontakt}>
                        {contactInfo}
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
                        {contactInfo}
                    </div>
                </SideBar>
            </div>
        </Layout>
    )
}
