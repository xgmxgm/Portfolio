'use client'

import { ThemeContext } from '@/entities/Theme/model'
import { FC, ReactNode, useContext } from 'react'
import styles from './CardLink.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

interface IProps {
	icon: ReactNode
	text: string
	href: string
}

export const CardLink: FC<IProps> = ({ icon, text, href }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<Link href={href} target='_blank'>
			<div
				className={classNames({ [styles.dark]: !isDark }, styles['card-link'])}
			>
				<div className={styles['card-link__wrapper']}>
					<div className={styles['card-link__icon']}>{icon}</div>
					<div className={styles['card-link__title']}>
						<p className={styles['card-link__text']}>{text}</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
