import styles from './AboutMe.module.scss'
import Image from 'next/image'

export const AboutMe = () => {
	return (
		<div className={styles['about-me']} id='aboutMe'>
			<div className={styles['about-me__wrapper']}>
				<div className={styles['about-me__top']}>
					<div className={styles['about-me__title']}>
						<p className={styles['about-me__title-text']}>
							More About Kalkabekov Ernar
						</p>
					</div>
				</div>
				<div className={styles['about-me__bottom']}>
					<div className={styles['about-me__right']}>
						<div className={styles['about-me__img']}>
							<Image
								className={styles['img']}
								src='/images/photo_1.jpg'
								alt='img'
								width={100}
								height={100}
							/>
						</div>
					</div>
					<div className={styles['about-me__left']}>
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
					</div>
				</div>
			</div>
		</div>
	)
}
