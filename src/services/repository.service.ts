import { IRepository } from '../types/Repository.type';
import http from './http.service';

const repos = {
	list(url: string, query: {}, baseURL?: string): Promise<IRepository[]> {
		return http.get<IRepository[]>(url, query, baseURL);
	},
	show(url: string, baseURL: string): Promise<IRepository[]> {
		return http.get<IRepository[]>(url, baseURL);
	},
};

export { repos };
