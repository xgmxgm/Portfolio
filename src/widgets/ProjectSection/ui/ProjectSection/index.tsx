import { ProjectCard } from '@/entities/ProjectCard'
import styles from './ProjectSection.module.scss'
import { ProjectsData } from '../../constants'

export const ProjectSection = () => {
	return (
		<div className={styles['project-section']}>
			<div className={styles['project-section__wrapper']}>
				{ProjectsData.map((project, index) => (
					<ProjectCard
						img={project.img}
						title={project.title}
						link={project.link}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
