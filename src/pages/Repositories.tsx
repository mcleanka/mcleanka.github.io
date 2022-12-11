import { Octokit } from 'octokit'
import React, { useEffect, useState, FC, ReactElement } from 'react'
import { Container, Row } from 'react-bootstrap'
import RepositoryCard, { IRepository } from '../components/RepositoryCard'

const token: string | undefined | null = process.env.REACT_APP_API_KEY

const octokit: Octokit = new Octokit({
	auth: token
})


const Repositories: FC<{}> = (): ReactElement => {
	const [repositories, setRepositories] = useState<Array<IRepository>>([])

	const getRepositories = async (): Promise<void> => {

		try {
			await octokit.request<any>("GET /users/{owner}/{repos}", {
				owner: "mcleanka",
				repos: "repos",
			}).then((response) => response.data)
				.then((data: any) => {
					setRepositories(data)
				})
		} catch (error: any) {
			console.log(`Error! Status: ${error.status}. Message: ${error.response.data.message}`)
		}
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