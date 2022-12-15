import { IQualification, IQualifications } from '../types/Education.type';
import http from './http.service';

const education = {
	list(url: string, query: {}, baseURL?: string): Promise<IQualifications[]> {
		return http.get<IQualifications[]>(url, query, baseURL);
	},
	show(url: string, baseURL?: string): Promise<IQualification[]> {
		return http.get<IQualification[]>(url, {}, baseURL);
	},
};

export { education };
