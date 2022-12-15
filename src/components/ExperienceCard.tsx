import React from 'react'
import { IExperience } from '../types/Experience.type'

export default function ExperienceCard(props: IExperience) {
	return (
		<>
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
					<h3 className="mb-0 h5">{props.CompanyName}</h3>
					<div className="subheading mb-3">{props.JobTitle}</div>
					<p className='text-muted'>{props.JobDescription}</p>
				</div>
				<div className="flex-shrink-0 text-primary small">
					<span>
						{props.StartDate}
					</span>
					<span>
						{' - '}
					</span>
					<span>
						{props.EndDate}
					</span>
				</div>
			</div>
		</>
	)
}
