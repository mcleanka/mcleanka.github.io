import React, { FC, ReactElement } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Sidebar.scss';
import profile from "../assets/images/profile.jpg";

const links: string[] = [
	'about',
	'experience',
	'education',
	'skills',
	'repositories',
	'interests',
	'awards',
]

export default function Sidebar(): ReactElement<FC> {
	return (
		<Navbar collapseOnSelect expand='lg' bg='primary' variant='dark' fixed='top' className='sideNav'>
			<Navbar.Brand className='js-scroll-trigger' href="#page-top">
				<span className="d-block d-lg-none">{'Mclean Kasambala'}</span>
				<span className="d-none d-lg-block">
					<img
						className="img-fluid img-profile rounded-circle mx-auto mb-2"
						src={profile}
						alt="..."
					/>
				</span>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="side-navbar" className='border-0' />
			<Navbar.Collapse id="side-navbar">
				<Nav className="me-auto">
					{links.map((link: string, key: number) => <Nav.Link key={key} href={`#${link}`}>{link}</Nav.Link>)}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
