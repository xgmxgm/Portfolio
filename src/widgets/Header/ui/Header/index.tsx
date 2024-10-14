'use client'

import { ThemeSwitcher } from '@/features/ThemeSwitcher/ui/index'
import { pVariants, transitionSettings } from '../../animations'
import styles from './Header.module.scss'
import { Logo } from '@/shared/ui/Logo'
import { motion } from 'framer-motion'
import { NavBar } from '../Navbar'

export const Header = () => {
	return (
		<div className={styles.header}>
			<motion.div
				initial='hidden3'
				animate='visible3'
				variants={pVariants}
				transition={transitionSettings}
			>
				<Logo />
			</motion.div>
			<div className={styles.header__left}>
				<motion.div
					className={styles.header__wrapper}
					initial='hidden'
					animate='visible'
					variants={pVariants}
					transition={transitionSettings}
				>
					<NavBar />
				</motion.div>
				<motion.div
					initial='hidden2'
					animate='visible2'
					variants={pVariants}
					transition={transitionSettings}
				>
					<ThemeSwitcher />
				</motion.div>
			</div>
		</div>
	)
}
