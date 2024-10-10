import styles from './JourneyRoad.module.scss'
import { Road } from '@/entities/Road'
import { Roads } from '../../constants'

export const JourneyRoad = () => {
	return (
		<div className={styles['journey-road']}>
			<div className={styles['journey-road__wrapper']}>
				{Roads.map((road, index) => (
					<Road
						id={road.id}
						icon_1={road.icon_1}
						icon_2={road.icon_2}
						icon_3={road.icon_3}
						title={road.title}
						text={road.text}
						key={index}
						isLast={road.isLast}
					/>
				))}
			</div>
		</div>
	)
}
