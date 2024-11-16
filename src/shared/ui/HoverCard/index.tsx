import { type ReactNode, type FC, useContext } from 'react'
import { ThemeContext } from '@/entities/Theme/model'
import * as HC from '@radix-ui/react-hover-card'
import styles from './HoverCard.module.scss'
import classNames from 'classnames'

interface IProps {
	icon: ReactNode
	iconContent: ReactNode
}

export const HoverCard: FC<IProps> = ({ icon, iconContent }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<HC.Root openDelay={100}>
			<HC.Trigger asChild>{icon}</HC.Trigger>
			<HC.Portal>
				<HC.Content
					sideOffset={20}
					className={classNames(
						{ [styles.dark]: !isDark },
						styles['hover-card']
					)}
				>
					{iconContent}
				</HC.Content>
			</HC.Portal>
		</HC.Root>
	)
}
