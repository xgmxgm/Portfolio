'use client'

import { ProjectCard } from '@/entities/ProjectCard'
import styles from './ProjectSection.module.scss'
import { ProjectsData } from '../../constants'
import { pVariants } from '../../animations'
import { motion } from 'framer-motion'

export const ProjectSection = () => {
	return (
		<div className={styles['project-section']}>
			<div className={styles['project-section__wrapper']}>
				{ProjectsData.map((project, index) => (
					<motion.div
						variants={pVariants}
						initial='hidden'
						animate='visible'
						custom={index}
						key={index}
					>
						<ProjectCard
							img={project.img}
							title={project.title}
							link={project.link}
							gitLink={project.gitLink}
							key={index}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}
