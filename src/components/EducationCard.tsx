import React from 'react'
import { IQualification } from '../types/Education.type'

export default function EducationCard(props: IQualification): JSX.Element {
	return (
		<>
			<div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
					<h5 className="mb-0">{props.Institution}</h5>
					<div className="subheading mb-3 small">{props.Program}</div>
					<div className='small'>{props.Qualifications}</div>
					<p className='text-danger small'>{props.Average}</p>
				</div>
				<div className="flex-shrink-0">
					<span className="text-primary">{`${props.StartDate} - ${props.EndDate}`}</span>
				</div>
			</div>
		</>
	)
}
