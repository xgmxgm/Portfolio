import { Smile } from '@/shared/ui/Icons/Smile'
import styles from './JourneyTitle.module.scss'

export const JourneyTitle = () => {
	return (
		<div className={styles['journey-title']}>
			<div className={styles['journey-title__wrapper']}>
				<h2 className={styles['title']}>My road in development</h2>
				<div className={styles['icon']}>
					<Smile />
				</div>
			</div>
		</div>
	)
}
