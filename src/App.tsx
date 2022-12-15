import React from 'react'
import Container from 'react-bootstrap/Container';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import Sidebar from './components/Sidebar';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Awards from './pages/Awards';
import './App.scss'
import Repositories from './pages/Repositories';
import Interests from './pages/Interests';
import GoTopButton from './components/GoTopButton';
import { useScroll } from './helpers/scroll';

export default function App() {
	const scrollPosition = useScroll()

	return (
		<ThemeProvider
			breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
			minBreakpoint="xxs"
		>
			<Sidebar />
			<Container className='p-0'>
				<About />
				<hr className='m-0' />
				<Experience />
				<hr className='m-0' />
				<Education />
				<hr className='m-0' />
				<Skills />
				<hr className='m-0' />
				<Repositories />
				<hr className='m-0' />
				<Interests />
				<hr className='m-0' />
				<Awards />

				<GoTopButton visible={scrollPosition > 400} />
			</Container>
		</ThemeProvider>
	)
}
