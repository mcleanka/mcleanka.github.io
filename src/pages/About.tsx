import React from 'react'
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebookF } from "react-icons/fa";

import './About.scss'

export default function About() {
	const icons: React.ReactElement[] = [<FaLinkedinIn />, <FaGithub />, <FaTwitter />, <FaFacebookF />]

	return (
		<>
			<section className="resume-section" id="about">
				<div className="resume-section-content">
					<h1 className="mb-0">
						{'Mclean'}{' '}
						<span className="text-primary">{'Kasambala'}</span>
					</h1>
					<div className="subheading mb-5">
						Malawi University of Business and Applied Sciences · Box 303, Chichiri Blantyre 3, Malawi  <br /> (+265) 99-159-3543 · <a href="mailto:mcleankasambala@gmail.com">mcleankasambala@gmail.com</a>
					</div>
					<p className="lead mb-5">
						Motivated and results-driven novice computer engineer with a proven record of
						accomplishment in IT (Information, and Technology) consultancy, hardware and software architecting, development, and deployment, and interested in developing valuable solutions to drive accuracy and process efficiency based on data findings.
					</p>
					<div className="social-icons">
						{
							icons.map((icon, key) => (<a className="social-icon bg-primary" href="#!" key={key}>
								{icon}
							</a>))
						}
					</div>
				</div>
			</section>
		</>
	)
}
