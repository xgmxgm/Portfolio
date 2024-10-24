'use client'

import { ArrowButton } from '@/features/ArrowButton/ui/ArrowButton'
import { pVariants, transitionSettings } from '../../animations'
import { ThemeContext } from '@/entities/Theme/model'
import styles from './WelcomeSection.module.scss'
import { Button } from '@/shared/ui/Button'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import classNames from 'classnames'
import { useContext } from 'react'
import Image from 'next/image'

export const WelcomeSection = () => {
	const route = useRouter()
	const { isDark } = useContext(ThemeContext)

	return (
		<div className={styles['welcome-section']}>
			<div className={styles['welcome-section__wrapper']}>
				<motion.div
					className={styles['welcome-section__left']}
					initial='hidden'
					animate='visible'
					variants={pVariants}
					transition={transitionSettings}
				>
					<div className={styles['welcome-section__top']}>
						<div className={styles['welcome-section__title']}>
							<p className={styles['welcome-section__text']}>
								Creating Full Stack applications on a fresh and up-to-date
								technology stack
							</p>
						</div>
					</div>
					<div className={styles['welcome-section__bottom']}>
						<div className={styles['welcome-section__extra']}>
							<Button onClick={() => route.push('/projects')}>
								My projects
							</Button>
						</div>
					</div>
				</motion.div>
				<motion.div
					className={styles['welcome-section__right']}
					initial='hidden2'
					animate='visible2'
					variants={pVariants}
					transition={transitionSettings}
				>
					<div className={styles['welcome-section__img']}>
						<Image
							className={classNames({ [styles.dark]: !isDark }, styles['img'])}
							src='/images/photo_2.webp'
							alt='photo'
							width={200}
							height={50}
							quality={100}
							priority={true}
						/>
					</div>
				</motion.div>
			</div>
			<motion.div
				className={styles['welcome-section__wrapper-bottom']}
				initial='hidden3'
				animate='visible3'
				variants={pVariants}
				transition={transitionSettings}
			>
				<ArrowButton toId='aboutMe' />
			</motion.div>
		</div>
	)
}
