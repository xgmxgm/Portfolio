import { CardLink } from '@/features/CardLink'
import styles from './ContactMe.module.scss'
import { cardsData } from '../../constants'

export const ContactMe = () => {
	return (
		<div className={styles['contact-me']}>
			<div className={styles['contact-me__wrapper']}>
				<div className={styles['contact-me__top']}>
					<div className={styles['contact-me__title']}>
						<p className={styles['contact-me__text']}>Contact me</p>
					</div>
				</div>
				<div className={styles['contact-me__bottom']}>
					{cardsData.map((cardData, index) => (
						<CardLink
							icon={cardData.icon}
							text={cardData.text}
							href={cardData.href}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
