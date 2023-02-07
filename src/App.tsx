import React from 'react'
import Container from 'react-bootstrap/Container';
import ThemeProvider from 'react-bootstrap/ThemeProvider';


import './App.scss'

import Sidebar from './components/Sidebar';
import GoTopButton from './components/GoTopButton';

import { useScroll } from './helpers/scroll';
import { About, Awards, Education, Experience, Interests, Repositories, Skills } from './pages';

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
