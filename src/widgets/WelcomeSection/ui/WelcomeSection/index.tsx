'use client'

import { ArrowButton } from '@/features/ArrowButton/ui/ArrowButton'
import { ThemeContext } from '@/entities/Theme/model'
import styles from './WelcomeSection.module.scss'
import { Button } from '@/shared/ui/Button'
import { useRouter } from 'next/navigation'
import classNames from 'classnames'
import { useContext } from 'react'
import Image from 'next/image'

export const WelcomeSection = () => {
	const route = useRouter()
	const { isDark } = useContext(ThemeContext)

	return (
		<div className={styles['welcome-section']}>
			<div className={styles['welcome-section__wrapper']}>
				<div className={styles['welcome-section__left']}>
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
				</div>
				<div className={styles['welcome-section__right']}>
					<div className={styles['welcome-section__img']}>
						<Image
							className={classNames({ [styles.dark]: !isDark }, styles['img'])}
							src='/images/photo_1.jpg'
							alt='photo'
							width={200}
							height={50}
							priority
						/>
					</div>
				</div>
			</div>
			<div className={styles['welcome-section__wrapper-bottom']}>
				<ArrowButton toId='aboutMe' />
			</div>
		</div>
	)
}
