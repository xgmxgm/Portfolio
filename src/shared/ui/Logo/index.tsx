import styles from './Logo.module.scss'

export const Logo = () => {
	return (
		<div className={styles.logo}>
			<p className={styles.logo__title}>Ernar Kalkabekov</p>
			<p className={styles.logo__subtitle}>XGM</p>
		</div>
	)
}
