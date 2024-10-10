import { ThemeProvider } from './Providers'
import { Header } from '@/widgets/Header'
import { Footer } from '@/widgets/Footer'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'

const geistSans = localFont({
	src: './Fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './Fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Ernar Kalkabekov (XGM)',
	description: 'Portfolio app by XGM',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<ThemeProvider>
				<body
					className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<header>
						<Header />
					</header>
					<main>{children}</main>
					<footer>
						<Footer />
					</footer>
				</body>
			</ThemeProvider>
		</html>
	)
}
