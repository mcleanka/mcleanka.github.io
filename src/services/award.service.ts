import { IAward, IAwards } from '../types/Award.type';
import http from './http.service';

const award = {
	list(url: string, query: {}, baseURL?: string): Promise<IAwards[]> {
		return http.get<IAwards[]>(url, query, baseURL);
	},
	show(url: string, baseURL?: string): Promise<IAward[]> {
		return http.get<IAward[]>(url, {}, baseURL);
	},
};

export { award };
