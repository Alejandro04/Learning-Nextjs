import ListGroup from 'react-bootstrap/ListGroup'
import styles from './styles/app.module.css'

const Users = (props) => {
    return (
        props.users.map(user => (
            <ListGroup key={user.id}>
                <ListGroup.Item className={styles.listGroupContainer}>
                    <div>
                        <h5>{user.first_name}</h5>
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