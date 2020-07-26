import ListGroup from 'react-bootstrap/ListGroup'
import styles from './styles/users.module.css'
import Router from 'next/router'

const Users = (props) => {
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
}

export default Users