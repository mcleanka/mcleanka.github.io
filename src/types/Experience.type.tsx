export interface IExperience {
	Id?: number;
	CompanyName: string;
	JobTitle: string;
	JobDescription: string;
	StartDate: String;
	EndDate: string;
}

export interface IExperiences {
	IExperience?: IExperience[];
}