import React, { FC, ReactElement, useEffect, useState } from 'react';
import ExperienceCard from '../components/ExperienceCard';
import NotFound from '../components/NotFound';
import { experience } from '../services';
import { IExperiences } from '../types/Experience.type';

const api: string | undefined = process.env.REACT_APP_API_URL

function Experience(): ReactElement<FC> {
	const [experiences, setExperiences] = useState<IExperiences[]>([]);

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
					experiences?.map((experience: any, key: number): JSX.Element => <ExperienceCard key={key} {...experience} />)
				}

				{
					!experiences.length && <NotFound />
				}
			</div>
		</section>
	)
}

export default Experience