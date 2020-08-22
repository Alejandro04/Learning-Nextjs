import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Users from '../components/users'
import styles from '../components/styles/app.module.css'
import { Typeahead } from 'react-bootstrap-typeahead';
import fakedata from '../data/users.json'
import fakeuser from '../data/user.json'

import { getUsers } from '../data/api'

export default function Home() {

  const [params, setParams] = useState("per_page=12")
  const [fake, setFake] = useState(fakedata)

  const onUsersChange = (data) => {
    console.log(data.length)
    if(data.length > 0){
      setParams(`id=${data[0].id}&per_page=12`)
    }else{
      setParams(`per_page=12`)
    }
  }

  let searchComponent = ""
  const usersData = getUsers(params)
  let userMap = { users: usersData.data }

  if (usersData !== undefined ) {
    searchComponent = <div>
      <Typeahead
        className="typeHeadUsers"
        id="typehead"
        labelKey={(option) => `${option.first_name}`}
        options={fakedata.data}
        placeholder="Buscar Usuario"
        name="typeHeadUsers"
        onChange={selected => onUsersChange(selected)}
        style={{width: "60%", margin: "auto", marginBottom: "40px"}}
      />
    </div>
  }

  return (
    <Layout>
      <div className="container">
        <Head>
          <title>React Query with Next.js | Users</title>
        </Head>
      </div>
      <h2 className={styles.titlePage}>Users</h2>
      {searchComponent}
      <Users users={userMap.users} />
    </Layout>
  )
}