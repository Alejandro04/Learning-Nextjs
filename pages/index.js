import Head from 'next/head'
import Layout from '../components/layout'
import fetch from 'isomorphic-unfetch'
import Users from '../components/users'
import styles from '../components/styles/app.module.css'

export default function Home({ users }) {
  return (
    <Layout>
      <div className="container">
        <Head>
          <title>Learning Next.js | Home</title>
        </Head>
      </div>
      <h2 className={styles.titlePage}>Users</h2>
      <Users users={users}/>
    </Layout>
  )
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch('https://reqres.in/api/users')
  const json = await res.json()
  console.log(json)
  return { users: json.data }
}
