import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const instance: AxiosInstance = axios.create({
	baseURL: 'https://api.github.com',
	headers: {
		'Content-type': 'application/json',
	},
});

instance.interceptors.response.use(
	(res) => res,
	(error: AxiosError) => {
		const { status, message } = error;

		switch (status) {
			case 400:
				console.error(message);
				break;

			case 401:
				console.error(message);
				break;

			case 404:
				console.error(message);
				break;

			case 500:
				console.error(message);
				break;
			default:
				console.log(message);
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
