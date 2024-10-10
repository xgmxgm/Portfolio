import { headerLinks } from '../../constants'
import styles from './Navbar.module.scss'
import Link from 'next/link'

export const NavBar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbar__list}>
				{headerLinks.map((link, index) => (
					<li className={styles.navbar__item} key={index}>
						<Link className={styles.navbar__link} href={link.url}>
							{link.name}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
