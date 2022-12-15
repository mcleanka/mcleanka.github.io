import React, { FC, ReactElement, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ExperienceCard from '../components/ExperienceCard';
import NotFound from '../components/NotFound';
import { experience } from '../services';
import { IExperiences } from '../types/Experience.type';

import './Experience.scss';

const username = process.env.REACT_APP_API_USERNAME;
const api: string | undefined = `https://my-json-server.typicode.com/${username}/rest-models/`

function Experience(): ReactElement<FC> {
	const [experiences, setExperiences] = useState<IExperiences[]>([]);

	const [elements, setElements] = useState<IExperiences[]>([]);

	const loadMore = () => {
		setElements([...elements, ...experiences]);
	};

	const getExperiences = async (): Promise<void> => {
		await experience.list("/experiences", {}, api)
			.then<void, never>((result) => setExperiences(result))
	}

	useEffect(() => {
		getExperiences()
	}, [])

	return (
		<section className="resume-section" id="experience">
			<div className="resume-section-content">
				<h2 className="mb-5">{'PROFESSIONAL EXPERIENCE'}</h2>
				{
					(experiences.length > 0) && <VerticalTimeline className='w-100'>
						{
							experiences?.map((experience: any, key: number): JSX.Element => <ExperienceCard key={key} {...experience} />)
						}
						<VerticalTimelineElement
							iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
							iconClassName="vertical-timeline-element-icon--button"
							icon={<FaPlus />}
							iconOnClick={loadMore}
						/>

					</VerticalTimeline>
				}

				{
					!experiences.length && <NotFound />
				}
			</div>
		</section>
	)
}

export default Experience