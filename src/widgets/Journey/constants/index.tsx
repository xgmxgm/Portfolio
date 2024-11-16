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
		icon_1_info:
			'Used the PC for gaming, and recognized a different affiliation for it. (PC)',
		icon_2_info:
			'To understand what programming is, I started learning Python and fell in love with it. (Python)',
		icon_3_info:
			"I've used quite a few editors, but this was the most convenient and beautiful. (VS code)",
		title: 'First step',
		text: 'My first language is python, and I also used VS Code for my code editor.',
	},
	{
		id: 2,
		icon_1: <HTML />,
		icon_2: <JS />,
		icon_3: <CSS />,
		icon_1_info:
			"There are no other competitors, it's the base for everything. (HTML)",
		icon_2_info: 'My second love, future main love. (JavaScript)',
		icon_3_info: 'Very handy, simple and strong is CSS. (CSS)',
		title: 'Base technologies',
		text: 'Learned the basics of HTML, CSS and JavaScript. And could make simple websites.',
	},
	{
		id: 3,
		icon_1: <NodeJS />,
		icon_2: <Vite />,
		icon_3: <React />,
		icon_1_info:
			'When I found out that JS could work outside the browser, my brain exploded. (NodeJS)',
		icon_2_info:
			"Compared to webpack it's very convenient, fast and neat. (Vite)",
		icon_3_info: 'Turned my world into a before and after. (React)',
		title: 'Frontend',
		text: 'Learned about Node JS, studied React, npm, react router dom at a basic level, and started using Vite.',
	},
	{
		id: 4,
		icon_1: <NextJS />,
		icon_2: <Yarn />,
		icon_3: <Redux />,
		icon_1_info:
			"Makes React easier to work with, but I don't like the idea of ​​the server on the client. (NextJS)",
		icon_2_info: 'A very good replacement for NPM for everyone. (Yarn)',
		icon_3_info: 'Top-1 state manager, but not for long. (Redux)',
		title: 'Frontend',
		text: 'Improved my knowledge of React, learned Redux, switched to Yarn and started using Next JS.',
	},
	{
		id: 5,
		icon_1: <Express />,
		icon_2: <PGSQL />,
		icon_3: <NestJS />,
		icon_1_info:
			'My first experience in the creation of the server, there all not obbodchimy and not only. (ExpressJS)',
		icon_2_info: "Very serious and everyone's favorite DB. (PostgreSQL)",
		icon_3_info: "If you write a server, that's the only way. (NestJS)",
		title: 'Backend',
		text: 'I started creating a server for web applications using Express, Nest. Learned how to work with a database like mongo, postgresql. And learned how to make jwt tokens.',
		isLast: true,
	},
]
