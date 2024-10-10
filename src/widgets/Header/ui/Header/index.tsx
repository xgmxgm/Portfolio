import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/index'
import styles from './Header.module.scss'
import { Logo } from '@/shared/ui/Logo'
import { NavBar } from '../Navbar'

export const Header = () => {
	return (
		<div className={styles.header}>
			<div>
				<Logo />
			</div>
			<div className={styles.header__left}>
				<div className={styles.header__wrapper}>
					<NavBar />
				</div>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
