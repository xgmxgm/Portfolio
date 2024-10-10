'use client'

import { ThemeContext } from '@/entities/Theme/model'
import styles from './Button.module.scss'
import classNames from 'classnames'
import { useContext } from 'react'

type Props = {
	children: React.ReactNode
	onClick?: () => void
}

export const Button: React.FC<Props> = ({ children, onClick }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<button
			onClick={onClick}
			className={classNames(
				{ [styles.dark]: !isDark, [styles.light]: isDark },
				styles.button
			)}
		>
			{children}
		</button>
	)
}
