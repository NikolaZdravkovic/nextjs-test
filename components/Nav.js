import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <div className={navStyles.logo}>
                <img className={navStyles.logo__img} src="https://actdigital.com/wp-content/uploads/2020/11/logo-act.png" alt="" />
            </div>
            <div className={navStyles.navigation}>
                <ul>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/about'>About</Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Nav