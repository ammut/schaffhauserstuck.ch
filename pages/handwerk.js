import Layout, {PageNav, SideBar} from '../components/layout'
import style from '../styles/Home.module.css'
import {handwerk} from '../lib/data'
import {FloatCard} from '../components/float-card'


export default function Handwerk({}) {
    return (
        <Layout rightHeading='Handwerk'>
            <div className={style.outerGutter}>
                <div className={style.innerGutter}>
                    <p className={style.intro}>
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
