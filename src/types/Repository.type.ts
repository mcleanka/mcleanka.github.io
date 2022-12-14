export interface IRepository {
	name: string;
	full_name: string;
	description: string;
	pushed_at: string;
	created_at: string;
	html_url: string;
	stargazers_count: number;
	id: number | bigint;
}
