'use client'

import { CardLink } from '@/features/CardLink'
import styles from './ContactMe.module.scss'
import { pVariants } from '../../animations'
import { cardsData } from '../../constants'
import { motion } from 'framer-motion'

export const ContactMe = () => {
	return (
		<motion.div
			className={styles['contact-me']}
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true }}
			style={{ overflow: 'hidden' }}
		>
			<div className={styles['contact-me__wrapper']}>
				<div className={styles['contact-me__top']}>
					<motion.div
						className={styles['contact-me__title']}
						initial='hidden2'
						whileInView='visible2'
						variants={pVariants}
						viewport={{ once: true }}
						transition={{ delay: 1 }}
						style={{ overflow: 'hidden' }}
					>
						<p className={styles['contact-me__text']}>Contact me</p>
					</motion.div>
				</div>
				<div className={styles['contact-me__bottom']}>
					{cardsData.map((cardData, index) => (
						<motion.div key={index} variants={pVariants} custom={index}>
							<CardLink
								icon={cardData.icon}
								text={cardData.text}
								href={cardData.href}
								key={index}
							/>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
