'use client'

import { GitHubDark, GitHubLight } from '@/shared/ui/Icons/GitHub'
import { ArrowBlack, ArrowLight } from '@/shared/ui/Icons/Arrow'
import { ThemeContext } from '@/entities/Theme/model'
import styles from './ProjectCard.module.scss'
import { FC, useContext } from 'react'
import { Project } from '../../types'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export const ProjectCard: FC<Project> = ({ img, title, link, gitLink }) => {
	const { isDark } = useContext(ThemeContext)

	return (
		<div
			className={classNames({ [styles.dark]: !isDark }, styles['project-card'])}
		>
			<div className={styles['project-card__wrapper']}>
				<div className={styles['project-card__top']}>
					<div className={styles['project-card__img-wrapper']}>
						<Image
							className={styles['img']}
							src={img}
							alt='Project img'
							width={400}
							height={0}
							priority={true}
						/>
					</div>
				</div>
				<div className={styles['project-card__bottom']}>
					<div className={styles['project-card__title']}>
						<p className={styles['project-card__text']}>{title}</p>
						<Link
							href={gitLink}
							target='_blank'
							className={styles['project-card__icon']}
						>
							{isDark ? <GitHubLight /> : <GitHubDark />}
						</Link>
					</div>
					<div className={styles['project-card__link']}>
						<Link href={link} target='_blank'>
							My website
						</Link>
						<div className={styles['project-card__arrow']}>
							{isDark ? <ArrowLight /> : <ArrowBlack />}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
