export const pVariants = {
	hidden: { y: -100, opacity: 0 },
	visible: (custom: number) => ({
		y: 0,
		opacity: 1,
		transition: { delay: custom * 0.5 },
	}),
	hidden2: { x: -100, opacity: 0 },
	visible2: { x: 0, opacity: 1 },
}
