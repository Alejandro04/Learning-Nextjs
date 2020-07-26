import Nav from './nav'
import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Learning Next.js</title>
            </Head>
            <Nav/>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Layout
