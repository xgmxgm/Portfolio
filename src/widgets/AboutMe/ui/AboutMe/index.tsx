'use client'

import { pVariants, transitionSettings } from '../../animations'
import styles from './AboutMe.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const AboutMe = () => {
	return (
		<div className={styles['about-me']} id='aboutMe'>
			<div className={styles['about-me__wrapper']}>
				<motion.div
					className={styles['about-me__top']}
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0 }}
					variants={pVariants}
					transition={transitionSettings}
				>
					<div className={styles['about-me__title']}>
						<p className={styles['about-me__title-text']}>
							More About Kalkabekov Ernar
						</p>
					</div>
				</motion.div>
				<div className={styles['about-me__bottom']}>
					<motion.div
						className={styles['about-me__right']}
						initial='hidden2'
						whileInView='visible2'
						viewport={{ once: true }}
						variants={pVariants}
						transition={transitionSettings}
					>
						<div className={styles['about-me__img']}>
							<Image
								className={styles['img']}
								src='/images/photo_1.jpg'
								alt='img'
								width={100}
								height={100}
								quality={100}
								priority={true}
							/>
						</div>
					</motion.div>
					<motion.div
						className={styles['about-me__left']}
						initial='hidden3'
						whileInView='visible3'
						viewport={{ amount: 0.1, once: true }}
						variants={pVariants}
						transition={transitionSettings}
					>
						<div className={styles['about-me__info']}>
							<p className={styles['about-me__text']}>
								My name is
								<span className={styles['red-text']}> Ernar Kalkabekov</span>, I
								was born and live in Kazakhstan. And my nickname on the Internet
								is <span className={styles['red-text']}>XGM</span>.
								<br /> <br /> I like to create web applications together with
								the server, on the very popular framework
								<span className={styles['blue-text']}> NEXT JS</span> or
								<span className={styles['blue-text']}> REACT JS</span>.
								<br /> <br /> One of my hobbies is solving Rubik's cubes and
								other puzzles.
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	)
}
