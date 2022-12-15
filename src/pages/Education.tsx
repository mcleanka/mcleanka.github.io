import React, { FC, ReactElement, useEffect, useState } from 'react';
import EducationCard from '../components/EducationCard';
import NotFound from '../components/NotFound';
import { education } from '../services/education.service';
import { IQualifications } from '../types/Education.type';

function Education(): ReactElement<FC> {
	const [qualifications, setQualifications] = useState<IQualifications[]>([])

	const getQualifications = async (): Promise<void> => {
		await education.list("/education", {})
			.then<void, never>((result) => setQualifications(result))
	}

	useEffect(() => {
		getQualifications()
	}, [])


	return (
		<section className="resume-section" id="education">
			<div className="resume-section-content">
				<h2 className="mb-5">Education</h2>

				{
					qualifications?.map((qualification: any, key: number): JSX.Element => <EducationCard key={key} {...qualification} />)
				}

				{
					!qualifications.length && <NotFound title='No qualification found' />
				}

			</div>
		</section>
	)
}

export default Education