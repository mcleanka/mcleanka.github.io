import { IRepository } from '../types/Repository.type';
import http from './http.service';

const repos = {
	list(url: string, query: {}): Promise<IRepository[]> {
		return http.get<IRepository[]>(url, query);
	},
	details(url: string): Promise<IRepository[]> {
		return http.get<IRepository[]>(url);
	},
};

export { repos };
