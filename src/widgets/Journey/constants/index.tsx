import { Express } from '@/shared/ui/Icons/Express'
import { Laptop } from '@/shared/ui/Icons/Laptop'
import { Python } from '@/shared/ui/Icons/Python'
import { VSCode } from '@/shared/ui/Icons/VSCode'
import { NodeJS } from '@/shared/ui/Icons/NodeJS'
import { NestJS } from '@/shared/ui/Icons/NestJS'
import { NextJS } from '@/shared/ui/Icons/NextJS'
import { RoadType } from '@/entities/Road/types'
import { PGSQL } from '@/shared/ui/Icons/PGSQL'
import { React } from '@/shared/ui/Icons/React'
import { Redux } from '@/shared/ui/Icons/Redux'
import { Vite } from '@/shared/ui/Icons/Vite'
import { Yarn } from '@/shared/ui/Icons/Yarn'
import { HTML } from '@/shared/ui/Icons/HTML'
import { CSS } from '@/shared/ui/Icons/CSS'
import { JS } from '@/shared/ui/Icons/JS'

export const Roads: RoadType[] = [
	{
		id: 1,
		icon_1: <Laptop />,
		icon_2: <Python />,
		icon_3: <VSCode />,
		title: 'First step',
		text: 'My first language is python, and I also used VS Code for my code editor.',
	},
	{
		id: 2,
		icon_1: <HTML />,
		icon_2: <JS />,
		icon_3: <CSS />,
		title: 'Base technologies',
		text: 'Learned the basics of HTML, CSS and JavaScript. And could make simple websites.',
	},
	{
		id: 3,
		icon_1: <NodeJS />,
		icon_2: <Vite />,
		icon_3: <React />,
		title: 'Frontend',
		text: 'Learned about Node JS, studied React, npm, react router dom at a basic level, and started using Vite.',
	},
	{
		id: 4,
		icon_1: <NextJS />,
		icon_2: <Yarn />,
		icon_3: <Redux />,
		title: 'Frontend',
		text: 'Improved my knowledge of React, learned Redux, switched to Yarn and started using Next JS.',
	},
	{
		id: 5,
		icon_1: <Express />,
		icon_2: <PGSQL />,
		icon_3: <NestJS />,
		title: 'Backend',
		text: 'I started creating a server for web applications using Express, Nest. Learned how to work with a database like mongo, postgresql. And learned how to make jwt tokens.',
		isLast: true,
	},
]
