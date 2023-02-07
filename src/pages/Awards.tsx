import React, { FC, ReactElement, useEffect, useState } from 'react';
import { NotFound } from '../components';
import { award } from '../services';
import { IAwards } from '../types/Award.type';

const Awards: FC<{}> = (): ReactElement => {
	const [awards, setAwards] = useState<IAwards[]>([])

	async function getAwards(): Promise<void> {
		await award.list('/awards', {})
			.then<void, never>((result) => setAwards(result))
	}

	useEffect(() => {
		getAwards()
	}, [])

	return (
		<section className="resume-section" id="awards">
			<div className="resume-section-content">
				<h2 className="mb-5">{'Awards & Certifications'}</h2>
				<ul className="ml-0 mb-0">
					<li>
						{
							(awards.length > 0) && <div></div>
						}

						{
							!awards.length && <NotFound title='No award(s) or certification(s) found' />
						}
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Awards