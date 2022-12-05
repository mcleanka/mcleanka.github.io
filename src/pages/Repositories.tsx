import { Octokit } from 'octokit'
import React, { useEffect, useState } from 'react'
import { FaRProject } from 'react-icons/fa'
import RepositoryCard from '../components/RepositoryCard'

const octokit: Octokit = new Octokit({
	auth: process.env.TOKEN
})

export default function Repositories() {
	const [repositories, setRepositories] = useState([])

	const getRepositories = async () => {

		try {
			await octokit.request("GET /repos/{owner}/{repo}/issues", {
				owner: "octocat",
				repo: "Spoon-Knife",
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
			<div className="resume-section-content">
				<h2 className="mb-5">My Repositories</h2>

				{
					// repositories.map((repository, key) => <RepositoryCard />)
				}
			</div>
		</section>
	)
}
