import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL: 'https://api.github.com',
	timeout: 1000,
	headers: {
		'Content-type': 'application/json',
	},
});

instance.interceptors.response.use(
	(res) => res,
	(error: AxiosError) => {
		const { data, status } = error.response!;

		switch (status) {
			case 400:
				console.error(data);
				break;

			case 401:
				console.error('unauthorised');
				break;

			case 404:
				console.error('/not-found');
				break;

			case 500:
				console.error('/server-error');
				break;
		}

		return Promise.reject(error);
	}
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const http = {
	get: <T>(url: string) => instance.get<T>(url).then(responseBody),
	post: <T>(url: string, body: {}) =>
		instance.post<T>(url, body).then(responseBody),
};

export default http;
