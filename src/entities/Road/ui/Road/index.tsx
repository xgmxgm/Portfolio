'use client'

import { ArrowBlack, ArrowLight } from '@/shared/ui/Icons/Arrow'
import { pVariants, transitionSettings } from '../../animations'
import { ThemeContext } from '@/entities/Theme/model'
import { HoverCard } from '@/shared/ui/HoverCard'
import { Step } from '@/shared/ui/Icons/Step'
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
	icon_1_info,
	icon_2_info,
	icon_3_info,
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
					<div className={styles['road__item']}>
						<HoverCard icon={icon_1} iconContent={icon_1_info} />
					</div>
					<div className={styles['road__item']}>
						<HoverCard icon={icon_2} iconContent={icon_2_info} />
					</div>
				</div>
				<div className={styles['road__center']}>
					{Steps.map((step, index) => (
						<motion.div
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							custom={index}
							variants={pVariants}
							key={index}
						>
							{step}
						</motion.div>
					))}
				</div>
				<div className={styles['road__right']}>
					<div className={styles['road__item']}>
						<HoverCard icon={icon_3} iconContent={icon_3_info} />
					</div>
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
