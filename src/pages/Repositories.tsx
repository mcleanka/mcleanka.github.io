import React, { useEffect, useState, FC, ReactElement } from 'react'
import { Container, Row } from 'react-bootstrap'
import NotFound from '../components/NotFound'
import PaginationComponent from '../components/Pagination'
import RepositoryCard from '../components/RepositoryCard'
import { repos } from '../services'
import { IRepository } from '../types/Repository.type'

const api: string | undefined = process.env.REACT_APP_GIT_API;

const Repositories: FC<{}> = (): ReactElement => {

	const repositoriesPerPage: number = 6;
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [repositories, setRepositories] = useState<IRepository[]>([])

	const lastRepositoryNumber: number = currentPage * repositoriesPerPage;
	const firstRepositoryIndex: number = lastRepositoryNumber - repositoriesPerPage;
	const limitedRepositories: IRepository[] = repositories.slice(
		firstRepositoryIndex,
		lastRepositoryNumber
	);

	async function getRepositories(): Promise<void> {
		await repos.list(`/repos`, {
			q: 'tetris+language:assembly',
			sort: 'stars',
			per_page: 100,
			type: 'public'
		}, api).then<void, never>((result) => {
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
							limitedRepositories?.map((repository, key: number) => <RepositoryCard {...repository} key={key} />)
						}

						{
							!limitedRepositories.length && <NotFound />
						}

						{
							limitedRepositories.length > 0 && <PaginationComponent
								itemsCount={repositories.length}
								itemsPerPage={repositoriesPerPage}
								currentPage={currentPage}
								setCurrentPage={setCurrentPage}
								alwaysShown={false}
							/>
						}
					</Row>
				</Container>
			</div>
		</section>
	)
}


export default Repositories