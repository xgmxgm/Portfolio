'use client'

import { ThemeContext } from '@/entities/Theme/model'
import styles from './ThemeSwicher.module.scss'
import { Moon } from '@/shared/ui/Icons/Moon'
import { Sun } from '@/shared/ui/Icons/Sun'
import React, { useContext } from 'react'
import classNames from 'classnames'

export const ThemeSwitcher: React.FC = () => {
	const { isDark, setIsDark } = useContext(ThemeContext)

	return (
		<button
			onClick={() => setIsDark(prev => !prev)}
			className={classNames(
				{
					[styles.dark]: isDark,
					[styles.light]: !isDark,
				},
				styles.switcher
			)}
		>
			{isDark ? <Moon /> : <Sun />}
		</button>
	)
}
