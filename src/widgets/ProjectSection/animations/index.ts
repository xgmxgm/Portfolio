export const pVariants = {
	hidden: { scale: 0, opacity: 0 },
	visible: (custom: number) => ({
		scale: 1,
		opacity: 1,
		transition: { delay: custom * 0.5 },
	}),
}
