import { ArrowLight, ArrowBlack } from '@/shared/ui/Icons/Arrow'
import { ThemeContext } from '@/entities/Theme/model'
import styles from './ArrowButton.module.scss'
import { FC, useContext } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

interface IProps {
	toId: string
}

export const ArrowButton: FC<IProps> = ({ toId }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<Link
			href={`#${toId}`}
			className={classNames({ [styles.dark]: isDark }, styles.button)}
		>
			<div className={styles.button__wrapper}>
				{!isDark ? <ArrowBlack /> : <ArrowLight />}
			</div>
		</Link>
	)
}
