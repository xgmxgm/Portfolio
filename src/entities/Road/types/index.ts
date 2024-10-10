import { ReactNode } from 'react'

export interface RoadType {
	id: number
	isLast?: boolean
	icon_1: ReactNode
	icon_2: ReactNode
	icon_3: ReactNode
	title: string
	text: string
}
