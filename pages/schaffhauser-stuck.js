import Layout, {PageNav, SideBar} from '../components/layout'
import styles from '../styles/Home.module.css'
import {schaffhauserStuck} from '../lib/data'
import GalleryCard from '../components/gallery-card'


export default function SchaffhauserStuck() {
    return (
        <Layout rightHeading='Schaffhauser Stuck'>
            <div className={styles.outerGutter}>
                <div className={styles.innerGutter}>
                    <p className={styles.intro}>
                        {schaffhauserStuck.intro}
                    </p>
                    <ul>
                        {schaffhauserStuck.items.map(item => (
                            <li key={item.key}>
                                <GalleryCard item={item}/>
                            </li>
                        ))}
                    </ul>
                </div>

                <SideBar>
                    <PageNav refs={schaffhauserStuck.items.map(item => item.anchor).filter(item => item)} />
                </SideBar>
            </div>
        </Layout>
    )
}
