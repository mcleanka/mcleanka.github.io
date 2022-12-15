import { IExperience, IExperiences } from '../types/Experience.type';
import http from './http.service';

const experience = {
	list(url: string, query: {}, baseURL?: string): Promise<IExperiences[]> {
		return http.get<IExperiences[]>(url, query, baseURL);
	},
	show(url: string, baseURL?: string): Promise<IExperience[]> {
		return http.get<IExperience[]>(url, {}, baseURL);
	},
};

export { experience };
