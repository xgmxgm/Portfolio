import { ReactNode } from 'react'

export interface RoadType {
	id: number
	isLast?: boolean
	icon_1: ReactNode
	icon_2: ReactNode
	icon_3: ReactNode
	icon_1_info: string
	icon_2_info: string
	icon_3_info: string
	title: string
	text: string
}
