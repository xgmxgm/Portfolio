import { WelcomeSection } from '@/widgets/WelcomeSection'
import { ContactMe } from '@/widgets/ContactMe'
import { AboutMe } from '@/widgets/AboutMe'

export default function Home() {
	return (
		<div className=''>
			<div>
				<WelcomeSection />
			</div>
			<div>
				<AboutMe />
			</div>
			<div>
				<ContactMe />
			</div>
		</div>
	)
}
