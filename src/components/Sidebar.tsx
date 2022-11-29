import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './Sidebar.scss';
import profile from "../assets/images/profile.jpg";

export default function Sidebar() {
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
			<Navbar.Toggle aria-controls="navbarResponsive" />
			<Navbar.Collapse id="navbarResponsive">
				<Nav className="me-auto">
					<Nav.Link className='js-scroll-trigger' href="#about">About</Nav.Link>
					<Nav.Link className='js-scroll-trigger' href="#experience">Experience</Nav.Link>
					<Nav.Link className='js-scroll-trigger' href="#education">Education</Nav.Link>
					<Nav.Link className='js-scroll-trigger' href="#skills">Skills</Nav.Link>
					<Nav.Link className='js-scroll-trigger' href="#interests">Interests</Nav.Link>
					<Nav.Link className='js-scroll-trigger' href="#awards">Awards</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}
