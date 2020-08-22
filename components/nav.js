import Link from 'next/link'
import styles from './styles/app.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About me</a>
            </Link>
            <Link href="/users">
                <a>Users</a>
            </Link>
        </div>
    )
}

export default Nav