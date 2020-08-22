import ListGroup from 'react-bootstrap/ListGroup'
import styles from './styles/users.module.css'
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import stylesProfile from '../components/styles/profile.module.css'
import Router from 'next/router'

const Users = (props) => {

    const data = Array.isArray(props.users)

    if (data) {
        return (
            props.users.map(user => (
                <ListGroup key={user.id} onClick={e => Router.push('/users/[id]', `/users/${user.id}`)}>
                    <ListGroup.Item className={styles.listGroupContainer}>
                        <div>
                            <h5>{user.first_name}  {user.last_name} </h5>
                            <p> {user.email} </p>
                        </div>
                        <div>
                            <img src={user.avatar} className={styles.avatarImage}></img>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            ))
        )
    } else {
        let component = ""
        if (props.users !== undefined) {
            component = <div className={stylesProfile.profileContainer}>
                <Card style={{ width: '60%' }}>
                    <Card.Img variant="top" src={props.users.avatar} className={stylesProfile.profileAvatar} />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}> {props.users.first_name} </Card.Title>
                        <Card.Text style={{ textAlign: 'center' }}>
                            {props.users.email}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        } else {
            component = <div>Cargando...</div>
        }

        return (
            <div>
                {component}
            </div>
        )
    }

}

export default Users