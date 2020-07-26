import Link from 'next/link'
import styles from './styles/app.module.css'

const Nav = () => {
    return (
        <div className={styles.nav}>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
        </div>
    )
}

export default Nav