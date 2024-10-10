'use client'

import React, { useEffect, useMemo, useState } from 'react'
import { ThemeContext } from '@/entities/Theme/model'

type Props = {
	children: React.ReactNode
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
	const [isDark, setIsDark] = useState(true)

	const value = useMemo(() => ({ isDark, setIsDark }), [isDark])

	useEffect(() => {
		if (isDark) {
			document.body.classList.add('dark')
		} else {
			document.body.classList.remove('dark')
		}
	}, [isDark])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
