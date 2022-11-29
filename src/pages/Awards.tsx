import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Awards.scss';

function Awards() {
	return (
		<section className="resume-section" id="awards">
			<div className="resume-section-content">
				<h2 className="mb-5">{'Awards & Certifications'}</h2>
				<ul className="fa-ul mb-0">
					<li>
						<span className="fa-li">
							<FaArrowRight />
						</span> {' '}
						Coming soon...
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Awards