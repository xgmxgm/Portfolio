'use client'

import { ArrowBlack, ArrowLight } from '@/shared/ui/Icons/Arrow'
import { ThemeContext } from '@/entities/Theme/model'
import styles from './Road.module.scss'
import { RoadType } from '../../types'
import { FC, useContext } from 'react'
import Link from 'next/link'

export const Road: FC<RoadType> = ({
	icon_1,
	icon_2,
	icon_3,
	title,
	text,
	id,
	isLast = false,
}) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<div className={styles['road']} id={`${id}`}>
			<div className={styles['road__wrapper']}>
				<div className={styles['road__left']}>
					<div className={styles['road__item']}>{icon_1}</div>
					<div className={styles['road__item']}>{icon_2}</div>
				</div>
				<div className={styles['road__center']}>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__step']}></div>
					<div className={styles['road__dot']}></div>
				</div>
				<div className={styles['road__right']}>
					<div className={styles['road__item']}>{icon_3}</div>
				</div>
			</div>
			<div className={styles['road__note']}>
				<h2 className={styles['title']}>{title}</h2>
				<p>{text}</p>
				<div className={styles['road__buttons']}>
					{id != 1 && (
						<Link href={`#${id - 1}`}>
							<div className={styles['button']} style={{ rotate: '180deg' }}>
								{isDark ? <ArrowLight /> : <ArrowBlack />}
							</div>
						</Link>
					)}
					{!isLast && (
						<Link href={`#${id + 1}`}>
							<div className={styles['button']}>
								{isDark ? <ArrowLight /> : <ArrowBlack />}
							</div>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
