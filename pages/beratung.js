import Layout, {PageNav, SideBar} from '../components/layout'
import style from '../styles/Home.module.css'
import {beratung} from '../lib/data'
import {FloatCard} from '../components/float-card'

export default function Beratung() {
    return (
        <Layout rightHeading='Beratung'>
            <div className={style.outerGutter}>
                <div className={style.innerGutter}>
                    <p className={style.intro}>
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
