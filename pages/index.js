import Head from 'next/head'
import Layout from '../components/layout'
// import CeilingMap from '../components/ceiling-map'

export default function Home() {

    return (
        <Layout leftHeading='Stuckateur aus Leidenschaft'>
            <Head>
                <title>Schaffhauser Stuck</title>
            </Head>

            {/*<CeilingMap />*/}
        </Layout>
    )
}
