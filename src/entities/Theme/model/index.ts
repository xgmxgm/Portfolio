import { createContext } from 'react'

type ThemeState = {
	isDark: boolean
	setIsDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const ThemeContext = createContext<ThemeState>({
	isDark: false,
	setIsDark: () => {},
})
