import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import styles from '../components/styles/profile.module.css'
import titleStyles from '../components/styles/app.module.css'

const About = () => {

    return (
        <Layout>
             <h2 className={titleStyles.titlePage}>About me</h2>
            <div className={styles.profileContainer}>
                <Card style={{ width: '60%' }}>
                    <Card.Img variant="top" src="https://miro.medium.com/fit/c/336/336/2*2zX-dxkaDCsNjfaIH4YzKA.jpeg" className={styles.profileAvatar} />
                    <Card.Body>
                        <Card.Title style={{textAlign: 'center'}}> Alejandro Roa </Card.Title>
                        <Card.Text style={{textAlign: 'center'}}>  
                            alejodev04@gmail.com
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Layout>
    )
}

export default About