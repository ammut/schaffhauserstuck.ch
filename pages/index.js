import Head from 'next/head'
import Layout from '../components/layout'
import CeilingMap from '../components/ceiling-map'
import styles from '../styles/Home.module.css'

export default function Home() {

    return (
        <Layout leftHeading='Stuckateur aus Leidenschaft' mainClassName={styles.front}>
            <Head>
                <title>Schaffhauser Stuck - Home</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <CeilingMap />
        </Layout>
    )
}
