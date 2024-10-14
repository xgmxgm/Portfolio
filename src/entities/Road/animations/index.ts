export const transitionSettings = {
	type: 'spring',
	duration: 1,
	damping: 10,
	bounce: 1,
	stiffness: 100,
}

export const pVariants = {
	hidden: { scale: 0, opacity: 0 },
	visible: (custom: number) => ({
		scale: 1,
		opacity: 1,
		transition: { delay: custom * 0.1 },
	}),
	hidden2: { y: -100, scale: 0, opacity: 0 },
	visible2: { y: 0, scale: 1, opacity: 1 },
}
