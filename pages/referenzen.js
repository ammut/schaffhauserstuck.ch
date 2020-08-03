import Layout, {PageNav, SideBar} from '../components/layout'
import styles from '../styles/Home.module.css'
import {referenzen} from '../lib/data'
import SplitSlider from '../components/split-slider'
import GalleryCard from '../components/gallery-card'

export default function Beratung() {
    return (
        <Layout rightHeading='Referenzen'>
            <div className={styles.outerGutter}>
                <div className={styles.innerGutter}>
                    <div className={styles.intro}>
                        <SplitSlider className={'foo'} left={referenzen.slider.left} right={referenzen.slider.right}/>

                        <p className={styles.referenzenIntro}>
                            {referenzen.slider.caption}
                        </p>
                    </div>
                    <p className={styles.intro}>
                        {referenzen.intro}
                    </p>
                    <ul>
                        {referenzen.items.map(item => (
                            <li key={item.key}>
                                <GalleryCard item={item}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <SideBar>

                    <PageNav refs={referenzen.items.map(item => item.anchor).filter(item => item)} />
                </SideBar>
            </div>
        </Layout>
    )
}
