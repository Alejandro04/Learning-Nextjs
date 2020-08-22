import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/layout'
import { Card } from 'react-bootstrap'
import styles from '../../components/styles/profile.module.css'
import titleStyles from '../../components/styles/app.module.css'

const User = (props) => {

    return (
        <Layout>
             <h2 className={titleStyles.titlePage}>Users</h2>
            <div className={styles.profileContainer}>
                <Card style={{ width: '60%' }}>
                    <Card.Img variant="top" src={props.user.avatar} className={styles.profileAvatar} />
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}> {props.user.first_name} {props.user.last_name} </Card.Title>
                        <Card.Text style={{textAlign: 'center'}}>  
                            {props.user.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    )
}

User.getInitialProps = async (ctx) => {
    const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`)
    const dataJson = await res.json()
    return {
        user: dataJson.data
    }
}

export default User