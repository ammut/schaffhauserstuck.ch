import Head from 'next/head'
import Layout from '../components/layout'
import CeilingMap from '../components/ceiling-map'
import style from '../styles/Home.module.css'

export default function Home() {

    return (
        <Layout leftHeading='Stuckateur aus Leidenschaft' mainClassName={style.front}>
            <Head>
                <title>Schaffhauser Stuck - Home</title>
                {/*<link rel="icon" href="/favicon.ico" />*/}
            </Head>

            <CeilingMap />
        </Layout>
    )
}
