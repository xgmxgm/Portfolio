'use client'

import { headerLinks } from '@/widgets/Header/constants'
import { ThemeContext } from '@/entities/Theme/model'
import { pVariants } from '../../animations'
import styles from './Footer.module.scss'
import { Logo } from '@/shared/ui/Logo'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { useContext } from 'react'
import Link from 'next/link'

export const Footer = () => {
	const { isDark } = useContext(ThemeContext)

	return (
		<motion.div
			className={styles['footer']}
			initial='hidden'
			whileInView='visible'
			viewport={{ amount: 1, once: true }}
			variants={pVariants}
		>
			<div className={styles['footer__wrapper']}>
				<div className={styles['footer__left']}>
					<Logo />
				</div>
				<div className={styles['footer__center']}>
					<p>My mail:</p>
					<a href='mailto:ekalkabekov@gmail.com'>ekalkabekov@gmail.com</a>
				</div>
				<div className={styles['footer__right']}>
					<p className={styles['title']}>Site map</p>
					<div className={styles['footer__links']}>
						{headerLinks.map((link, index) => (
							<Link
								key={index}
								className={classNames(
									{ [styles.dark]: !isDark },
									styles['link']
								)}
								href={link.url}
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	)
}
