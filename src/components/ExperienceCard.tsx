import React from 'react'
import { IExperience } from '../types/Experience.type';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaClock } from 'react-icons/fa';

export default function ExperienceCard(props: IExperience) {
	return (
		<>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentArrowStyle={{ borderRight: '7px solid  #efefef' }}
				date={props.StartDate + ' - ' + props.EndDate}
				iconStyle={{ background: '#0d6efd', color: '#fff' }}
				icon={<FaClock />}
				key={props.Id}
			>
				<h5 className="vertical-timeline-element-title h5">{props.CompanyName}</h5>
				<h4 className="vertical-timeline-element-subtitle small">{props.JobTitle}</h4>

				<ul className="mb-0 mt-1">
					{
						props.JobDescription?.map((description, key) => <>
							<li key={key} className='small text-muted'>{description}</li>
						</>)
					}
				</ul>
			</VerticalTimelineElement>
		</>
	)
}
