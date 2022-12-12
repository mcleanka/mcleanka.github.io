import React, { useEffect, useState, FC, ReactElement } from 'react'
import { Container, Row } from 'react-bootstrap'
import RepositoryCard from '../components/RepositoryCard'
import { repos as http } from '../services/index.service'
import { IRepository } from '../types/Repository.type'

const username = process.env.REACT_APP_API_USERNAME;

const Repositories: FC<{}> = (): ReactElement => {

	const [repositories, setRepositories] = useState<IRepository[]>([])

	const getRepositories = async (): Promise<void> => {

		await http.list(`/users/${username}/repos`).then<void, never>((result) => {
			setRepositories(result)
		})
	}

	useEffect(() => {
		getRepositories()
	}, [])

	return (
		<section className="resume-section" id="repositories">
			<div className="resume-section-content py-0">
				<h2 className="mb-5">{'My Repositories'}</h2>

				<Container className='px-0'>
					<Row>
						{
							repositories?.map((repository, key) => {

								return <RepositoryCard {...repository} key={key} />
							})
						}
					</Row>
				</Container>
			</div>
		</section>
	)
}


export default Repositories