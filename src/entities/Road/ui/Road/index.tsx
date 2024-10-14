'use client'

import { ArrowBlack, ArrowLight } from '@/shared/ui/Icons/Arrow'
import { ThemeContext } from '@/entities/Theme/model'
import { Step } from '@/shared/ui/Icons/Step'
import { pVariants, transitionSettings } from '../../animations'
import styles from './Road.module.scss'
import { RoadType } from '../../types'
import { FC, useContext } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Steps = [
	<Step />,
	<Step />,
	<Step />,
	<Step />,
	<Step />,
	<Step />,
	<Step />,
	<Step />,
	<Step />,
]

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
					{Steps.map((step, index) => (
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							custom={index}
							variants={pVariants}
						>
							{step}
						</motion.div>
					))}
				</div>
				<div className={styles['road__right']}>
					<div className={styles['road__item']}>{icon_3}</div>
				</div>
			</div>
			<motion.div
				className={styles['road__note']}
				variants={pVariants}
				initial='hidden2'
				whileInView='visible2'
				viewport={{ once: true }}
				transition={transitionSettings}
			>
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
			</motion.div>
		</div>
	)
}
